# Grupo Nextenergy Website

Corporate website for **Nextenergy, SGPS, Lda** — the holding company (sociedade-mãe)
of the Grupo Nextenergy. It holds the equity stakes in the group's operating
companies and coordinates the group's strategy, capital and governance.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [React Router](https://reactrouter.com/) + [TanStack Query](https://tanstack.com/query)

Shares the same design system (colors, fonts, components) as the operating
companies' sites — only the content differs.

## Getting started

```sh
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev
```

## Pages

| Route        | Page                                                       |
| ------------ | ---------------------------------------------------------- |
| `/`          | Home — overview of the holding and its role                |
| `/grupo`     | O Grupo — strategy, capital, governance functions          |
| `/empresas`  | Empresas — the group's operating companies                 |
| `/contact`   | Contactos — institutional contact form                     |

> **Content to complete:** update placeholder companies in
> `src/pages/Companies.tsx`, the NIPC (`519 ### ###`) in the footer/contact, and
> the contact details (email, phone, address) once finalized.

## Available scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the local development server       |
| `npm run build`      | Build the production bundle to `dist/`   |
| `npm run preview`    | Preview the production build locally     |
| `npm run lint`       | Run ESLint                               |
| `npm run test`       | Run the test suite once                  |

## License

© Nextenergy, SGPS, Lda. All rights reserved.
