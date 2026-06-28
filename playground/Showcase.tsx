import {
  Alert,
  AppShell,
  Button,
  ButtonGroup,
  Card,
  DesignSystem,
  Divider,
  EmptyState,
  PageHeader,
  Paper,
  SubText,
  Terminal,
  TerminalLine,
  Titre1,
  Titre2,
  Tokens,
} from "../src";
import { Demo } from "./Demo";
import { PackageInfo } from "./PackageInfo";

/* ── Navigation par ancres ────────────────────────────────────────────────── */

const sections: { id: string; label: string }[] = [
  { id: "presentation", label: "présentation" },
  { id: "terminal", label: "terminal" },
  { id: "alertes", label: "alertes" },
  { id: "header", label: "page header" },
  { id: "boutons", label: "button group" },
  { id: "vide", label: "état vide" },
  { id: "react-component", label: "react-component" },
  { id: "tokens", label: "design tokens" },
];

/* ── Bloc de section réutilisable ─────────────────────────────────────────── */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <Titre2 className="mb-4">
        <span id={id} style={{ scrollMarginTop: "5rem" }}>
          {title}
        </span>
      </Titre2>
      {children}
    </Card>
  );
}

/* ── Vitrine green-terminal ───────────────────────────────────────────────── */

export function Showcase() {
  return (
    <AppShell>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem 1.25rem",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg-app)",
        }}
      >
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </nav>

      <div style={{ minHeight: "100vh" }} className="bg-app py-10">
        <Paper className="d-flex flex-col gap-6 py-6">
          <PageHeader
            title="green-terminal"
            subtitle="Thème « dark hack green » par-dessus react-component"
          />

          <span id="presentation" style={{ scrollMarginTop: "5rem" }} />
          <PackageInfo />

          <Divider label="composants signatures green-terminal" />
          <div>
            <Titre1>Composants signatures</Titre1>
            <SubText>Absents de react-component, fournis en propre par green-terminal.</SubText>
          </div>

          <Section id="terminal" title="Terminal">
            <Demo
              code={`<Terminal title="SESSION">
  <TerminalLine prompt>whoami</TerminalLine>
  <TerminalLine>root@green-terminal</TerminalLine>
  <TerminalLine prompt>cat mission.txt</TerminalLine>
  <TerminalLine>Re-skin react-component sans toucher à son code.</TerminalLine>
</Terminal>`}
            >
              <Terminal title="SESSION">
                <TerminalLine prompt>whoami</TerminalLine>
                <TerminalLine>root@green-terminal</TerminalLine>
                <TerminalLine prompt>cat mission.txt</TerminalLine>
                <TerminalLine>Re-skin react-component sans toucher à son code.</TerminalLine>
              </Terminal>
            </Demo>
          </Section>

          <Section id="alertes" title="Alertes">
            <Demo
              code={`<Alert variant="success">Connexion établie — tunnel chiffré.</Alert>
<Alert variant="warning">Latence élevée détectée sur le nœud 4.</Alert>
<Alert variant="error">Échec d'authentification (3 tentatives).</Alert>
<Alert variant="info">Mise à jour du firmware disponible.</Alert>`}
            >
              <div className="d-flex flex-col gap-3">
                <Alert variant="success">Connexion établie — tunnel chiffré.</Alert>
                <Alert variant="warning">Latence élevée détectée sur le nœud 4.</Alert>
                <Alert variant="error">Échec d'authentification (3 tentatives).</Alert>
                <Alert variant="info">Mise à jour du firmware disponible.</Alert>
              </div>
            </Demo>
          </Section>

          <Section id="header" title="Page header">
            <Demo
              code={`<PageHeader
  title="Tableau de bord"
  subtitle="Vue d'ensemble des nœuds actifs"
/>`}
            >
              <PageHeader title="Tableau de bord" subtitle="Vue d'ensemble des nœuds actifs" />
            </Demo>
          </Section>

          <Section id="boutons" title="Button group">
            <Demo
              code={`<ButtonGroup>
  <Button variant="outline" size="sm">start</Button>
  <Button variant="outline" size="sm">stop</Button>
  <Button variant="outline" size="sm">restart</Button>
</ButtonGroup>`}
            >
              <ButtonGroup>
                <Button variant="outline" size="sm">
                  start
                </Button>
                <Button variant="outline" size="sm">
                  stop
                </Button>
                <Button variant="outline" size="sm">
                  restart
                </Button>
              </ButtonGroup>
            </Demo>
          </Section>

          <Section id="vide" title="État vide">
            <Demo
              code={`<EmptyState
  icon="∅"
  title="Aucun journal"
  description="Aucune entrée pour la période sélectionnée."
  action={<Button variant="outline">Rafraîchir</Button>}
/>`}
            >
              <EmptyState
                icon="∅"
                title="Aucun journal"
                description="Aucune entrée pour la période sélectionnée."
                action={<Button variant="outline">Rafraîchir</Button>}
              />
            </Demo>
          </Section>

          <Divider label="react-component, re-skinné par le thème" />
          <div>
            <Titre1>
              <span id="react-component" style={{ scrollMarginTop: "5rem" }}>
                react-component
              </span>
            </Titre1>
            <SubText>
              La vitrine complète de react-component, ré-exposée par green-terminal et entièrement
              re-skinnée par le thème.
            </SubText>
          </div>
          <DesignSystem />

          <Divider label="design tokens (valeurs résolues)" />
          <div>
            <Titre1>
              <span id="tokens" style={{ scrollMarginTop: "5rem" }}>
                design tokens
              </span>
            </Titre1>
            <SubText>
              Les variables CSS remappées par le thème green-terminal, avec leurs valeurs réelles
              résolues au runtime.
            </SubText>
          </div>
          <Tokens />
        </Paper>
      </div>
    </AppShell>
  );
}
