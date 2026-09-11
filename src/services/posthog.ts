import posthog from 'posthog-js';

const POSTHOG_KEY =
  import.meta.env.VITE_POSTHOG_KEY ||
  'phc_CPoGAL5oTprJu9tsseHWNupDTxjVugVUuBJJRNzy5wu2';

const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

export const initPostHog = () => {
  if (typeof window === 'undefined') return;

  if (!POSTHOG_KEY) {
    console.warn('[PostHog] Chave VITE_POSTHOG_KEY não configurada.');
    return;
  }

  try {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      autocapture: true,
      capture_pageview: false, // Controlado manualmente pelo PostHogPageViewTracker no React Router
      capture_pageleave: true,
      session_recording: {
        maskAllInputs: true,
      },
      persistence: 'localStorage+cookie',
    });
  } catch (error) {
    console.error('[PostHog] Erro ao inicializar:', error);
  }
};

export default posthog;
