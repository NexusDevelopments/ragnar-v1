import { useEffect } from "react";

const NAV = [
  {
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.75z" />
        <path d="M9 22V12h6v10" />
      </svg>
    )
  },
  {
    label: "Games",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="4" />
        <path d="M6 12h4M8 10v4" />
        <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="13" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    label: "AI",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <circle cx="9" cy="10" r="1.5" />
        <circle cx="15" cy="10" r="1.5" />
        <path d="M8 15s1 2 4 2 4-2 4-2" />
        <path d="M9 4V2M15 4V2" />
      </svg>
    )
  },
  {
    label: "Browse",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 1 0 20A14.5 14.5 0 0 1 12 2" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    label: "More Links",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  },
  {
    label: "Settings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  }
];

export default function App() {
  useEffect(() => {
    window.dispatchEvent(new Event("ragnar:app-ready"));
  }, []);

  return (
    <main className="landing">
      <aside className="side-rail" aria-label="Navigation">
        <a className="rail-logo" href="#" aria-label="Ragnar home">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
          </svg>
          <span>Ragnar</span>
        </a>
        <nav className="rail-nav">
          {NAV.map((item, i) => (
            <a key={item.label} href="#" className={`rail-link${i === 0 ? " active" : ""}`}>
              <span className="rail-icon">{item.icon}</span>
              <span className="rail-label">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <section className="hero-center" aria-label="Main title">
        <h1>Ragnar</h1>
        <p>Fast &bull; Sleek &bull; Unlimited Access</p>
      </section>

      <footer className="legal">
        <a href="#">DMCA</a>
        <span>&bull;</span>
        <a href="#">Terms of Service</a>
      </footer>
    </main>
  );
}
