import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Version du package, injectée dans le playground (carte PackageInfo).
const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL("./package.json", import.meta.url)), "utf-8"),
) as { version: string };

// Sert et build le mini-playground de visualisation du thème
// (`yarn dev` en local, `yarn build:playground` pour un export statique).
// Le build de la LIBRAIRIE reste géré par tsc, pas par Vite.
export default defineConfig({
  root: "playground",
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
  build: {
    outDir: "../playground-dist",
    emptyOutDir: true,
  },
});
