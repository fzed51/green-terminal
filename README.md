# GreenTerminal UI

React · TypeScript · License: MIT

🌐 **[Démo en ligne / playground](https://fzed51.github.io/green-terminal/)** — vitrine interactive des composants thémés.

**GreenTerminal UI** est un thème *"dark hack green"* pour [`@fzed51/react-component`](https://github.com/fzed51/react-component), inspiré des interfaces rétro des terminaux informatiques. Parfait pour les dashboards techniques, les applications cyberpunk ou tout projet nécessitant une ambiance immersive et futuriste.

Concrètement, GreenTerminal :

- **re-skinne** les composants de `react-component` (Button, Card, Table…) via une couche de design tokens + une couche cosmétique (glow néon, préfixes `>` `[ ]` `//`, police monospace, coins anguleux) ;
- **ré-exporte** ces composants re-stylés sous la nomenclature GreenTerminal ;
- **ajoute** ses propres composants signatures absents de `react-component` (`Terminal`, `AppShell`, `Alert`, `ButtonGroup`, `EmptyState`, `PageHeader`).

---

## 📦 Installation

### Prérequis

- React `>=19`

### Commande

```bash
npm install @fzed51/green-terminal
# ou
yarn add @fzed51/green-terminal
```

> `@fzed51/react-component` est installé automatiquement comme dépendance ; tu n'as pas besoin de l'ajouter toi-même.

---

## 🚀 Utilisation

Place le composant `<BaseStyle />` **une seule fois**, à la racine de ton application : il injecte le socle CSS de `react-component`, les design tokens du thème et la cosmétique hacker.

```tsx
import { BaseStyle, Button, Card, Terminal, TerminalLine } from "@fzed51/green-terminal";

export function App() {
  return (
    <>
      <BaseStyle />
      <Card>
        <Terminal title="SESSION">
          <TerminalLine prompt>whoami</TerminalLine>
          <TerminalLine>root@green-terminal</TerminalLine>
        </Terminal>
        <Button variant="primary">Se connecter</Button>
      </Card>
    </>
  );
}
```

---

## 📂 Composants disponibles

### Ré-exportés de `react-component` (re-skinnés)

| Composant     | Source `react-component` | Description                                |
| ------------- | ------------------------ | ------------------------------------------ |
| `Button`      | `Button`                 | Bouton (variantes, tailles, loading).      |
| `Badge`       | `Badge`                  | Pastille de statut.                        |
| `Card`        | `Card`                   | Carte conteneur.                           |
| `Table`       | `Table`                  | Tableau data-driven (`columns` / `data`).  |
| `Input`       | `InputText`              | Champ de saisie texte.                     |
| `Select`      | `Selector`               | Liste déroulante.                          |
| `Separator`   | `Divider`                | Séparateur (avec label optionnel).         |
| `Textarea`    | `InputTextarea`          | Zone de texte multiligne.                  |

### Signatures GreenTerminal (propres au thème)

| Composant                 | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `BaseStyle`               | Injecte le thème global (à poser une seule fois).  |
| `Terminal` / `TerminalLine` | Bloc terminal avec lignes et invite (`prompt`).  |
| `AppShell`                | Conteneur applicatif pleine page.                  |
| `Alert`                   | Message (`success` / `error` / `warning` / `info`).|
| `ButtonGroup`             | Regroupe des boutons (horizontal ou `vertical`).   |
| `EmptyState`              | État vide (icône, titre, description, action).     |
| `PageHeader`              | En-tête de page (titre + sous-titre).              |

> ⚠️ **Changements d'API par rapport aux versions ≤ 0.1.0** (composants désormais issus de `react-component`) :
> - `Table` n'utilise plus la composition `TableBody`/`TableCell`/`TableHead`/`TableRow` mais l'API data-driven `columns` / `data`.
> - `Button` change de jeu de variantes (`primary`, `secondary`, `outline`, `ghost`, `danger`) et gagne `size` / `loading` / `fullWidth`.
> - `Input`, `Select`, `Separator`, `Textarea` adoptent les props de `react-component`.

---

## 🛠 Développement

### Prérequis

- Node.js (v22+)
- yarn

### Lancer le playground en local

```bash
yarn install
yarn dev          # playground Vite (vitrine des composants thémés)
```

> 💡 Le playground est aussi déployé en ligne : <https://fzed51.github.io/green-terminal/>

### Construire la librairie

```bash
yarn build        # ESM + CJS + types + CSS
yarn check        # lint / format (Biome)
```

---

## 📄 License

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.
