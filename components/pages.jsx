// About, Services (index + detail), Gallery, Contact pages

function AboutPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero-kicker"><span className="dot" /><span className="eyebrow">§ About · Est. 1992</span></div>
          <h1 className="display display-xl" style={{ maxWidth: "16ch" }}>
            Local crew. <span className="accent-word">Licensed trade.</span> Thirty-plus years.
          </h1>
          <div className="hero-sub">
            Enterprise Electric was founded in 1992 in Boone, Iowa, and has been owned and operated here ever since. We're a Master-A shop serving Boone, Greene, and Story counties — plus anywhere in driving distance when the job's worth it.
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split-2">
            <div className="prose">
              <Eyebrow>Our work</Eyebrow>
              <h2 className="display display-m" style={{ margin: "12px 0 24px" }}>Do it to code. Do it once.</h2>
              <p>Enterprise is built on repeat customers and referrals. Schools and shops and barns that called us twenty years ago still call us today, usually because nobody else can find the wire we buried.</p>
              <p>We run our own directional boring rig and hydrovac truck in-house, so underground work doesn't get subcontracted out and marked up. One crew shows up, one crew finishes, one invoice arrives.</p>
              <p>We hold a Master-A Electrician license, are a Trusted Alliant Energy Installer, and are active with the Boone Chamber of Commerce.</p>
            </div>
            <div>
              <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "32px 0" }}>
                <div className="eyebrow" style={{ marginBottom: 20 }}>By the numbers</div>
                {[
                  ["Founded", "1992"],
                  ["Years in business", "32+"],
                  ["Primary counties", "Boone · Greene · Story"],
                  ["License", "Master Electrician"],
                  ["Crew", "Licensed journeymen & apprentices"],
                  ["Equipment", "Owned boring + hydrovac"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--line)", alignItems: "baseline" }}>
                    <div className="label-mono" style={{ color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 11 }}>{k}</div>
                    <div style={{ fontFamily: "var(--f-display)", fontSize: 20, letterSpacing: "-0.01em" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead num="§ 02" label="How we work">The process.</SectionHead>
          <div className="process-grid">
            {[
              ["01", "Listen", "You call or send a note. We ask enough questions to quote the job honestly — not ask twice."],
              ["02", "Walk it", "Free on-site visit for anything past a light fixture. We show up when we say we will."],
              ["03", "Quote", "Plain-English scope and a number. No surprise line items later."],
              ["04", "Build it", "Licensed crew, owned equipment, permits pulled. Code-compliant, finished clean."],
            ].map(([n, t, d]) => (
              <div key={n} className="process-step">
                <div className="n">{n}</div>
                <div className="t">{t}</div>
                <div className="d">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead num="§ 03" label="Credentials">Licensed. Trusted. Local.</SectionHead>
          <div className="badge-row" style={{ gap: 12 }}>
            {[
              "Master A Electrician",
              "Trusted Alliant Energy Installer",
              "Boone Chamber of Commerce",
              "Licensed · Bonded · Insured",
              "NFPA Fire Alarm Install",
              "Owned HDD & Hydrovac Fleet",
            ].map((b) => <span key={b} className="badge" style={{ padding: "12px 18px", fontSize: 12 }}>{b}</span>)}
          </div>
        </div>
      </section>

      <ContactTeaser />
    </div>
  );
}

function ServicesIndexPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero-kicker"><span className="dot" /><span className="eyebrow">§ Services</span></div>
          <h1 className="display display-xl" style={{ maxWidth: "14ch" }}>
            Four disciplines.<br/><span className="accent-word">One crew.</span>
          </h1>
          <div className="hero-sub">
            Above and below ground. Residential, commercial, and industrial. Pick a service to see what's included.
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="svc-table">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#/services/${s.id}`} className="svc-row">
                <div className="n">{s.num}</div>
                <div className="t">{s.title}</div>
                <div className="d">{s.blurb}</div>
                <div className="arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactTeaser />
    </div>
  );
}

function ServiceDetailPage({ id }) {
  const svc = SERVICES.find((s) => s.id === id) || SERVICES[0];
  const svcIdx = SERVICES.indexOf(svc);
  const next = SERVICES[(svcIdx + 1) % SERVICES.length];
  const photo = SERVICE_PHOTOS[svc.id] || GALLERY[0];
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <a href="#/services" className="eyebrow" style={{ display: "inline-block", marginBottom: 24 }}>← Services</a>
          <div className="hero-kicker"><span className="dot" /><span className="eyebrow">Service · {svc.num} of 04</span></div>
          <h1 className="display display-xl" style={{ maxWidth: "18ch" }}>
            {svc.title.split(" & ")[0]}<br/>
            {svc.title.includes(" & ") && <span className="accent-word">{"& " + svc.title.split(" & ").slice(1).join(" & ")}</span>}
          </h1>
          <div className="hero-sub">{svc.blurb}</div>
          <div className="hero-cta-row">
            <a href="#/contact" className="btn btn-primary btn-arrow">Request this service</a>
            <a href="tel:5154327162" className="btn btn-ghost">(515) 432-7162</a>
          </div>
          <div className="hero-photo">
            {photo.src && <img src={photo.src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
            <div className="tag">{photo.cat} · {photo.title}</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split-2">
            <div>
              <Eyebrow>What's included</Eyebrow>
              <h2 className="display display-m" style={{ margin: "12px 0 32px" }}>Scope of work</h2>
              <div style={{ borderTop: "1px solid var(--line)" }}>
                {svc.items.map((it, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 16, padding: "20px 0", borderBottom: "1px solid var(--line)", alignItems: "baseline" }}>
                    <div className="label-mono" style={{ color: "var(--muted)", letterSpacing: "0.1em" }}>{String(i+1).padStart(2,"0")}</div>
                    <div style={{ fontFamily: "var(--f-display)", fontSize: 22, letterSpacing: "-0.01em" }}>{it}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="badge-row" style={{ marginBottom: 32 }}>
                {svc.tags.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>
              <div className="contact-panel" style={{ padding: 32 }}>
                <h3>Get a quote for {svc.title.split(" & ")[0].toLowerCase()}.</h3>
                <p style={{ color: "#c8c6c2", fontSize: 14, marginBottom: 24 }}>Same-day response during business hours. On-site visits are free across Boone, Greene, and Story counties.</p>
                <a href={`#/contact?svc=${svc.id}`} className="btn btn-primary btn-arrow">Start a request</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <Eyebrow>Next service</Eyebrow>
          <a href={`#/services/${next.id}`} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 16 }}>
            <div className="display display-l">{next.title.split(" & ")[0]} <span style={{ color: "var(--accent)" }}>→</span></div>
            <div className="label-mono" style={{ color: "var(--muted)" }}>{next.num}</div>
          </a>
        </div>
      </section>
    </div>
  );
}

function GalleryPage({ openLightbox }) {
  const [filter, setFilter] = React.useState("All");
  const shown = filter === "All" ? GALLERY : GALLERY.filter((p) => p.cat === filter);
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero-kicker"><span className="dot" /><span className="eyebrow">§ Gallery · {GALLERY.length} projects</span></div>
          <h1 className="display display-xl" style={{ maxWidth: "14ch" }}>
            Work we're <span className="accent-word">proud of.</span>
          </h1>
          <div className="hero-sub">
            A running portfolio of projects across central Iowa. Click any tile for details. New photos added as they're collected.
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filters">
            {CATEGORIES.map((c) => (
              <button key={c} className={`chip ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
            <div style={{ marginLeft: "auto" }} className="label-mono">
              <span style={{ color: "var(--muted)" }}>Showing</span> {String(shown.length).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
            </div>
          </div>
          <div className="gallery-grid">
            {shown.map((p, i) => (
              <PhotoTile
                key={p.id}
                photo={p}
                className={i % 7 === 0 ? "wide" : ""}
                onClick={() => openLightbox(GALLERY.indexOf(p))}
                showNum
              />
            ))}
          </div>
        </div>
      </section>
      <ContactTeaser />
    </div>
  );
}

function ContactPage() {
  const params = new URLSearchParams((window.location.hash.split("?")[1] || ""));
  const [form, setForm] = React.useState({
    name: "", email: "", phone: "", service: params.get("svc") || "", message: "",
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (form.phone && !/^[\d\s\-()+]{7,}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.service) e.service = "Select a service";
    if (!form.message.trim() || form.message.trim().length < 8) e.message = "Tell us a bit about the project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero-kicker"><span className="dot" /><span className="eyebrow">§ Contact</span></div>
          <h1 className="display display-xl" style={{ maxWidth: "14ch" }}>
            Tell us what <span className="accent-word">you're building.</span>
          </h1>
          <div className="hero-sub">
            Same-day response during business hours. On-site visits are free across our service area.
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            <form onSubmit={submit} noValidate>
              {sent ? (
                <div style={{ padding: "48px 0" }}>
                  <div className="pill-accent" style={{ marginBottom: 24 }}>Message sent</div>
                  <h2 className="display display-m" style={{ margin: 0, maxWidth: "18ch" }}>Thanks, {form.name.split(" ")[0]}. We'll be in touch shortly.</h2>
                  <p style={{ color: "var(--ink-2)", marginTop: 16 }}>A team member typically responds within a few business hours. If it's urgent, please call <a href="tel:5154327162" style={{ color: "var(--accent)" }}>(515) 432-7162</a>.</p>
                  <button className="btn btn-ghost btn-arrow" style={{ marginTop: 24 }} onClick={() => { setSent(false); setForm({ name:"", email:"", phone:"", service:"", message:"" }); }}>Send another</button>
                </div>
              ) : (
                <>
                  <div className="field-row">
                    <div className={`field ${errors.name ? "err" : ""}`}>
                      <label>Name *</label>
                      <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Jane Doe" />
                      {errors.name && <div className="err-msg">{errors.name}</div>}
                    </div>
                    <div className={`field ${errors.email ? "err" : ""}`}>
                      <label>Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="jane@example.com" />
                      {errors.email && <div className="err-msg">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="field-row">
                    <div className={`field ${errors.phone ? "err" : ""}`}>
                      <label>Phone</label>
                      <input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="(515) 555-0199" />
                      {errors.phone && <div className="err-msg">{errors.phone}</div>}
                    </div>
                    <div className={`field ${errors.service ? "err" : ""}`}>
                      <label>Service *</label>
                      <select value={form.service} onChange={(e) => setForm({...form, service: e.target.value})}>
                        <option value="">Select…</option>
                        {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                        <option value="other">Something else</option>
                      </select>
                      {errors.service && <div className="err-msg">{errors.service}</div>}
                    </div>
                  </div>
                  <div className={`field ${errors.message ? "err" : ""}`}>
                    <label>Project details *</label>
                    <textarea rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Briefly describe the project, location, and timeline." />
                    {errors.message && <div className="err-msg">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary btn-arrow" style={{ marginTop: 16 }}>Send message</button>
                  <div className="label-mono" style={{ color: "var(--muted)", marginTop: 16 }}>We never share your info.</div>
                </>
              )}
            </form>

            <aside className="contact-panel">
              <h3>Enterprise Electric Inc.</h3>
              <div className="kv"><div className="k">Address</div><div className="v">825 Harrison St.<br/>Boone, IA 50036</div></div>
              <div className="kv"><div className="k">Phone</div><div className="v"><a href="tel:5154327162">(515) 432-7162</a></div></div>
              <div className="kv"><div className="k">Email</div><div className="v" style={{ fontSize: 13, wordBreak: "break-all" }}><a href="mailto:info@enterpriseelectricboone.com">info@enterpriseelectricboone.com</a></div></div>
              <div className="kv"><div className="k">Hours</div><div className="v">Mon – Fri<br/>7:00 AM – 4:00 PM</div></div>
              <div className="kv"><div className="k">Service area</div><div className="v">Boone · Greene · Story counties</div></div>
              <div className="kv" style={{ border: "none" }}><div className="k">License</div><div className="v">Master Electrician</div></div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage, ServicesIndexPage, ServiceDetailPage, GalleryPage, ContactPage });
