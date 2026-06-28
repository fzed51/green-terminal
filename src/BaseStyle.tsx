// Socle react-component : reset + styles HTML + classes utilitaires.
// <BaseStyle /> de react-component importe lui-même base.css + helpers.css ;
// on le rend pour bénéficier de ce socle sans dupliquer ses feuilles.
import { BaseStyle as ReactComponentBaseStyle } from "@fzed51/react-component";
// Police auto-hébergée (woff2 bundlés) — déclarée avant les tokens qui la référencent.
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/700.css";
// Couche 1 — remap des design tokens (chargée APRÈS le socle → gagne la cascade).
import "./theme/tokens.css";
// Couche 2 — cosmétique hacker (glow, pseudo-éléments, uppercase).
import "./theme/overrides.css";

/**
 * Injecte le thème « green terminal » : socle react-component + tokens + cosmétique.
 * À placer une seule fois, avant l'arbre de composants de l'application.
 *
 * @example
 * <>
 *   <BaseStyle />
 *   <App />
 * </>
 */
export function BaseStyle() {
  return <ReactComponentBaseStyle />;
}
