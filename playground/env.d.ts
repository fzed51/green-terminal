/// Globals injectés par Vite (voir `define` dans vite.config.ts).
declare const __APP_VERSION__: string;
declare const __BUILD_DATE__: string;

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
