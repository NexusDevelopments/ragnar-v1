import { useState } from "react";

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

export default function App() {
  const [logoMissing, setLogoMissing] = useState(false);

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

      <main className="shell">
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
        <h1 className="title">Ragnar</h1>
        <div className="search-wrap">
          <input
            className="search"
            type="search"
            placeholder="Search Ragnar..."
            aria-label="Search Ragnar"
          />
        </div>
      </main>
    </>
  );
}
