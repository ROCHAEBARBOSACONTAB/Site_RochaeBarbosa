import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  analyticsReady,
  getAnalyticsConsent,
  initializeAnalytics,
  trackEvent,
  trackPageView,
} from "../lib/analytics";

const getLeadMethod = (href) => {
  if (href.startsWith("tel:")) return "telefone";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("wa.me/") || href.includes("whatsapp.com/")) return "whatsapp";
  return null;
};

export default function Analytics() {
  const location = useLocation();
  const [consent, setConsent] = useState(getAnalyticsConsent);

  useEffect(() => {
    const syncConsent = () => setConsent(getAnalyticsConsent());
    window.addEventListener("analytics-consent-change", syncConsent);
    return () => window.removeEventListener("analytics-consent-change", syncConsent);
  }, []);

  useEffect(() => {
    if (consent !== "granted") return undefined;

    const sendPageView = () => {
      initializeAnalytics();
      trackPageView(`${location.pathname}${location.search}`);
    };

    if (analyticsReady() || document.readyState === "complete") {
      sendPageView();
      return undefined;
    }

    window.addEventListener("load", sendPageView, { once: true });
    return () => window.removeEventListener("load", sendPageView);
  }, [consent, location.pathname, location.search]);

  useEffect(() => {
    if (consent !== "granted") return undefined;

    const onClick = (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;

      const method = getLeadMethod(link.href);
      if (method) {
        trackEvent("generate_lead", {
          method,
          link_location: `${location.pathname}${location.search}`,
        });
      }

      const ctaName = link.dataset.analytics;
      if (ctaName) {
        trackEvent("select_content", {
          content_type: "cta",
          item_id: ctaName,
          link_location: `${location.pathname}${location.search}`,
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent, location.pathname, location.search]);

  return null;
}
