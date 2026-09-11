import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import posthog from '../services/posthog';

export const PostHogPageViewTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      // Registra a rota atual como super property para enriquecer todos os eventos e cliques subsequentes
      posthog.register({
        $current_screen: location.pathname,
      });

      // Dispara $pageview para relatórios de páginas web do PostHog
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        pathname: location.pathname,
        search: location.search,
        title: document.title,
      });

      // Dispara $screen para relatórios de telas
      posthog.capture('$screen', {
        $screen_name: location.pathname,
        pathname: location.pathname,
        search: location.search,
      });
    } catch (error) {
      console.warn('[PostHog] Erro ao registrar visualização de página:', error);
    }
  }, [location]);

  return null;
};

export default PostHogPageViewTracker;
