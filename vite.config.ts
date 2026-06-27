import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Sert et build le mini-playground de visualisation du thème
// (`yarn dev` en local, `yarn build:playground` pour un export statique).
// Le build de la LIBRAIRIE reste géré par tsc, pas par Vite.
export default defineConfig({
  root: "playground",
  plugins: [react()],
  build: {
    outDir: "../playground-dist",
    emptyOutDir: true,
  },
});
