/* ═══════════════════════════════════════════════════════════════════════════
   @fzed51/green-terminal — point d'entrée
   ---------------------------------------------------------------------------
   green-terminal est désormais un THÈME « dark hack green » par-dessus
   @fzed51/react-component :
   - <BaseStyle /> injecte le socle react-component + les tokens + la cosmétique ;
   - les composants communs sont ré-exportés depuis react-component (re-skinnés) ;
   - les composants signatures du thème restent fournis en propre.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Façade complète sur react-component (re-skinné par le thème CSS) ──────
   Toute la surface publique de react-component est ré-exposée sous ses noms
   d'origine : le développeur n'importe QUE depuis green-terminal, jamais
   depuis react-component. Seul BaseStyle est volontairement non ré-exporté
   ici : l'export nommé local ci-dessous (notre BaseStyle thémé) masque celui
   de react-component dans cette ré-export étoile. */
export * from "@fzed51/react-component";
/* ── Composants signatures green-terminal (absents de react-component) ───── */
export { Alert } from "./Alert";
export { AppShell } from "./AppShell";
/* ── Thème ─────────────────────────────────────────────────────────────── */
export { BaseStyle } from "./BaseStyle";
export { ButtonGroup } from "./ButtonGroup";
export { EmptyState } from "./EmptyState";
export { PageHeader } from "./PageHeader";
export { Terminal, TerminalLine } from "./Terminal";
