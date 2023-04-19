// src/types.d.ts
declare module "vite-plugin-env" {
  interface ImportMeta {
    readonly env: Record<string, string>;
  }
}
