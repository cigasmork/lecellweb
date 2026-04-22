function Location() {
  const t = useLang();
  const l = t.location;

  return (
    <section className="location" id="location">
      <div className="wrap">
        <div className="section-num" style={{ marginBottom: 48 }}>
          <span className="n" style={{ color: "var(--gold)" }}>— 06</span>
          <span className="label" style={{ color: "rgba(240,233,217,0.55)" }}>{l.sectionLabel}</span>
        </div>
        <div className="loc-grid">
          <div>
            <h2>{l.title}<br /><em>{l.titleEm}</em></h2>
            <ul className="loc-info">
              <li><span className="k">{l.addrLabel}</span><span>{l.addr}</span></li>
              <li><span className="k">{l.hoursLabel}</span><span>{l.hours}<br /><span style={{ color: "rgba(240,233,217,0.6)", fontSize: 14 }}>{l.hoursSub}</span></span></li>
              <li><span className="k">{l.reserveLabel}</span><span>{l.reserveVal}</span></li>
              <li><span className="k">{l.valetLabel}</span><span>{l.valetVal}</span></li>
              <li><span className="k">{l.contactLabel}</span><span>02 · 000 · 0000</span></li>
            </ul>
            <a href="#reserve" style={{ display: "inline-block", marginTop: 40, padding: "18px 32px", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>{l.cta}</a>
          </div>
          <div className="loc-map" style={{ padding: 0, border: "1px solid rgba(240,233,217,0.18)", overflow: "hidden" }}>
            <iframe
              title="LeCell Cheongdam Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2794261738013!2d127.0390695763217!3d37.52490992651303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca47820c7ae3d%3A0x8b554706e54d6fb6!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDqsJXrgqjqtawg7LKt64u064-ZIDg5LTIxIDHsuLU!5e0!3m2!1sko!2s!4v1776847615855!5m2!1sko!2s"
              width="100%" height="100%"
              style={{ border: 0, display: "block", width: "100%", height: "100%", minHeight: "400px", filter: "grayscale(20%) sepia(10%)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const t = useLang();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">Le<em>Cell</em></div>
            <div className="foot-brand-sub">{f.sub}</div>
            <p style={{ fontFamily: "var(--ff-serif)", fontSize: 14, color: "var(--ink-muted)", maxWidth: 360, marginTop: 24, lineHeight: 1.8 }}>{f.desc}</p>
          </div>
          <div className="foot-col">
            <h4>{f.exploreTitle}</h4>
            <ul><li>About</li><li>{t.nav.signature}</li><li>{t.nav.programs}</li><li>{t.nav.doctors}</li><li>{t.nav.space}</li></ul>
          </div>
          <div className="foot-col">
            <h4>{f.visitTitle}</h4>
            <ul><li>{t.location.addrLabel}</li><li>{t.location.hoursLabel}</li><li>{t.nav.reserve}</li><li>{t.location.valetLabel}</li></ul>
          </div>
          <div className="foot-col">
            <h4>{f.contactTitle}</h4>
            <ul><li>02 · 000 · 0000</li><li>hello@lecell.kr</li><li>Instagram</li><li>KakaoTalk</li></ul>
          </div>
        </div>
        <div className="foot-rule" />
        <div className="foot-bot">
          <span>{f.copy}</span>
          <span>{f.biz}</span>
        </div>
      </div>
    </footer>
  );
}

window.Location = Location;
window.Footer = Footer;
