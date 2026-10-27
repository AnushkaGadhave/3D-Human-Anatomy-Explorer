# 3D Human Anatomy Explorer

An interactive, WebGL-powered 3D visualization web application developed as a college **Computer Graphics mini project**. The application provides an engaging, educational platform to explore human body systems, internal organs, and anatomical relationships using real-time 3D rendering.

---

## 🌟 Key Highlights & Technologies

- **Frontend Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **3D Graphics & Rendering**: [Three.js](https://threejs.org/)
- **React 3D Integration**: [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- **UI Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with modern design tokens, custom properties, and dark-mode aesthetic
- **Architecture**: Client-side single-page application (No backend / database dependencies)

---

## 📁 Project Structure

```text
3D-Human-Anatomy-Explorer/
├── public/
│   ├── images/
│   │   └── body-systems/     # Illustrations and icons for anatomical body systems
│   └── models/               # Optimized GLB / GLTF 3D anatomical models
├── src/
│   ├── components/           # Reusable UI elements, navigation, modal viewers, and cards
│   ├── sections/             # Landing page sections and view containers
│   ├── data/                 # Local anatomy datasets (organs, systems, descriptions, quizzes)
│   ├── styles/               # Design tokens, variables, and shared stylesheets
│   │   └── tokens.css        # Centralized color, typography, elevation, and spacing tokens
│   ├── App.jsx               # Application root component
│   ├── App.css               # Application-level styles
│   ├── index.css             # Global styles, CSS reset, and typography
│   └── main.jsx              # React DOM mounting entry point
├── index.html                # HTML entry point with metadata and fonts
├── package.json              # Project dependencies and script configurations
├── package-lock.json         # Pinned dependency tree
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

### Folder Responsibilities

| Path | Responsibility |
|---|---|
| `public/images/` | Landing page illustrations and general static imagery |
| `public/images/body-systems/` | Dedicated artwork and diagrams for individual body systems |
| `public/models/` | Optimized 3D model assets (`.glb` / `.gltf`) loaded dynamically |
| `src/components/` | Modular, reusable UI components (Navbar, 3D Canvas wrapper, Controls) |
| `src/sections/` | Page sections (Hero, Systems Overview, Interactive Explorer, FAQ) |
| `src/data/` | Local JSON/JS data structures defining anatomical nodes and details |
| `src/styles/` | Global design system tokens and shared styling rules |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Installation

Dependencies are already configured. If setting up on a fresh machine:

```bash
npm install
```

### 2. Running Locally in Development Mode

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/` (or the port specified in terminal output).

### 3. Production Build & Verification

To verify or generate a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📌 Implementation Roadmap

- [x] **Phase 1: Project Initialization & Structure Setup** (Completed)
- [ ] **Phase 2: Landing Page & System Selection UI** (Next)
- [ ] **Phase 3: Three.js / React Three Fiber Anatomy Scene Integration**
- [ ] **Phase 4: Organ Detail Modals & Educational Quiz Features**
