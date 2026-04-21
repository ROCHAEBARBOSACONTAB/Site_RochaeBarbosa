import os, uuid, pytest, requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://protheus-experts-1.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def s():
    return requests.Session()


@pytest.fixture(scope="session")
def admin_token(s):
    r = s.post(f"{API}/auth/login", json={"email": "admin@rochabarbosa.com.br", "password": "Admin@2026"})
    assert r.status_code == 200, r.text
    d = r.json()
    assert d["user"]["role"] == "admin"
    return d["token"]


def test_health(s):
    r = s.get(f"{API}/")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_register_and_me(s):
    email = f"TEST_{uuid.uuid4().hex[:8]}@teste.com"
    r = s.post(f"{API}/auth/register", json={"name": "Test", "email": email, "password": "Test@2026"})
    assert r.status_code == 200, r.text
    token = r.json()["token"]
    r2 = s.get(f"{API}/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert r2.status_code == 200
    assert r2.json()["email"] == email.lower()
    # duplicate
    r3 = s.post(f"{API}/auth/register", json={"name": "T", "email": email, "password": "x"})
    assert r3.status_code == 400


def test_admin_login(admin_token):
    assert isinstance(admin_token, str) and len(admin_token) > 10


def test_lead_create(s):
    r = s.post(f"{API}/leads", json={"name": "TEST Lead", "email": "TEST_lead@x.com", "source": "diagnostic"})
    assert r.status_code == 200
    assert r.json()["ok"] is True


def test_contact_create(s):
    r = s.post(f"{API}/contact", json={"name": "TEST C", "email": "TEST_c@x.com", "message": "Olá"})
    assert r.status_code == 200


def test_blog_list_and_filter(s):
    r = s.get(f"{API}/blog")
    assert r.status_code == 200
    posts = r.json()
    assert len(posts) >= 6
    r2 = s.get(f"{API}/blog", params={"category": "SPED"})
    assert r2.status_code == 200
    assert all(p["category"] == "SPED" for p in r2.json())


def test_blog_get_slug(s):
    r = s.get(f"{API}/blog/sped-efd-contribuicoes-erros-mais-comuns")
    assert r.status_code == 200
    assert "content" in r.json()


def test_resources_list(s):
    r = s.get(f"{API}/resources")
    assert r.status_code == 200
    data = r.json()
    assert len(data) >= 6
    assert all("file_url" not in r for r in data)


def test_resource_access_open_and_gated(s):
    r = s.get(f"{API}/resources").json()
    open_r = next(x for x in r if not x["gated"])
    gated_r = next(x for x in r if x["gated"])
    payload = {"name": "TEST R", "email": "TEST_r@x.com", "source": "resource_gate"}
    r1 = s.post(f"{API}/resources/{open_r['id']}/access", json=payload)
    assert r1.status_code == 200
    assert "file_url" in r1.json()
    r2 = s.post(f"{API}/resources/{gated_r['id']}/access", json=payload)
    assert r2.status_code == 200
    assert "file_url" in r2.json()


def test_admin_stats_requires_token(s, admin_token):
    r = s.get(f"{API}/admin/stats")
    assert r.status_code in (401, 403)
    r2 = s.get(f"{API}/admin/stats", headers={"Authorization": f"Bearer {admin_token}"})
    assert r2.status_code == 200
    d = r2.json()
    for k in ["leads", "contacts", "users", "posts"]:
        assert k in d


def test_admin_leads_contacts(s, admin_token):
    h = {"Authorization": f"Bearer {admin_token}"}
    for ep in ["/admin/leads", "/admin/contacts"]:
        r = s.get(f"{API}{ep}", headers=h)
        assert r.status_code == 200
        assert isinstance(r.json(), list)


def test_chat(s):
    sid = f"test-{uuid.uuid4().hex[:8]}"
    r = s.post(f"{API}/chat", json={"session_id": sid, "message": "O que é SPED?"}, timeout=60)
    assert r.status_code == 200, r.text
    reply = r.json().get("reply", "")
    assert len(reply) > 20
