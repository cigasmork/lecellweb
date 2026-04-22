const programData = [
  {
    id: "stemcell",
    n: "01",
    tab: "Stem Cell",
    h: "Cellular Rejuvenation",
    ko: "줄기세포 치료",
    lede: "피부·혈액·고압산소 기반 줄기세포 치료로 노화 진행을 늦추고 세포 재생을 촉진합니다. 엑소좀 병행으로 항노화와 면역 개선을 동시에 구현합니다.",
    items: [
      { ti: "피부 줄기세포", sub: "Skin-derived cellular therapy", dur: "60 min" },
      { ti: "혈액 줄기세포", sub: "Blood-derived systemic therapy", dur: "90 min" },
      { ti: "고압산소 줄기세포", sub: "Hyperbaric cellular protocol", dur: "120 min" },
      { ti: "엑소좀 병행 치료", sub: "Exosome adjunct therapy", dur: "45 min" },
    ],
  },
  {
    id: "lift",
    n: "02",
    tab: "Anti-Aging Surgery",
    h: "Reverse Aging",
    ko: "안면거상 · 리버스에이징",
    lede: "미니 · 전체 안면거상부터 목거상, 인중축소까지. 노화로 인한 처짐과 윤곽 변화에 대한 근본적 개선을 제공합니다.",
    items: [
      { ti: "미니 안면거상", sub: "Mini facelift", dur: "3 hr" },
      { ti: "전체 안면거상", sub: "Full facelift", dur: "5 hr" },
      { ti: "목거상", sub: "Neck lift", dur: "3 hr" },
      { ti: "인중축소", sub: "Lip lift", dur: "1 hr" },
    ],
  },
  {
    id: "laser",
    n: "03",
    tab: "Laser Lifting",
    h: "Energy-based Lifting",
    ko: "레이저 리프팅",
    lede: "고강도 초음파·고주파로 피부 심층의 탄력을 회복합니다. 시술 후 즉각적인 당김과 장기적 콜라겐 재생 효과를 제공합니다.",
    items: [
      { ti: "울쎄라", sub: "HIFU deep-layer lifting", dur: "60 min" },
      { ti: "써마지", sub: "Monopolar RF tightening", dur: "90 min" },
      { ti: "프락셀", sub: "Fractional resurfacing", dur: "45 min" },
      { ti: "인모드", sub: "Bipolar RF contouring", dur: "45 min" },
    ],
  },
  {
    id: "booster",
    n: "04",
    tab: "Skin Booster",
    h: "Regenerative Infusion",
    ko: "스킨부스터",
    lede: "피부 깊은 곳에 영양을 공급하고 자가 콜라겐 재생을 유도합니다. 장기적인 피부 결·탄력 개선을 위한 주기적 관리 프로그램으로 구성됩니다.",
    items: [
      { ti: "리쥬란", sub: "Polynucleotide booster", dur: "30 min" },
      { ti: "리바이브", sub: "Volumizing hydro-filler", dur: "30 min" },
      { ti: "레디어스", sub: "Collagen-stimulating filler", dur: "45 min" },
      { ti: "물광주사", sub: "Hydration infusion", dur: "30 min" },
    ],
  },
  {
    id: "wellness",
    n: "05",
    tab: "Wellness",
    h: "Integrative Wellness",
    ko: "웰니스 · 통합 케어",
    lede: "비만 클리닉과 암 환자 맞춤 통합 케어를 포함한 기능의학 기반 웰니스 프로그램. 고객의 생애 주기 전반을 고려한 장기적 관리입니다.",
    items: [
      { ti: "GLP-1 비만 클리닉", sub: "Metabolic weight management", dur: "30 min" },
      { ti: "유전자 분석", sub: "Genetic profiling", dur: "60 min" },
      { ti: "암 환자 통합 케어", sub: "Oncology support protocol", dur: "90 min" },
      { ti: "기능의학 IV", sub: "Functional medicine infusion", dur: "60 min" },
    ],
  },
];

function Programs() {
  const [active, setActive] = React.useState(0);
  const p = programData[active];

  return (
    <section className="programs section-pad" id="programs">
      <div className="wrap">
        <div className="section-num">
          <span className="n">— 03</span>
          <span className="label">Programs</span>
        </div>

        <div className="prog-head">
          <h2 style={{ fontSize: "50px" }}>
            진료 <em>프로그램</em>
          </h2>
          <p className="intro-body" style={{ fontSize: 15, maxWidth: 420 }}>
            항노화 기반 성형·피부 진료와 줄기세포 치료를 축으로 구성된 다섯 개의 통합 진료 카테고리입니다.
          </p>
        </div>

        <div className="prog-tabs">
          {programData.map((pd, i) => (
            <button key={pd.id} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
              <span className="n">{pd.n}</span>
              <span>{pd.tab}</span>
            </button>
          ))}
        </div>

        <div className="prog-body">
          <Placeholder
            className="prog-visual"
            light
            label={`${p.tab} · clinical imagery`}
          />
          <div className="prog-text">
            <div className="gold-divider">
              <span className="sym">§</span>
              <span className="line" />
              <span className="small-caps" style={{ color: "var(--gold-deep)" }}>Category {p.n}</span>
            </div>
            <h3>{p.h.split(" ").map((w, i) => i === 1 ? <em key={i}> {w}</em> : <React.Fragment key={i}>{i > 0 ? " " : ""}{w}</React.Fragment>)}</h3>
            <div className="korean">{p.ko}</div>
            <p className="lede">{p.lede}</p>
            <div className="prog-treatments">
              {p.items.map((it, i) => (
                <div className="row" key={i}>
                  <span className="n">— {String(i + 1).padStart(2, "0")}</span>
                  <span className="ti">
                    {it.ti}
                    <small>{it.sub}</small>
                  </span>
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
