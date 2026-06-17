import { onRequestOptions, onRequestPost } from './api/contact.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method === 'OPTIONS') {
        return onRequestOptions({ request, env });
      }

      if (request.method === 'POST') {
        return onRequestPost({ request, env });
      }

      return new Response('Method Not Allowed', {
        status: 405,
        headers: {
          Allow: 'POST, OPTIONS',
        },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
