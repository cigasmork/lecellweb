function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [activeLang, setActiveLang] = React.useState("KR");
  const langRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  React.useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
    }, 300);
  };

  const langs = [
    { code: "KR", native: "한국어" },
    { code: "EN", native: "English" },
    { code: "JP", native: "日本語" },
  ];

  const menuItems = [
    { id: "about",     label: "About" },
    { id: "signature", label: "Signature" },
    { id: "programs",  label: "Programs" },
    { id: "doctors",   label: "Medical Team" },
    { id: "space",     label: "Our Space" },
    { id: "location",  label: "Contact Us" },
  ];

  const GlobeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner nav-inner--simple">
          {/* Hamburger left */}
          <button className="nav-burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>

          {/* Brand center */}
          <a href="#top" onClick={go("top")} className="brand brand--center">
            <span className="brand-mark">Le<em>Cell</em></span>
            <span className="brand-sub">Cheongdam · 청담</span>
          </a>

          {/* Globe right */}
          <div className="nav-globe-area" ref={langRef}>
            <button className="nav-globe-btn" onClick={() => setLangOpen(v => !v)} aria-label="Language">
              <GlobeIcon />
            </button>
            {langOpen && (
              <div className="nav-lang-dropdown">
                {langs.map(l => (
                  <button
                    key={l.code}
                    className={`nav-lang-item ${activeLang === l.code ? "active" : ""}`}
                    onClick={() => { setActiveLang(l.code); setLangOpen(false); }}
                  >
                    <span className="nav-lang-code">{l.code}</span>
                    <span className="nav-lang-native">{l.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Slide-in menu */}
      <div
        className="slide-menu-overlay"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none", transition: "opacity 0.35s ease" }}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className="slide-menu"
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}
      >
        {/* Close */}
        <button className="slide-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="slide-menu-inner">
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={go(item.id)} className="slide-menu-link">
              {item.label}
            </a>
          ))}
          <a href="#reserve" className="slide-menu-reserve" onClick={() => setMenuOpen(false)}>
            Reserve
          </a>
        </div>

        {/* Lang at bottom */}
        <div className="slide-menu-langs">
          {langs.map(l => (
            <button
              key={l.code}
              className={`slide-menu-lang ${activeLang === l.code ? "active" : ""}`}
              onClick={() => setActiveLang(l.code)}
            >
              {l.native}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

window.Nav = Nav;
