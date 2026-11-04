import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}

// This is a Next.js App Router template file. Here's what it does:

// What it does:

// It wraps every page in a <div className="page-transition">
// That class triggers a 240ms fade-in animation (defined in globals.css:177) every time you navigate between routes
// Unlike layout.tsx, which persists across navigations, template.tsx remounts on every navigation — which is exactly what makes the animation re-run each time you change pages
// Do you need it?

// Only if you want the fade-in page transition. Two things to consider:

// If you delete it, pages will just swap instantly with no animation. Nothing breaks.
// If you keep it, be aware that remounting on every navigation has side effects: scroll position resets, component state resets, and any useEffect in client components re-runs on every route change. For a marketing/portfolio site like this, that's usually fine and even desirable.
// My take: it's 6 lines, respects prefers-reduced-motion, and gives a subtle polish to page transitions. Keep it unless you're seeing issues with state resetting or scroll behavior between pages.
