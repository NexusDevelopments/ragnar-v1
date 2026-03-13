import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.dispatchEvent(new Event("ragnar:app-ready"));
  }, []);

  const railItems = ["H", "G", "B", "N", "S"];

  return (
    <main className="landing">
      <aside className="side-rail" aria-label="Quick menu">
        <a className="rail-logo" href="#" aria-label="Ragnar home">R</a>
        <nav className="rail-nav">
          {railItems.map((item) => (
            <a key={item} href="#" className="rail-link" aria-label={`Menu ${item}`}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <section className="hero-center" aria-label="Main title">
        <h1>Ragnar</h1>
        <p>Fast • Sleek • Unlimited Access</p>
      </section>

      <footer className="legal">
        <a href="#">DMCA</a>
        <span>•</span>
        <a href="#">Terms of Service</a>
      </footer>
    </main>
  );
}
