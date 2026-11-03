import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsConfig } from '../../utils/data';

interface GtagCommand {
  [key: string]: unknown;
}

type GtagFn = (command: string, ...args: unknown[]) => void;

type Gtag = Window & { gtag?: GtagFn };

const gtag: Gtag['gtag'] | undefined = typeof window !== 'undefined' ? (window as Gtag).gtag : undefined;

// Google Analytics tracking component
export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      if (typeof window !== 'undefined' && analyticsConfig.googleAnalyticsId) {
        // Load Google Analytics script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsConfig.googleAnalyticsId}');
        `;
        document.head.appendChild(script2);
      }
    };

    initGA();
  }, []);

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && gtag && analyticsConfig.googleAnalyticsId) {
      gtag('config', analyticsConfig.googleAnalyticsId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

// Plausible Analytics tracking component
export function PlausibleAnalytics() {
  useEffect(() => {
    if (analyticsConfig.plausibleDomain) {
      const script = document.createElement('script');
      script.defer = true;
      script.setAttribute('data-domain', analyticsConfig.plausibleDomain);
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  }, []);

  return null;
}

// Custom event tracking
export function trackEvent(eventName: string, eventParams?: GtagCommand) {
  if (typeof window !== 'undefined' && (window as Gtag).gtag) {
    (window as Gtag).gtag?.('event', eventName, eventParams ?? {});
  }
}

// Page view tracking
export function trackPageView(pagePath: string) {
  if (typeof window !== 'undefined' && (window as Gtag).gtag) {
    (window as Gtag).gtag?.('event', 'page_view', {
      page_path: pagePath,
    });
  }
}
// Main Analytics component that includes both
export default function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <PlausibleAnalytics />
    </>
  );
}
