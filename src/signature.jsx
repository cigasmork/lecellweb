const sigImages = [
  "assets/sig-1.png",
  "assets/sig-2.png",
  "assets/sig-3.png",
];

function SigSlider() {
  const [cur, setCur] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setCur(i => (i + 1) % sigImages.length), 3800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="sig-visual" style={{ position: "relative", overflow: "hidden" }}>
      {sigImages.map((src, i) => (
        <img key={i} src={src} alt={`Signature ${i + 1}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: cur === i ? 1 : 0, transition: "opacity 1s ease" }}
        />
      ))}
      <div className="badge">Signature · 01</div>
      <div className="caption">
        <span>Cellular Renewal Program</span>
        <span>duration · 12 weeks</span>
      </div>
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 2 }}>
        {sigImages.map((_, i) => (
          <button key={i} onClick={() => setCur(i)}
            style={{ width: cur === i ? 20 : 6, height: 6, borderRadius: 3, background: cur === i ? "var(--gold)" : "rgba(240,233,217,0.4)", border: 0, padding: 0, cursor: "pointer", transition: "width 0.3s ease, background 0.3s ease" }}
          />
        ))}
      </div>
    </div>
  );
}

function Signature() {
  const t = useLang();
  const s = t.signature;
  return (
    <section className="signature" id="signature">
      <div className="wrap">
        <div className="section-num">
          <span className="n">— 02</span>
          <span className="label" style={{ color: "rgba(240,233,217,0.55)" }}>{s.sectionLabel}</span>
        </div>
        <div className="sig-head">
          <h2 className="sig-title">{s.title1}<br /><em>{s.title2}</em></h2>
          <p className="sig-desc">{s.desc}</p>
        </div>
        <div className="sig-feature">
          <SigSlider />
          <div className="sig-copy">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 20 }}>{s.eyebrow}</div>
              <h3>{s.featureTitle1}<br /><em>{s.featureTitle2}</em></h3>
              <p style={{ marginTop: 24 }}>{s.featureDesc}</p>
            </div>
            <div className="sig-attrs">
              <div className="attr"><div className="k">Consultation</div><div className="v">{s.attrs.consult}</div></div>
              <div className="attr"><div className="k">Method</div><div className="v">{s.attrs.method}</div></div>
              <div className="attr"><div className="k">Duration</div><div className="v">{s.attrs.duration}</div></div>
              <div className="attr"><div className="k">Lounge</div><div className="v">{s.attrs.lounge}</div></div>
            </div>
          </div>
        </div>
        <div className="sig-list">
          {s.treatments.map((t) => (
            <div className="cell" key={t.n}>
              <div>
                <div className="num">{t.n}</div>
                <div className="ti">{t.ti}</div>
                <div className="sub">{t.ko} · {t.sub}</div>
              </div>
              <div className="arrow">{s.view}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Signature = Signature;
