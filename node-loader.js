// Node.js loader to stub out asset imports (images, fonts, CSS)
// that would fail when imported outside of Vite

export function load(url, context, nextLoad) {
  // Stub static assets — return empty string default export
  if (/\.(webp|png|jpg|jpeg|gif|svg|avif|woff|woff2|ttf|eot|css)$/.test(url)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default "";',
    };
  }
  return nextLoad(url, context);
}
