// Home page — hero, services overview, wordmark, stats, portfolio teaser, FB feed, contact teaser
const { useState: useState_home } = React;

function HomePage({ openLightbox }) {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-kicker">
            <span className="dot" />
            <span className="eyebrow">Electrical contractor · Boone, Iowa · Est. 1992</span>
          </div>
          <h1 className="display display-xl">
            Power, done <span className="accent-word">right.</span>
          </h1>
          <div className="hero-sub">
            Thirty-plus years wiring central Iowa — residential, commercial, industrial, and everything that lives underneath. Enterprise Electric builds systems that last, with the finish work you'd expect from a Master Electrician who lives here too.
          </div>
          <div className="hero-cta-row">
            <a href="#/contact" className="btn btn-primary btn-arrow">Request a quote</a>
            <a href="#/services" className="btn btn-ghost btn-arrow">See services</a>
          </div>
          <div className="hero-meta">
            <div><div className="k">Established</div><div className="v">1992</div></div>
            <div><div className="k">Counties served</div><div className="v">Boone · Greene · Story</div></div>
            <div><div className="k">License</div><div className="v">Master A Electrician</div></div>
            <div><div className="k">Response</div><div className="v">Same-day quotes</div></div>
          </div>

          <div className="hero-photo">
            <img src={GALLERY[0].src} alt={`${GALLERY[0].cat} — ${GALLERY[0].title}`}
              loading="eager" fetchpriority="high"
              className="hero-parallax"
              style={{ position: "absolute", inset: "-10% 0", width: "100%", height: "120%", objectFit: "cover", willChange: "transform" }} />
            <div className="tag">{GALLERY[0].cat} · {GALLERY[0].title}</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <SectionHead num="§ 01" label="What we do">
            Four disciplines,<br/>one crew.
          </SectionHead>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="services-grid" style={{ margin: "0 32px" }}>
            {SERVICES.map((s) => (
              <a key={s.id} href={`#/services/${s.id}`} className="service-card">
                <div className="num">{s.num} / 04</div>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <div className="foot">
                  <div className="tags">
                    {s.tags.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="arrow">→</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WORDMARK BAND */}
      <section className="wordmark-band">
        <div className="container">
          <h2 className="wordmark">
            Built in <span className="accent">Boone.</span><br/>
            Wired for <span className="thin">Iowa.</span>
          </h2>
          <div className="eyebrow" style={{ marginTop: 88, maxWidth: "60ch" }}>
            A second-generation shop of licensed electricians, drillers, and hydrovac operators — all under one roof, one truck, one bill.
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight">
        <div className="container">
          <div className="stats-row">
            <div className="stat"><div className="v">32<span className="unit">yr</span></div><div className="k">In business</div></div>
            <div className="stat"><div className="v">3<span className="unit">cty</span></div><div className="k">Primary counties</div></div>
            <div className="stat"><div className="v">4<span className="unit">.0</span></div><div className="k">Core services</div></div>
            <div className="stat"><div className="v">1<span className="unit">/1</span></div><div className="k">Crew dispatched</div></div>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section>
        <div className="container">
          <SectionHead num="§ 02" label="Recent work">
            Fieldwork, <span className="thin-word">captured.</span>
          </SectionHead>
          <div className="gallery-grid">
            {GALLERY.slice(0, 6).map((p, i) => (
              <PhotoTile
                key={p.id}
                photo={p}
                className={i === 0 ? "wide" : ""}
                onClick={() => openLightbox(GALLERY.indexOf(p))}
                showNum
              />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
            <a href="#/gallery" className="btn btn-ghost btn-arrow">See full gallery</a>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section>
        <div className="container">
          <SectionHead num="§ 03" label="Why Enterprise">
            Thirty-plus years of<br/>
            <span className="accent-word">wiring this county</span>.
          </SectionHead>
          <div className="split-2">
            <div className="prose">
              <p>Since 1992, Enterprise Electric has served Boone and the counties around it — schools, shops, plants, barns, and a lot of houses. The job hasn't changed: do it to code, do it once, and leave the place cleaner than we found it.</p>
              <p>We're a Master-A shop. We carry our own directional boring rig and hydrovac truck, so when a project needs underground work we don't subcontract it out and mark it up. One crew, one schedule, one invoice.</p>
              <a href="#/about" className="btn btn-ghost btn-arrow" style={{ marginTop: 24 }}>About Enterprise</a>
            </div>
            <div>
              <div className="badge-row" style={{ marginBottom: 24 }}>
                <span className="badge">Master A Electrician</span>
                <span className="badge">Chamber of Commerce</span>
                <span className="badge">Trusted Alliant Energy Installer</span>
                <span className="badge">Licensed · Bonded · Insured</span>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Service area</div>
                <div className="display display-s" style={{ maxWidth: "14ch" }}>Boone · Greene · Story counties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACEBOOK FEED */}
      <section>
        <div className="container">
          <SectionHead num="§ 04" label="From our Facebook">
            What we've been up to.
          </SectionHead>
          <div className="fb-grid">
            {[
              { when: "3 days ago", body: "New service panel upgrade on an old farmhouse south of Ogden — 60A fuse box out, 200A main panel in. Clean install and the homeowner can finally run the AC and the well pump at the same time.", img: true },
              { when: "1 week ago", body: "Hydrovac crew out in Story County this week supporting a fiber install. Safe digging around existing utilities, no surprises.", img: true },
              { when: "2 weeks ago", body: "Thanks to the Boone Chamber of Commerce for having us at this year's member breakfast. Proud to be part of this community for 30+ years.", img: false },
            ].map((p, i) => (
              <div key={i} className="fb-card">
                <div className="meta">
                  <div className="avatar">E</div>
                  <div>
                    <div className="who">Enterprise Electric Inc.</div>
                    <div className="when">{p.when} · Boone, IA</div>
                  </div>
                </div>
                <div className="body">{p.body}</div>
                {p.img && <div className="ph-img" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactTeaser />
    </div>
  );
}

function ContactTeaser() {
  return (
    <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <div className="split-2" style={{ alignItems: "center" }}>
          <div>
            <Eyebrow>§ 05 · Get in touch</Eyebrow>
            <h2 className="display display-l" style={{ margin: "16px 0 24px", maxWidth: "12ch" }}>
              Start a project.
            </h2>
            <p style={{ color: "var(--ink-2)", maxWidth: "48ch" }}>
              Tell us what you're working on. We respond same-day during business hours.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <a href="#/contact" className="btn btn-primary btn-arrow">Request quote</a>
              <a href="tel:5154327162" className="btn btn-ghost">Call (515) 432-7162</a>
            </div>
          </div>
          <div>
            <div style={{ borderLeft: "1px solid var(--line-strong)", paddingLeft: 32 }}>
              <div className="eyebrow">Address</div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, marginTop: 4, marginBottom: 24 }}>825 Harrison St.<br/>Boone, IA 50036</div>
              <div className="eyebrow">Hours</div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, marginTop: 4 }}>Mon – Fri · 7–4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomePage, ContactTeaser });
