function App() {
  const defaults = React.useMemo(() => {
    try {
      return JSON.parse(document.getElementById("__tweak-defaults").textContent);
    } catch (e) { return { accentHue: 82, paperTone: "ivory", showSignature: true }; }
  }, []);

  const [tweaks, setTweaks] = React.useState(defaults);
  const setTweak = (k, v) => setTweaks((t) => ({ ...t, [k]: v }));

  // Language state — persist in localStorage
  const [lang, setLangState] = React.useState(() => {
    return localStorage.getItem("lecell_lang") || "KR";
  });
  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("lecell_lang", l);
  };

  React.useEffect(() => {
    document.body.dataset.paper = tweaks.paperTone;
    const root = document.documentElement;
    const h = tweaks.accentHue;
    root.style.setProperty("--gold", `oklch(0.72 0.08 ${h})`);
    root.style.setProperty("--gold-deep", `oklch(0.58 0.09 ${h - 4})`);
    root.style.setProperty("--gold-pale", `oklch(0.88 0.04 ${h + 3})`);
  }, [tweaks]);

  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <Nav lang={lang} setLang={setLang} />
      <Hero />

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {["Anti-Aging","Stem Cell Therapy","Reverse-Aging","Integrative Wellness","VVIP Private Care","Cheongdam, Seoul",
            "Anti-Aging","Stem Cell Therapy","Reverse-Aging","Integrative Wellness","VVIP Private Care","Cheongdam, Seoul"].map((txt, i) => (
            i % 2 === 0
              ? <span key={i}>{txt}</span>
              : <span key={i} className="gold">·</span>
          ))}
          <span className="gold">Since 2026</span>
        </div>
      </div>

      {/* About */}
      <section className="intro section-pad" id="about">
        <div className="wrap">
          <AboutSection />
        </div>
      </section>

      {tweaks.showSignature && <Signature />}
      <Programs />
      <Doctors />
      <SpaceSection />
      <Location />
      <Footer />

      <TweaksPanel tweaks={tweaks} setTweak={setTweak} />
    </LangContext.Provider>
  );
}

function AboutSection() {
  const t = useLang();
  const a = t.about;
  return (
    <>
      <div className="section-num">
        <span className="n">— 01</span>
        <span className="label">{a.sectionLabel}</span>
      </div>
      <div className="intro-grid">
        <div>
          <h2 className="intro-title" style={{ maxWidth: "800px", fontSize: "50px" }}>
            {a.title1}<br />
            <em style={{ fontWeight: 400 }}>{a.title2}</em>
          </h2>
        </div>
        <div className="intro-body">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p>{a.p3}</p>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
