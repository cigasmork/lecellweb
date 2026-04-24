function SpaceSection() {
  const t = useLang();
  const s = t.space;
  const spaceAssetVersion = "20260424-1";
  const imgs = [
    { src: window.__resources?.space1 || `assets/space-1.png?v=${spaceAssetVersion}`, alt: "Reception" },
    { src: window.__resources?.space2 || `assets/space-2.png?v=${spaceAssetVersion}`, alt: "VVIP Lounge" },
    { src: window.__resources?.space3 || `assets/space-3.jpg?v=${spaceAssetVersion}`, alt: "Consult" },
    { src: window.__resources?.space4 || `assets/space-4.jpg?v=${spaceAssetVersion}`, alt: "Treatment Suite" },
    { src: window.__resources?.space5 || `assets/space-5.png?v=${spaceAssetVersion}`, alt: "Recovery" },
  ];

  return (
    <section className="space section-pad" id="space">
      <div className="wrap">
        <div className="space-head">
          <div className="section-num" style={{ justifyContent: "center" }}>
            <span className="n">— 05</span>
            <span className="label">{s.sectionLabel}</span>
          </div>
          <h2>{s.title} <em>{s.titleEm}</em></h2>
          <p>{s.desc.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
          ))}</p>
        </div>
        <div className="space-grid">
          {["a","b","c","d","e"].map((cls, i) => (
            <div key={cls} className={cls} style={{ position: "relative", overflow: "hidden" }}>
              <img src={imgs[i].src} alt={imgs[i].alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <span className="space-tag">{s.tags[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.SpaceSection = SpaceSection;
