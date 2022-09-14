import { PluginOption } from 'vite';

export const globalPolyfill = (): PluginOption => {
  return {
    name: 'vite:global-ployfill',
    transformIndexHtml: {
      transform(html: string) {
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
