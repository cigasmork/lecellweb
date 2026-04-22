const signatureTreatments = [
  { n: "01", ti: "Cellular Therapy", ko: "줄기세포 치료", sub: "피부 · 혈액 · 고압산소 줄기세포" },
  { n: "02", ti: "Reverse-Aging", ko: "리버스에이징 수술", sub: "안면거상 · 인중축소 · 동안 성형" },
  { n: "03", ti: "Laser Lifting", ko: "레이저 리프팅", sub: "울쎄라 · 써마지 · 프락셀" },
  { n: "04", ti: "Skin Booster", ko: "스킨부스터", sub: "리쥬란 · 리바이브 · 레디어스" },
];

function Signature() {
  return (
    <section className="signature" id="signature">
      <div className="wrap">
        <div className="section-num">
          <span className="n">— 02</span>
          <span className="label" style={{ color: "rgba(240,233,217,0.55)" }}>Signature Program</span>
        </div>

        <div className="sig-head">
          <h2 className="sig-title">
            Stem-cell rooted,<br />
            <em>ageless</em> by design.
          </h2>
          <p className="sig-desc">
            르셀청담의 시그니처 프로그램은 줄기세포 치료를 중심으로 항노화·피부 재생·면역 개선을 유기적으로 결합한
            통합 메디컬 케어입니다. 단기 시술을 넘어 개인의 라이프스타일에 맞춘 장기 관리 여정을 설계합니다.
          </p>
        </div>

        <div className="sig-feature">
          <div className="sig-visual">
            <div className="badge">Signature · 01</div>
            <div className="caption">
              <span>Cellular Renewal Program</span>
              <span>duration · 12 weeks</span>
            </div>
          </div>
          <div className="sig-copy">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 20 }}>LeCell Signature Care</div>
              <h3>A program that speaks<br /><em>to your cells.</em></h3>
              <p style={{ marginTop: 24 }}>
                자가 유래 줄기세포와 엑소좀 병행 치료로 피부 깊은 층의 재생과 전신 면역 개선을 동시에
                이끌어냅니다. VVIP 라운지에서 프라이빗하게 진행되며, 의료진과의 심화 상담·진단·관리가
                하나의 여정으로 구성됩니다.
              </p>
            </div>
            <div className="sig-attrs">
              <div className="attr"><div className="k">Consultation</div><div className="v">90분 심층 상담 · 진단</div></div>
              <div className="attr"><div className="k">Method</div><div className="v">자가 줄기세포 · 엑소좀</div></div>
              <div className="attr"><div className="k">Duration</div><div className="v">12주 기준 맞춤 설계</div></div>
              <div className="attr"><div className="k">Lounge</div><div className="v">VVIP Private Suite</div></div>
            </div>
          </div>
        </div>

        <div className="sig-list">
          {signatureTreatments.map((t) => (
            <div className="cell" key={t.n}>
              <div>
                <div className="num">{t.n}</div>
                <div className="ti">{t.ti}</div>
                <div className="sub">{t.ko} · {t.sub}</div>
              </div>
              <div className="arrow">View →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Signature = Signature;
