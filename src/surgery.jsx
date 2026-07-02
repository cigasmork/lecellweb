function Surgery() {
  const t = useLang();
  const s = t.surgery;
  const [openIdx, setOpenIdx] = React.useState(null);

  const openModal = (i) => {
    const it = s.items[i];
    if (!it.detail) return;
    setOpenIdx(i);
  };
  const openItem = openIdx != null
    ? (() => {
        const it = s.items[openIdx];
        return { n: String(openIdx + 1).padStart(2, "0"), ti: it.fr, ko: `${it.ko} · ${it.sub}`, detail: it.detail };
      })()
    : null;

  return (
    <section className="surgery section-pad" id="surgery">
      <div className="surgery-watermark" aria-hidden="true">Chirurgie</div>
      <div className="wrap">
        <div className="section-num">
          <span className="n">— 03</span>
          <span className="label">{s.sectionLabel}</span>
        </div>

        <div className="surgery-head">
          <div className="surgery-eyebrow">
            <span className="surgery-eyebrow-dot" />{s.eyebrow}
          </div>
          <h2>{s.title1}<br /><em>{s.title2}</em></h2>
          <p>{s.lead}</p>
        </div>

        <div className="surgery-grid">
          {s.items.map((it, i) => {
            const hasDetail = !!it.detail;
            return (
              <div
                className={"surgery-card" + (hasDetail ? " is-clickable" : "")}
                key={i}
                role={hasDetail ? "button" : undefined}
                tabIndex={hasDetail ? 0 : undefined}
                aria-haspopup={hasDetail ? "dialog" : undefined}
                onClick={hasDetail ? () => openModal(i) : undefined}
                onKeyDown={hasDetail ? (e) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(i); }
                } : undefined}
              >
                <span className="surgery-card-corner tl" />
                <span className="surgery-card-corner br" />
                <span className="surgery-card-n">{String(i + 1).padStart(2, "0")}</span>
                <div className="surgery-card-ko">{it.ko}<small>{it.sub}</small></div>
                <div className="surgery-card-fr">{it.fr}</div>
                <p className="surgery-card-desc">{it.desc}</p>
                {hasDetail && <span className="surgery-card-view">{s.view}</span>}
              </div>
            );
          })}
        </div>

        <div className="surgery-diff">
          <div className="surgery-diff-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="surgery-diff-icon">
              <path d="M12 2c1.5 2.6 1.5 5-0 7 1.9 1 3.4 2.6 4 5-2.6-1-4.9-.9-6.9.3C10.6 12 9.5 9.9 7.5 8.6c2 .3 3.6.1 4.5-1.3C10.6 4.9 10.9 3.2 12 2z"/>
              <circle cx="12" cy="19" r="2.4"/>
            </svg>
            {s.diff.eyebrow}
          </div>
          <h3>{s.diff.title1} <em>{s.diff.title2}</em></h3>
          <p>{s.diff.desc}</p>
        </div>

        <div className="surgery-foot">
          <p className="surgery-disclaimer">{s.disclaimer}</p>
          <a href="#reserve" className="surgery-cta">{s.cta}</a>
        </div>
      </div>

      {openItem && <SigModal s={{ modal: t.signature.modal }} item={openItem} onClose={() => setOpenIdx(null)} />}
    </section>
  );
}

window.Surgery = Surgery;
