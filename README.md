# SmartMatch Front‑End Scaffold

This repository contains a front‑end scaffold for **SmartMatch**, built with **React** and **Tailwind CSS**.  It implements the UI/UX designer’s low‑fidelity deliverables by establishing the project structure, providing a finished component library and demonstrating a responsive dashboard layout with routing and sample pages.

## Features

- **Polished components** for the eight inventory items (Card, TabBar, FormInput, SelectFilter, Button, ProgressIndicator, Modal and Toast).  `Button` now uses semantic colours with hover and focus states; `Card` has padding, rounded corners and subtle hover shadow; `TabBar` displays lucide‑react icons in a fixed bottom navigation bar on mobile; `FormInput` supports password show/hide toggles and inline errors; `SelectFilter` wraps a native `<select>` with label.
- **DashboardLayout** with a header (logo + nav links) and a mobile bottom tab bar.  Content is rendered in a responsive grid (two columns on medium+ screens, one column on mobile).  The layout uses the primary colour and typography defined in palette option A (warm & inclusive) from the style tile.
- **OnboardingForm** component collects name, age, gender (with conditional “Other” field) and personality type.  The form is displayed on the **OnboardingPage** and navigates to the dashboard on completion.
- **Routing & Pages** using `react-router-dom`.  The app defines routes for the onboarding flow (`/`) and dashboard (`/dashboard`), with a fallback redirect.  Additional stub paths for messages and profile are reserved for future work.
- **Tailwind configuration** in `tailwind.config.cjs` extends the default theme with semantic colours (`primary`, `secondary`, `accent`, `neutralLight`, `neutralDark`) and font families (`fontHeading`, `fontBody`) matching the Poppins/Roboto pairing.  These values can be referenced throughout your components via Tailwind utility classes.
- **Google Fonts imports** in `index.html` to load Poppins and Roboto.
- A **Vite** development setup with scripts for development, build and preview.

## Project Structure

```
smartmatch/
│  App.jsx                # Root React component with router definitions
│  index.html             # HTML entry point with Google Font links and Vite entry
│  vite.config.js         # Vite configuration enabling the React plugin
│  tailwind.config.cjs    # Tailwind theme configuration (palette + fonts)
│  postcss.config.cjs     # PostCSS configuration for Tailwind
│  package.json           # Project metadata, scripts and dependencies
└──src/
    ├── index.css         # Imports Tailwind’s base, components and utilities
    ├── main.jsx          # Entry point that mounts <App />
    ├── components/       # Reusable UI components
    │   ├── Button.jsx
    │   ├── Card.jsx
    │   ├── FormInput.jsx
    │   ├── Modal.jsx
    │   ├── OnboardingForm.jsx
    │   ├── ProgressIndicator.jsx
    │   ├── SelectFilter.jsx
    │   ├── TabBar.jsx
    │   └── Toast.jsx
    ├── layouts/
    │   └── DashboardLayout.jsx
    └── pages/
        ├── DashboardPage.jsx
        └── OnboardingPage.jsx
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

 - Add additional pages (e.g. profile, messages) by creating new components in the `pages/` directory and registering routes in `App.jsx`.
 - Extend `OnboardingForm` to handle validation, multiple steps and persistence (e.g. integrate with your API).
 - Use the semantic colour names (`bg-primary`, `text-primary`, etc.) and typography classes (`font-heading`, `font-body`) defined in `tailwind.config.cjs` to ensure consistency across the app.
 - Consider adding state management (e.g. with React Context or a library like Redux) as the application grows.

This scaffold aims to provide a solid foundation that aligns with the designer’s low‑fi prototypes and style guide, allowing you to focus on building out the high‑fidelity experience.