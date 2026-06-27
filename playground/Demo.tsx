import { useState } from "react";
import {
  Alert,
  AppShell,
  Badge,
  Button,
  ButtonGroup,
  Card,
  EmptyState,
  Input,
  PageHeader,
  Select,
  Separator,
  Table,
  type TableColumn,
  Terminal,
  TerminalLine,
  Textarea,
} from "../src";

type Process = { pid: string; name: string; cpu: string; status: "running" | "stopped" };

const processes: Process[] = [
  { pid: "0x01", name: "kernel_task", cpu: "12%", status: "running" },
  { pid: "0x2a", name: "sshd", cpu: "0.3%", status: "running" },
  { pid: "0x3f", name: "cron", cpu: "0.0%", status: "stopped" },
  { pid: "0x4b", name: "nginx", cpu: "4.1%", status: "running" },
];

const columns: TableColumn<Process>[] = [
  { key: "pid", header: "PID", accessor: "pid", width: "80px" },
  { key: "name", header: "Process", accessor: "name" },
  { key: "cpu", header: "CPU", accessor: "cpu", width: "80px", align: "right" },
  {
    key: "status",
    header: "Statut",
    accessor: (row) => (
      <Badge variant={row.status === "running" ? "success" : "error"}>{row.status}</Badge>
    ),
    width: "120px",
    align: "center",
  },
];

export function Demo() {
  const [host, setHost] = useState("");
  const [env, setEnv] = useState("");

  return (
    <AppShell>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "2rem 1rem", display: "grid", gap: "1.5rem" }}>
        <PageHeader title="green-terminal" subtitle="Thème hacker par-dessus react-component" />

        {/* Composant signature maison */}
        <Terminal title="SESSION">
          <TerminalLine prompt>whoami</TerminalLine>
          <TerminalLine>root@green-terminal</TerminalLine>
          <TerminalLine prompt>cat mission.txt</TerminalLine>
          <TerminalLine>Re-skin react-component sans toucher à son code.</TerminalLine>
        </Terminal>

        {/* Alerts maison */}
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <Alert variant="success">Connexion établie — tunnel chiffré.</Alert>
          <Alert variant="warning">Latence élevée détectée sur le nœud 4.</Alert>
          <Alert variant="error">Échec d'authentification (3 tentatives).</Alert>
          <Alert variant="info">Mise à jour du firmware disponible.</Alert>
        </div>

        {/* Boutons ré-exportés (react-component, re-skinnés) */}
        <Card>
          <h2>Boutons (react-component re-skinné)</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <Separator label="groupe" />
          {/* ButtonGroup maison enveloppant des Button ré-exportés */}
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
        </Card>

        {/* Badges */}
        <Card>
          <h2>Badges</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Badge>default</Badge>
            <Badge variant="primary">primary</Badge>
            <Badge variant="success">success</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="error">error</Badge>
            <Badge variant="info">info</Badge>
          </div>
        </Card>

        {/* Formulaire ré-exporté */}
        <Card>
          <h2>Connexion</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div>
              <label htmlFor="host">Hôte</label>
              <Input
                id="host"
                placeholder="192.168.0.1"
                value={host}
                onChange={(e) => setHost(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="env">Environnement</label>
              <Select
                id="env"
                placeholder="Choisir…"
                value={env}
                onChange={(e) => setEnv(e.target.value)}
              >
                <option value="prod">production</option>
                <option value="staging">staging</option>
                <option value="dev">dev</option>
              </Select>
            </div>
            <div>
              <label htmlFor="notes">Notes</label>
              <Textarea id="notes" rows={3} placeholder="// commentaire libre…" />
            </div>
            <Button variant="primary">Se connecter</Button>
          </div>
        </Card>

        {/* Table ré-exportée (API data-driven) */}
        <Card>
          <h2>Processus</h2>
          <Table<Process>
            columns={columns}
            data={processes}
            striped
            getRowKey={(row) => row.pid}
            caption="Table react-component, thème green-terminal"
          />
        </Card>

        {/* EmptyState maison */}
        <Card>
          <h2>État vide</h2>
          <EmptyState
            icon="∅"
            title="Aucun journal"
            description="Aucune entrée pour la période sélectionnée."
            action={<Button variant="outline">Rafraîchir</Button>}
          />
        </Card>
      </div>
    </AppShell>
  );
}
