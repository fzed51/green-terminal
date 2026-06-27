/* ═══════════════════════════════════════════════════════════════════════════
   @fzed51/green-terminal — point d'entrée
   ---------------------------------------------------------------------------
   green-terminal est désormais un THÈME « dark hack green » par-dessus
   @fzed51/react-component :
   - <BaseStyle /> injecte le socle react-component + les tokens + la cosmétique ;
   - les composants communs sont ré-exportés depuis react-component (re-skinnés) ;
   - les composants signatures du thème restent fournis en propre.
   ═══════════════════════════════════════════════════════════════════════════ */

export type { TableColumn, TableProps, TableSize } from "@fzed51/react-component";

/* ── Composants ré-exportés depuis react-component (re-skinnés) ──────────── */
export {
  Badge,
  Button,
  Card,
  Divider as Separator,
  // Alias pour conserver la nomenclature green-terminal
  InputText as Input,
  InputTextarea as Textarea,
  Selector as Select,
  Table,
} from "@fzed51/react-component";
/* ── Composants signatures green-terminal (absents de react-component) ───── */
export { Alert } from "./Alert";
export { AppShell } from "./AppShell";
/* ── Thème ─────────────────────────────────────────────────────────────── */
export { BaseStyle } from "./BaseStyle";
export { ButtonGroup } from "./ButtonGroup";
export { EmptyState } from "./EmptyState";
export { PageHeader } from "./PageHeader";
export { Terminal, TerminalLine } from "./Terminal";
