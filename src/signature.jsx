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
        <span>Timeless 360 Signature</span>
        <span>staged course</span>
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

function SigModal({ s, item, onClose }) {
  const d = item.detail;
  const m = s.modal;

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!d) return null;

  return ReactDOM.createPortal(
    <div className="sig-modal-backdrop" onClick={onClose}>
      <div className="sig-modal" role="dialog" aria-modal="true" aria-label={item.ti} onClick={(e) => e.stopPropagation()}>
        <button className="sig-modal-close" onClick={onClose} aria-label={m.close}>×</button>
        <div className="sig-modal-scroll">
          <div className="sig-modal-cat">{d.cat}</div>
          <div className="sig-modal-head">
            <span className="num">{item.n}</span>
            <div>
              <h3>{item.ti}</h3>
              <div className="ko">{item.ko}</div>
            </div>
          </div>
          {d.tagline && <p className="sig-modal-tagline">{d.tagline}</p>}
          <p className="sig-modal-desc">{d.desc}</p>

          {d.steps && d.steps.length > 0 && (
            <div className="sig-modal-block">
              <div className="sig-modal-label">{m.stepsLabel}</div>
              <ul className="sig-modal-steps">
                {d.steps.map((st, i) => <li key={i}>{st}</li>)}
              </ul>
            </div>
          )}

          {d.programs && d.programs.length > 0 && (
            <div className="sig-modal-block">
              <div className="sig-modal-label">{m.programsLabel}</div>
              <div className="sig-modal-progs">
                {d.programs.map((p, i) => (
                  <div className="prog-row" key={i}>
                    <span className="pn">{p.name}</span>
                    <span className="pt">{p.tier}</span>
                    <span className="pnote">{p.note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="sig-modal-meta">
            {d.meta.map((mt, i) => (
              <div className="attr" key={i}>
                <div className="k">{mt.k}</div>
                <div className="v">{mt.v}</div>
              </div>
            ))}
          </div>

          {m.disclaimer && <p className="sig-modal-note">{m.disclaimer}</p>}
        </div>
      </div>
    </div>,
    document.body
  );
}

function Signature() {
  const t = useLang();
  const s = t.signature;
  const [openIdx, setOpenIdx] = React.useState(null);
  const openItem = openIdx != null ? s.treatments[openIdx] : null;
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
          {s.treatments.map((t, i) => (
            <div
              className="cell"
              key={t.n}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              onClick={() => setOpenIdx(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenIdx(i); }
              }}
            >
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
      {openItem && <SigModal s={s} item={openItem} onClose={() => setOpenIdx(null)} />}
    </section>
  );
}

window.SigModal = SigModal;
window.Signature = Signature;
