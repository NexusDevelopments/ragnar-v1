import { useEffect, useState } from "react";

const bubbles = Array.from({ length: 32 }, (_, i) => {
  const size = Math.round(Math.random() * 44 + 10);
  return {
    id: i,
    size,
    left: `${(Math.random() * 100).toFixed(2)}%`,
    dur: `${(Math.random() * 15 + 12).toFixed(1)}s`,
    delay: `${(Math.random() * -30).toFixed(1)}s`,
    drift: `${(Math.random() * 90 - 45).toFixed(0)}px`
  };
});

const featureCards = [
  {
    title: "Find Fast",
    text: "Search guides, fixes, and walkthroughs in one place with a quick command-style finder."
  },
  {
    title: "Step-by-Step Help",
    text: "Each result is broken into clear actions so you can solve issues without guesswork."
  },
  {
    title: "Always Updated",
    text: "New tips and fixes are added regularly, with priority for common user problems."
  }
];

const steps = [
  { label: "01", title: "Search", text: "Type what you need." },
  { label: "02", title: "Filter", text: "Pick the most relevant guide." },
  { label: "03", title: "Solve", text: "Follow clear, focused steps." }
];

export default function App() {
  const [logoMissing, setLogoMissing] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event("ragnar:app-ready"));
  }, []);

  return (
    <>
      <div className="bubbles" aria-hidden="true">
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="bubble"
            style={{
              "--size": `${bubble.size}px`,
              "--left": bubble.left,
              "--dur": bubble.dur,
              "--delay": bubble.delay,
              "--drift": bubble.drift
            }}
          />
        ))}
      </div>

      <main className="page">
        <header className="topbar">
          <a className="brand" href="#top">
            <span className="brand-dot" aria-hidden="true" />
            Ragnar
          </a>
          <nav className="menu" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#start">Start</a>
          </nav>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Digital Learning Support</p>
            <h1>Ragnar Help Hub</h1>
            <p className="lead">
              A clean support portal layout for searching help articles, onboarding notes, and instant fixes.
            </p>
            <div className="search-wrap">
              <input
                className="search"
                type="search"
                placeholder="Search guides, setup steps, troubleshooting..."
                aria-label="Search Ragnar"
              />
            </div>
            <div className="hero-actions">
              <a href="#start" className="btn btn-main">Get Started</a>
              <a href="#features" className="btn btn-subtle">Explore Features</a>
            </div>
          </div>

          <aside className="hero-visual" aria-label="Ragnar logo area">
            <div className="logo-frame" aria-hidden="true">
              {!logoMissing ? (
                <img
                  className="site-logo"
                  src="/logo.png"
                  alt="Ragnar logo"
                  onError={() => setLogoMissing(true)}
                />
              ) : (
                <div className="logo-fallback">R</div>
              )}
            </div>
            <p className="visual-caption">Built for fast support and bold branding.</p>
          </aside>
        </section>

        <section className="features" id="features">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="workflow" id="workflow">
          <div className="workflow-head">
            <p className="eyebrow">How It Works</p>
            <h2>Simple layout. Fast results.</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.label}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quote" id="start">
          <p>
            "Ragnar gives our team one place to search and solve. The layout is clean, fast, and easy to use."
          </p>
        </section>

        <footer className="footer">
          <h2>Need support right now?</h2>
          <p>Open the search bar and start typing your issue.</p>
        </footer>
      </main>
    </>
  );
}
