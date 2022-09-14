'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.globalPolyfill = void 0;
const globalPolyfill = () => {
  return {
    name: 'vite:global-ployfill',
    transformIndexHtml: {
      transform(html) {
        return {
          html,
          tags: [
            {
              tag: 'script',
              children: `
                function getGlobal() {
                  if (typeof globalThis === 'object') return globalThis;
                  if (typeof window === 'object') return window;
                }
                global = getGlobal()
              `,
              injectTo: 'head-prepend',
            },
          ],
        };
      },
    },
  };
};
exports.globalPolyfill = globalPolyfill;
