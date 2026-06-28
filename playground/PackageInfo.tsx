import { Badge, Card, SubText, Text, Titre2 } from "../src";
import "./PackageInfo.css";

const VERSION = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "dev";
const BUILD_DATE = typeof __BUILD_DATE__ !== "undefined" ? __BUILD_DATE__ : "";

function formatBuildDate(iso: string): string {
  if (!iso) return "build local";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "build local";
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeStyle: "short" }).format(date);
}

/**
 * Carte de présentation du package green-terminal : description, version et date
 * de build (injectées par Vite), et exemple d'installation / d'usage.
 * Spécifique à la vitrine gt — non publié par la librairie.
 */
export function PackageInfo() {
  return (
    <Card>
      <div className="pkg__head">
        <Titre2>@fzed51/green-terminal</Titre2>
        <div className="pkg__meta">
          <Badge variant="primary">v{VERSION}</Badge>
          <SubText>Publié le {formatBuildDate(BUILD_DATE)}</SubText>
        </div>
      </div>
      <Text className="mt-3">
        Thème « dark hack green » par-dessus <code>@fzed51/react-component</code> : il re-skinne
        l'intégralité de ses composants via des design tokens CSS (voir la section{" "}
        <em>Design tokens</em> en bas de page) et ajoute des composants signatures (
        <code>Terminal</code>, <code>AppShell</code>, <code>Alert</code>…).
      </Text>
      <ul className="pkg__points">
        <li>
          <Text size="sm">
            <strong>Façade complète</strong> — on importe tout depuis green-terminal, jamais depuis
            react-component.
          </Text>
        </li>
        <li>
          <Text size="sm">
            <strong>Re-skin 100 % CSS</strong> — aucun composant react-component n'est
            ré-implémenté, seulement re-stylé.
          </Text>
        </li>
        <li>
          <Text size="sm">
            <strong>React 19 requis</strong> — <code>peerDependency react &gt;=19</code>.
          </Text>
        </li>
      </ul>
      <SubText className="mb-1">Installation</SubText>
      <pre className="pkg__code">
        <code>npm install @fzed51/green-terminal</code>
      </pre>
      <SubText className="mb-1 mt-3">Usage</SubText>
      <pre className="pkg__code">
        <code>{`import { BaseStyle, Button, Terminal } from "@fzed51/green-terminal";

function App() {
  return (
    <>
      <BaseStyle />
      <Button>Envoyer</Button>
    </>
  );
}`}</code>
      </pre>
    </Card>
  );
}
