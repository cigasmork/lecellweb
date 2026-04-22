const progImgs = {
  stemcell: "assets/prog-stemcell.png",
  lift: "assets/prog-antiaging.png",
  laser: "assets/prog-laser.png",
  booster: "assets/prog-booster.png",
  wellness: "assets/prog-wellness.png",
};

function Programs() {
  const t = useLang();
  const pd = t.programs;
  const [active, setActive] = React.useState(0);
  const p = pd.data[active];

  React.useEffect(() => {
    Object.values(progImgs).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="programs section-pad" id="programs">
      <div className="wrap">
        <div className="section-num">
          <span className="n">— 03</span>
          <span className="label">{pd.sectionLabel}</span>
        </div>
        <div className="prog-head">
          <h2 style={{ fontSize: "50px" }}>
            {pd.title.replace(pd.titleEm, "")} <em>{pd.titleEm}</em>
          </h2>
          <p className="intro-body" style={{ fontSize: 15, maxWidth: 420 }}>{pd.desc}</p>
        </div>
        <div className="prog-tabs">
          {pd.data.map((d, i) => (
            <button key={d.id} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
              <span className="n">{d.n}</span>
              <span>{d.tab}</span>
            </button>
          ))}
        </div>
        <div className="prog-body">
          <div className="prog-visual prog-visual-stack">
            {pd.data.map((d, i) => (
              <img
                key={d.id}
                src={progImgs[d.id]}
                alt={d.tab}
                className={i === active ? "is-active" : ""}
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
          <div className="prog-text">
            <div className="gold-divider">
              <span className="sym">§</span>
              <span className="line" />
              <span className="small-caps" style={{ color: "var(--gold-deep)" }}>Category {p.n}</span>
            </div>
            <h3>{p.h} <em>{p.hEm}</em></h3>
            <div className="korean">{p.ko}</div>
            <p className="lede">{p.lede}</p>
            <div className="prog-treatments">
              {p.items.map((it, i) => (
                <div className="row" key={i}>
                  <span className="n">— {String(i + 1).padStart(2, "0")}</span>
                  <span className="ti">{it.ti}<small>{it.sub}</small></span>
                  <span className="dur">{it.dur}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Programs = Programs;
