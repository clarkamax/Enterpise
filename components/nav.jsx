// Navigation, mobile menu, footer
const { useState: useState_nav, useEffect: useEffect_nav } = React;

function useHashRoute() {
  const [route, setRoute] = useState_nav(() => (window.location.hash.replace(/^#\/?/, "") || "home").split("/")[0]);
  const [sub, setSub] = useState_nav(() => (window.location.hash.replace(/^#\/?/, "").split("/")[1] || ""));
  useEffect_nav(() => {
    const h = () => {
      const raw = window.location.hash.replace(/^#\/?/, "");
      setRoute((raw || "home").split("/")[0]);
      setSub(raw.split("/")[1] || "");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  return [route, sub];
}

const NAV_ITEMS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "gallery", label: "Gallery" },
  { to: "contact", label: "Contact" },
];

function Nav({ route }) {
  const [open, setOpen] = useState_nav(false);
  useEffect_nav(() => { setOpen(false); }, [route]);
  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <BrandLockup />
          <nav className="nav-links">
            {NAV_ITEMS.map((it) => (
              <a
                key={it.to}
                href={`#/${it.to === "home" ? "" : it.to}`}
                className={`nav-link ${route === it.to ? "active" : ""}`}
              >
                {it.label}
              </a>
            ))}
            <a href="tel:5154327162" className="nav-link label-mono" style={{ color: "var(--muted)" }}>(515) 432-7162</a>
            <a href="#/contact" className="btn btn-primary nav-cta" style={{ padding: "10px 18px", fontSize: 14 }}>
              Request quote
            </a>
          </nav>
          <button className="nav-mobile-toggle" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-sheet">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true"><path d={open ? "M2 2 L16 12 M16 2 L2 12" : "M0 1 H18 M0 7 H18 M0 13 H18"} stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-sheet" className="mobile-sheet" role="dialog" aria-label="Site menu">
          {NAV_ITEMS.map((it) => (
            <a key={it.to} href={`#/${it.to === "home" ? "" : it.to}`} className={`nav-link ${route === it.to ? "active" : ""}`}>
              {it.label}
            </a>
          ))}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="tel:5154327162" className="btn btn-primary" style={{ justifyContent: "center" }}>Call (515) 432-7162</a>
            <a href="#/contact" className="btn btn-ghost" style={{ justifyContent: "center" }}>Request quote →</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow" style={{ color: "#ffffff77", marginBottom: 20 }}>◉ Currently available · Mon–Fri 7:00 – 4:00</div>
          <div className="big">Need power done right?<br/><span className="accent-word">Let's talk.</span></div>
          <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
            <a href="tel:5154327162" className="btn btn-primary btn-arrow" style={{ padding: "18px 28px", fontSize: 17 }}>(515) 432-7162</a>
            <a href="#/contact" className="btn btn-ghost btn-arrow" style={{ color: "#fff", borderColor: "#ffffff33", padding: "18px 28px", fontSize: 17 }}>Request a quote</a>
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <h4>Enterprise Electric Inc.</h4>
            <div style={{ color: "#E6E4E0", fontSize: 14, lineHeight: 1.7 }}>
              825 Harrison St.<br/>
              Boone, IA 50036<br/>
              info@enterpriseelectricboone.com<br/>
              Master Electrician · Est. 1992
            </div>
          </div>
          <div>
            <h4>Site</h4>
            {NAV_ITEMS.map((it) => <a key={it.to} href={`#/${it.to === "home" ? "" : it.to}`}>{it.label}</a>)}
          </div>
          <div>
            <h4>Services</h4>
            {SERVICES.map((s) => <a key={s.id} href={`#/services/${s.id}`}>{s.title.split("&")[0].trim()}</a>)}
          </div>
          <div>
            <h4>Hours</h4>
            <div style={{ color: "#E6E4E0", fontSize: 14, lineHeight: 1.9 }}>
              Mon – Fri · 7:00 AM – 4:00 PM<br/>
              Sat – Sun · Closed<br/>
              <span style={{ color: "#ffffff66" }}>Holiday hours may vary</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Enterprise Electric Inc. · Boone, Iowa</div>
          <div>Serving Boone · Greene · Story counties</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, useHashRoute, NAV_ITEMS });
