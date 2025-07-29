# SmartMatch Front‑End Scaffold

This repository contains a minimal front‑end scaffold for **SmartMatch**, built with **React** and **Tailwind CSS**.  It translates the UI/UX designer’s low‑fidelity deliverables into code by establishing the project structure, stubbing out the component library and demonstrating a responsive dashboard layout.

## Features

- **Component stubs** for the eight inventory items (Card, TabBar, FormInput, SelectFilter, Button, ProgressIndicator, Modal and Toast).  Each component currently renders its name within a `<div>` and accepts `className`, `children` and `onClick` props for easy extension.
- **DashboardLayout** showing a header with a logo and basic navigation and a two‑column grid on medium+ screens that collapses to a single column on mobile.  The layout uses the primary colour and typography defined in palette option A (warm & inclusive) from the style tile.
- **Tailwind configuration** extends the default theme with semantic colours (`primary`, `secondary`, `accent`, `neutralLight`, `neutralDark`) and font families (`heading`, `body`) matching the Poppins/Roboto pairing.  These values can be referenced throughout your components via Tailwind utility classes.
- **Google Fonts imports** in `index.html` to load Poppins and Roboto.
- A **Vite** development setup with scripts for development, build and preview.

## Project Structure

```
smartmatch/
│  App.jsx                # Root React component that uses DashboardLayout
│  index.html             # HTML entry point with Google Font links and Vite entry
│  postcss.config.js      # PostCSS configuration for Tailwind
│  tailwind.config.js     # Tailwind theme configuration
│  vite.config.js         # Vite configuration enabling the React plugin
│  package.json           # Project metadata and scripts
└──src/
    ├── index.css         # Imports Tailwind’s base, components and utilities
    ├── main.jsx          # Entry point that mounts <App />
    ├── components/       # Stub components from the UI inventory
    │   ├── Button.jsx
    │   ├── Card.jsx
    │   ├── FormInput.jsx
    │   ├── Modal.jsx
    │   ├── ProgressIndicator.jsx
    │   ├── SelectFilter.jsx
    │   ├── TabBar.jsx
    │   └── Toast.jsx
    └── layouts/
        └── DashboardLayout.jsx
```

## Getting Started

To run this project locally you’ll need **Node.js** (v16 or later is recommended).  Follow these steps:

1. **Install dependencies**

   In the project root run:

   ```sh
   npm install
   ```

   This installs React, Tailwind, Vite and related tooling.

2. **Start the development server**

   Launch the dev server with:

   ```sh
   npm run dev
   ```

   Vite will compile the project and provide a local URL (usually `http://localhost:5173`).  Open the URL in your browser to see the stub application.  The dashboard layout demonstrates the responsive grid; resize your window to observe the shift from two columns to one.

3. **Build for production**

   When you’re ready to produce an optimised build, run:

   ```sh
   npm run build
   ```

   The compiled output will be written to a `dist/` folder, ready to be served by a static file server.

## Extending the Scaffold

- Replace the placeholder content within each component with real UI elements.  For example, implement form fields inside `FormInput`, card previews inside `Card`, and the navigation links inside `TabBar`.
- Use the semantic colour names (`bg-primary`, `text-primary`, etc.) and typography classes (`font-heading`, `font-body`) defined in `tailwind.config.js` to ensure consistency across the app.
- Consider adding state management (e.g. with React Context or a library like Redux) and routing (e.g. with React Router) as the application grows.

This scaffold aims to provide a solid foundation that aligns with the designer’s low‑fi prototypes and style guide, allowing you to focus on building out the high‑fidelity experience.