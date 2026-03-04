# next-shadcn-dashboard-starter

A modern, production-ready admin dashboard boilerplate built with **Next.js 16 App Router**. Features a fully responsive collapsible sidebar, dark/light mode theming, and first-class RTL support — including correct scrollbar placement for right-to-left layouts. Designed to be cloned and extended without touching the shell.

---

## ✨ Features

- **Collapsible Sidebar** — icon-only collapsed state with tooltip fallbacks, built on shadcn/ui + Radix UI primitives
- **Dark / Light Mode** — system-aware theming via `next-themes` with a toggle in the sidebar footer
- **RTL Support** — full right-to-left layout including correct scrollbar placement for RTL locales
- **Internationalization** — `next-intl` with cookie-based locale persistence (English & Urdu out of the box)
- **Responsive** — mobile sheet drawer sidebar, responsive header search, and fluid layout
- **Accessible** — keyboard navigation, screen reader labels, and focus management via Radix UI
- **App Router Ready** — Server Components by default; Client Components only where interactivity is needed

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | JavaScript (JSX) |
| UI Components | [shadcn/ui](https://ui.shadcn.com) (New York style) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Primitives | [Radix UI](https://www.radix-ui.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Internationalization | [next-intl](https://next-intl-docs.vercel.app) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Animations | [tw-animate-css](https://github.com/jamiebuilds/tw-animate-css) |
| Font | [Geist Sans / Geist Mono](https://vercel.com/font) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm / bun

### Installation

```bash
git clone https://github.com/your-username/next-shadcn-dashboard-starter.git
cd next-shadcn-dashboard-starter
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── (dashboard)/          # Dashboard route group
│   │   ├── layout.jsx        # Dashboard shell (sidebar + header)
│   │   └── page.jsx          # Dashboard index page
│   ├── actions.js            # Server Actions (locale switcher)
│   ├── globals.css           # Tailwind v4 + design tokens
│   └── layout.js             # Root layout (theme, i18n, direction)
├── components/
│   ├── layout/               # Shell components
│   │   ├── dashboard-header.jsx
│   │   ├── dashboard-sidebar.jsx
│   │   ├── locale-switcher.jsx
│   │   ├── nav-footer.jsx
│   │   ├── nav-main.jsx
│   │   ├── nav-secondary.jsx
│   │   └── nav-tools.jsx
│   ├── providers/
│   │   └── theme-provider.jsx
│   └── ui/                   # shadcn/ui components
├── hooks/
│   └── use-mobile.js
├── i18n/
│   └── request.js            # next-intl config + RTL locale list
├── lib/
│   └── utils.js              # cn(), getPortalProps()
└── messages/                 # i18n translation files
    ├── en.json
    └── ur.json
```

---

## 🌐 Internationalization

Locale is persisted in a cookie (`NEXT_LOCALE`) via a Server Action. To add a new language:

1. Add the locale code to `SUPPORTED_LOCALES` in both `i18n/request.js` and `app/actions.js`
2. Add it to `RTL_LOCALES` in `i18n/request.js` if it's a right-to-left language
3. Add a translation file at `messages/[locale].json`
4. Add it to the `LOCALES` array in `components/layout/locale-switcher.jsx`

---

## 🎨 Theming & Design Tokens

All design tokens are defined as CSS custom properties in `app/globals.css`. The brand palette, typography scale, and semantic color tokens (success, warning, error, info) are all configurable from a single file.

The sidebar accent colors automatically adapt per theme:
- **Light:** soft orange tint (`#FEF0EC`) with brand orange text
- **Dark:** deep warm surface (`#3D1F0F`) with brand orange text

---

## 📄 License

MIT