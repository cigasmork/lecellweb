function SpaceSection() {
  return (
    <section className="space section-pad" id="space">
      <div className="wrap">
        <div className="space-head">
          <div className="section-num" style={{ justifyContent: "center" }}>
            <span className="n">— 05</span>
            <span className="label">The Space</span>
          </div>
          <h2>청담동에 새긴 <em>공간의 품격</em></h2>
          <p>
            VVIP 라운지와 프라이빗 시술실, 발렛파킹 서비스가 갖춰진 예약제 전용 공간에서<br />한 분의 여정만을 위한 시간을 설계합니다.
          </p>
        </div>

        <div className="space-grid">
          <div className="a" style={{ position: "relative", overflow: "hidden" }}>
            <img src={window.__resources?.space1 || "assets/space-1.png"} alt="Reception" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span className="space-tag">01 · Reception</span>
          </div>
          <div className="b" style={{ position: "relative", overflow: "hidden" }}>
            <img src={window.__resources?.space2 || "assets/space-2.png"} alt="VVIP Lounge" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span className="space-tag">02 · VVIP Lounge</span>
          </div>
          <div className="c" style={{ position: "relative", overflow: "hidden" }}>
            <img src={window.__resources?.space3 || "assets/space-3.jpg"} alt="Consult" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span className="space-tag">03 · Consult</span>
          </div>
          <div className="d" style={{ position: "relative", overflow: "hidden" }}>
            <img src={window.__resources?.space4 || "assets/space-4.jpg"} alt="Treatment Suite" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span className="space-tag">04 · Suite</span>
          </div>
          <div className="e" style={{ position: "relative", overflow: "hidden" }}>
            <img src={window.__resources?.space5 || "assets/space-5.png"} alt="Recovery" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span className="space-tag">05 · Recovery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.SpaceSection = SpaceSection;
