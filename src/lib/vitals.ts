import { onCLS, onFID, onLCP } from 'web-vitals';
import { captureMessage } from './sentry';

type Metric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

const vitalsThresholds = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  LCP: { good: 2500, poor: 4000 },
};

function getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = vitalsThresholds[metric as keyof typeof vitalsThresholds];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

function sendToAnalytics(metric: Metric) {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`Web Vitals - ${metric.name}:`, {
      value: metric.value.toFixed(2),
      rating: metric.rating,
    });
  }

  // Send to Sentry in production
  if (import.meta.env.PROD) {
    captureMessage(`Web Vitals - ${metric.name}`, {
      extra: {
        value: metric.value,
        rating: metric.rating,
      },
    });
  }
}

export function reportWebVitals() {
  onCLS((metric) => {
    sendToAnalytics({
      name: 'CLS',
      value: metric.value,
      rating: getRating('CLS', metric.value),
    });
  });

  onFID((metric) => {
    sendToAnalytics({
      name: 'FID',
      value: metric.value,
      rating: getRating('FID', metric.value),
    });
  });

  onLCP((metric) => {
    sendToAnalytics({
      name: 'LCP',
      value: metric.value,
      rating: getRating('LCP', metric.value),
    });
  });
} 