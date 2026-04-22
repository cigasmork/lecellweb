function App() {
  const defaults = React.useMemo(() => {
    try {
      return JSON.parse(document.getElementById("__tweak-defaults").textContent);
    } catch (e) {return { accentHue: 82, paperTone: "ivory", showSignature: true };}
  }, []);

  const [tweaks, setTweaks] = React.useState(defaults);
  const setTweak = (k, v) => setTweaks((t) => ({ ...t, [k]: v }));

  React.useEffect(() => {
    document.body.dataset.paper = tweaks.paperTone;
    // update gold hue
    const root = document.documentElement;
    const h = tweaks.accentHue;
    root.style.setProperty("--gold", `oklch(0.72 0.08 ${h})`);
    root.style.setProperty("--gold-deep", `oklch(0.58 0.09 ${h - 4})`);
    root.style.setProperty("--gold-pale", `oklch(0.88 0.04 ${h + 3})`);
  }, [tweaks]);

  // intersection fade-in
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          <span className="gold">Since 2026</span>
          <span>Anti-Aging</span>
          <span className="gold">·</span>
          <span>Stem Cell Therapy</span>
          <span className="gold">·</span>
          <span>Reverse-Aging</span>
          <span className="gold">·</span>
          <span>Integrative Wellness</span>
          <span className="gold">·</span>
          <span>VVIP Private Care</span>
          <span className="gold">·</span>
          <span>Cheongdam, Seoul</span>
          <span className="gold">·</span>
          {/* dup for infinite loop */}
          <span className="gold">Since 2026</span>
          <span>Anti-Aging</span>
          <span className="gold">·</span>
          <span>Stem Cell Therapy</span>
          <span className="gold">·</span>
          <span>Reverse-Aging</span>
          <span className="gold">·</span>
          <span>Integrative Wellness</span>
          <span className="gold">·</span>
          <span>VVIP Private Care</span>
          <span className="gold">·</span>
          <span>Cheongdam, Seoul</span>
          <span className="gold">·</span>
        </div>
      </div>

      {/* About / Intro */}
      <section className="intro section-pad" id="about">
        <div className="wrap">
          <div className="section-num">
            <span className="n">— 01</span>
            <span className="label">About LeCell</span>
          </div>
          <div className="intro-grid">
            <div>
              <h2 className="intro-title" style={{ maxWidth: "800px", fontSize: "50px" }}>
                A clinic<br />
                <em style={{ fontWeight: 400 }}>of renewal.</em>
              </h2>
            </div>
            <div className="intro-body">
              <p>르셀청담의원은 서울 청담에 자리한 프리미엄 안티에이징 클리닉입니다.
프라이빗한 진료 환경 속에서, 환자 한 분 한 분의 시간과 결을 세심하게 살피며
보다 자연스럽고 품격 있는 변화를 제안합니다.
              </p>
              <p>충분한 상담과 섬세한 진료, 그리고 개인의 피부 상태와 라이프스타일을 고려한 맞춤 케어를 통해 단순한 시술을 넘어 시간이 지날수록 더 편안하고 아름다운 방향을 함께 그려갑니다.



              </p>
              <p>빠르게 바꾸는 아름다움보다, 천천히 깊어지는 건강한 아름다움.
르셀청담의원은 당신만의 속도에 맞춘 하이엔드 메디컬 케어를 제공합니다.

              </p>
            </div>
          </div>
        </div>
      </section>

      {tweaks.showSignature && <Signature />}
      <Programs />
      <Doctors />
      <SpaceSection />
      <Location />
      <Footer />

      <TweaksPanel tweaks={tweaks} setTweak={setTweak} />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);