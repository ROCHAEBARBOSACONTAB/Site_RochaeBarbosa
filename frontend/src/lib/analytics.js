const MEASUREMENT_ID = "G-5Y2Y0ZBQ3F";
const CONSENT_KEY = "rochaebarbosa_analytics_consent";

let initialized = false;

const gtag = (...args) => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtagProxy() {
    window.dataLayer.push(arguments);
  };
  window.gtag(...args);
};

export const initializeAnalytics = () => {
  if (initialized || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
  });

  initialized = true;
};

export const analyticsReady = () => initialized;

export const getAnalyticsConsent = () => {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(CONSENT_KEY);
};

export const setAnalyticsConsent = (value) => {
  window.localStorage.setItem(CONSENT_KEY, value);
  if (value === "granted") {
    initializeAnalytics();
  }
  window.dispatchEvent(new Event("analytics-consent-change"));
};

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window === "undefined" || !initialized) return;
  gtag("event", eventName, parameters);
};

export const trackPageView = (path) => {
  trackEvent("page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  });
};
