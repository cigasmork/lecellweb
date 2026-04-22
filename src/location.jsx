function Location() {
  return (
    <section className="location" id="location">
      <div className="wrap">
        <div className="section-num" style={{ marginBottom: 48 }}>
          <span className="n" style={{ color: "var(--gold)" }}>— 06</span>
          <span className="label" style={{ color: "rgba(240,233,217,0.55)" }}>Visit</span>
        </div>
        <div className="loc-grid">
          <div>
            <h2>
              당신을 위한<br /><em>프라이빗 진료</em>
            </h2>
            <ul className="loc-info">
              <li><span className="k">Address</span><span>서울특별시 강남구 청담동 89-21, 1층</span></li>
              <li><span className="k">Hours</span><span>월 — 금 · 10:00 — 19:00<br /><span style={{ color: "rgba(240,233,217,0.6)", fontSize: 14 }}>토요일 협의 · 일요일 휴무</span></span></li>
              <li><span className="k">Reserve</span><span>예약제 중심 운영 · 워크인 병행</span></li>
              <li><span className="k">Valet</span><span>발렛파킹 · VVIP 전용 동선</span></li>
              <li><span className="k">Contact</span><span>02 · 000 · 0000</span></li>
            </ul>
            <a href="#reserve" style={{ display: "inline-block", marginTop: 40, padding: "18px 32px", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>Request Appointment →</a>
          </div>

          <div className="loc-map">
            <div className="pin">
              <div className="dot" />
              <div className="lbl">LeCell · Cheongdam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">Le<em>Cell</em></div>
            <div className="foot-brand-sub">Cheongdam · 청담 · Seoul</div>
            <p style={{ fontFamily: "var(--ff-serif)", fontSize: 14, color: "var(--ink-muted)", maxWidth: 360, marginTop: 24, lineHeight: 1.8 }}>
              항노화 기반 성형·피부과와 줄기세포 치료의 메디컬 케어.
              프라이빗한 공간에서 당신만을 위한 여정을 설계합니다.
            </p>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <ul>
              <li>About</li><li>Signature</li><li>Programs</li><li>Doctors</li><li>Space</li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Visit</h4>
            <ul>
              <li>Address</li><li>Hours</li><li>Reservation</li><li>Valet</li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li>02 · 000 · 0000</li><li>hello@lecell.kr</li><li>Instagram</li><li>KakaoTalk</li>
            </ul>
          </div>
        </div>
        <div className="foot-rule" />
        <div className="foot-bot">
          <span>© 2026 LeCell Cheongdam Clinic. All rights reserved.</span>
          <span>사업자번호 000-00-00000 · 대표 김태륜</span>
        </div>
      </div>
    </footer>
  );
}

window.Location = Location;
window.Footer = Footer;
