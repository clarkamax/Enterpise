// Shared atoms and data
const { useState, useEffect, useRef, useMemo } = React;

// Real project photos, mapped by what's in them
const GALLERY = [
  { id: 1, src: "assets/gallery/eei-trucks-storm.jpg",      cat: "Industrial",         title: "Grain-Bin Service Call",       year: "2024", loc: "Boone County, IA",
    desc: "EEI service trucks on site at a grain facility. Storm-season repairs on incoming power and panel controls." },
  { id: 2, src: "assets/gallery/fire-head.jpg",             cat: "Fire & Security",    title: "Fieldhouse Fire Detection",    year: "2024", loc: "Boone, IA",
    desc: "Addressable fire detection head in a new-build fieldhouse, installed to NFPA code on open-web steel." },
  { id: 3, src: "assets/gallery/boring-locator.jpeg",       cat: "Directional Boring", title: "HDD Utility Crossing",         year: "2025", loc: "Boone, IA",
    desc: "R1 locator set on tripod tracking head-depth and pitch — a boring run under a city street with minimal surface disruption." },
  { id: 4, src: "assets/gallery/stadium-lights.jpeg",       cat: "Commercial",         title: "Stadium Field Lighting",       year: "2024", loc: "Boone, IA",
    desc: "Fixture service at the top of a stadium light pole — bucket-truck work on aluminum MH reflectors." },
  { id: 5, src: "assets/gallery/fareway-fieldhouse.jpg",    cat: "Commercial",         title: "Fareway Fieldhouse",           year: "2023", loc: "Boone, IA",
    desc: "Exterior and sign lighting for the Fareway Fieldhouse — commercial build-out, night commissioning." },
  { id: 6, src: "assets/gallery/trench-silos.jpeg",         cat: "Industrial",         title: "Grain-Facility Feeder Run",    year: "2024", loc: "Story County, IA",
    desc: "Direct-bury feeder trench between silos and control building during a grain-plant expansion." },
  { id: 7, src: "assets/gallery/conduit-bundle.jpeg",       cat: "Industrial",         title: "Conduit Stub-Up",              year: "2024", loc: "Boone, IA",
    desc: "Bundle of rigid conduit dressed and stubbed up through a new concrete pad prior to pour-in." },
  { id: 8, src: "assets/gallery/elevator-night.jpeg",       cat: "Industrial",         title: "Elevator Night Lighting",      year: "2023", loc: "Greene County, IA",
    desc: "Night lighting at a working grain elevator — high-mast and catwalk fixtures, 24/7 operations." },
  { id: 9, src: "assets/gallery/crane-lift-silo.jpg",       cat: "Industrial",         title: "Conveyor Tower Lift",          year: "2023", loc: "Central Iowa",
    desc: "Dual-crane lift of a conveyor tower onto a grain silo cluster — EEI crew handling the electrical tie-in." },
  { id:10, src: "assets/gallery/crane-conveyor-beam.jpg",   cat: "Industrial",         title: "Conveyor Beam Set",            year: "2023", loc: "Boone, IA",
    desc: "EEI trailer on site as a conveyor beam is flown into place over a mainline trailer." },
  { id:11, src: "assets/gallery/silo-top-view.jpeg",        cat: "Industrial",         title: "Walkway at Silo Crown",        year: "2024", loc: "Boone County, IA",
    desc: "Rooftop walkway at the crown of a silo cluster — stair-tower and cable-tray work in progress." },
  { id:12, src: "assets/gallery/bucket-silos.jpeg",         cat: "Industrial",         title: "Bucket Work Between Silos",    year: "2024", loc: "Boone, IA",
    desc: "Bucket truck fitted between two silos to run conduit at the inter-tank gantry — tight access, careful setup." },
  { id:13, src: "assets/gallery/trench-crew.jpeg",          cat: "Directional Boring", title: "Direct-Bury to Grain Site",    year: "2024", loc: "Boone County, IA",
    desc: "Takeuchi excavator + vibratory plow crew on a primary-feed run to a grain facility off the highway." },
  { id:14, src: "assets/gallery/ballfield-electronics.jpg", cat: "Commercial",         title: "Ballfield Light Controls",     year: "2024", loc: "Boone, IA",
    desc: "Pole-top electronics and ballast enclosure servicing an MLB-height ball diamond lighting array." },
  { id:15, src: "assets/gallery/cable-reel.jpeg",           cat: "Directional Boring", title: "Maverick Cable-Reel Trailer",  year: "2025", loc: "EEI Yard, Boone",
    desc: "HDPE conduit reel trailer ready for a directional bore — EEI runs its own underground equipment." },
  { id:16, src: "assets/gallery/bucket-truck.jpg",          cat: "Residential",        title: "EEI Bucket Truck No. 2",       year: "2024", loc: "Boone, IA",
    desc: "EEI's service bucket truck — used daily on residential service drops, meter re-sets, and overhead repair calls." },
  { id:17, src: "assets/gallery/eei-trailer-conduit.jpg",   cat: "Industrial",         title: "Yard & Conduit Stock",         year: "2024", loc: "Boone, IA",
    desc: "EEI shop yard with a run of large-diameter PVC conduit staged for a commercial underground job." },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Industrial", "Fire & Security", "Directional Boring"];

// Hero/service photos — reused for service detail pages
const SERVICE_PHOTOS = {
  "electrical": GALLERY[15], // bucket truck (residential/service)
  "fire-security": GALLERY[1], // fire head
  "boring": GALLERY[2], // HDD locator
  "hydrovac": GALLERY[12], // trench-crew (digging / utility location)
};

const SERVICES = [
  {
    id: "electrical",
    num: "01",
    title: "Residential, Commercial & Industrial Electrical",
    blurb: "Code-compliant wiring, service upgrades, troubleshooting, and repairs for homes, businesses, and plants across central Iowa.",
    tags: ["Wiring", "Service Panels", "Troubleshooting", "Repairs"],
    items: [
      "New construction wiring & rough-ins",
      "Service panel upgrades (100A, 200A, 400A)",
      "Troubleshooting & diagnostic repairs",
      "Generator & EV-charger install",
      "Lighting design, retrofit & LED conversion",
      "Three-phase & motor-control wiring",
    ],
  },
  {
    id: "fire-security",
    num: "02",
    title: "Fire Alarms & Security Systems",
    blurb: "Designed, installed, and serviced to current NFPA and AHJ standards — early detection and peace of mind.",
    tags: ["Design", "Install", "NFPA Compliance", "Monitoring"],
    items: [
      "Addressable fire alarm system design",
      "Smoke, heat & duct detector installation",
      "Access control & intrusion systems",
      "CCTV & video surveillance",
      "Annual inspection & testing",
      "Retrofits for existing buildings",
    ],
  },
  {
    id: "boring",
    num: "03",
    title: "Horizontal Directional Boring",
    blurb: "Minimally invasive underground utility installation — under roads, driveways, and landscaping without tearing them up.",
    tags: ["Underground", "Trenchless", "Utilities", "Low-Impact"],
    items: [
      "Primary & secondary electrical service runs",
      "Road, driveway & sidewalk crossings",
      "Fiber & communications conduit",
      "Minimal landscape disruption",
      "Residential & commercial projects",
      "Locates & permitting coordination",
    ],
  },
  {
    id: "hydrovac",
    num: "04",
    title: "Hydrovac Services",
    blurb: "High-pressure water plus vacuum excavation — the safest way to expose utilities and dig in congested subsurface environments.",
    tags: ["Safe Digging", "Daylighting", "Potholing", "Slot Trenching"],
    items: [
      "Utility daylighting & location verification",
      "Potholing for engineering surveys",
      "Slot trenching in tight areas",
      "Cold-weather excavation",
      "Debris removal & site cleanup",
      "Support for HDD & electrical crews",
    ],
  },
];

function Brandmark({ size = 32 }) {
  return (
    <div className="brandmark-logo" style={{ width: size, height: size, fontSize: size * 0.44 }}>EEI</div>
  );
}
function BrandLockup() {
  return (
    <a href="#/" className="brandmark" aria-label="Enterprise Electric Inc. home">
      <Brandmark />
      <div>
        <div className="brandmark-text">Enterprise Electric</div>
        <span className="sub">Boone · Iowa · Est. 1992</span>
      </div>
    </a>
  );
}

function PhotoTile({ photo, className, onClick, showNum }) {
  const onKey = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick?.(); } };
  return (
    <div className={`gallery-tile ${className || ""}`} onClick={onClick} onKeyDown={onKey}
         role="button" tabIndex={0} aria-label={`Open photo: ${photo.cat} — ${photo.title}`}>
      <div className="ph">
        {photo.src && (
          <img src={photo.src} alt={`${photo.cat} — ${photo.title}`} loading="lazy" decoding="async"
               style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
        )}
      </div>
      {showNum && <div className="num-corner">{String(photo.id).padStart(3,"0")} / {String(GALLERY.length).padStart(3,"0")}</div>}
      <div className="cap">
        <span style={{ color: "var(--accent)", marginRight: 8 }} aria-hidden="true">◉</span>
        {photo.cat} · {photo.title}
      </div>
    </div>
  );
}

function Eyebrow({ children }) { return <div className="eyebrow">{children}</div> }

function SectionHead({ num, label, children }) {
  return (
    <div className="sec-head">
      <div>
        <div className="sec-num">{num}</div>
        <div className="sec-num" style={{ color: "var(--ink)", marginTop: 4 }}>{label}</div>
      </div>
      <div className="display display-m">{children}</div>
    </div>
  );
}

function Lightbox({ photo, idx, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, onPrev, onNext]);
  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Photo ${idx+1} of ${total}: ${photo.title}`}>
      <button className="lb-close" onClick={onClose} aria-label="Close lightbox">Close ✕</button>
      <div className="lb-body" onClick={(e) => e.stopPropagation()}>
        <div className="lb-img" style={{position:"relative", overflow:"hidden"}}>
          {photo.src && <img src={photo.src} alt={`${photo.cat} — ${photo.title}`} decoding="async" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}} />}
          <div className="cnum">{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
        </div>
        <div className="lb-meta">
          <div className="cat">{photo.cat}</div>
          <h3>{photo.title}</h3>
          <p>{photo.desc || `Project completed ${photo.year} · ${photo.loc}.`}</p>
          <div style={{ marginTop: 16, fontFamily: "var(--f-mono)", fontSize: 11, color: "#ffffff77", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {photo.year} · {photo.loc}
          </div>
          <div style={{ display:"flex", gap: 12, marginTop: 24 }}>
            <button className="btn btn-primary btn-arrow" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next project">Next project</button>
          </div>
        </div>
      </div>
      <div className="lb-nav" onClick={(e) => e.stopPropagation()}>
        <button onClick={onPrev} aria-label="Previous photo">←</button>
        <button onClick={onNext} aria-label="Next photo">→</button>
      </div>
    </div>
  );
}

Object.assign(window, {
  GALLERY, CATEGORIES, SERVICES, SERVICE_PHOTOS,
  Brandmark, BrandLockup, PhotoTile, Eyebrow, SectionHead, Lightbox,
});
