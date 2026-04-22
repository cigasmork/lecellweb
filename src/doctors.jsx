const doctors = [
  {
    role: "Director · 원장",
    nameKo: "김태륜",
    nameEn: "Kim Tae-Ryun",
    photo: window.__resources?.drKim || "assets/dr-kim.png",
    cv: [
      { tag: "Edu.", line: "고려대학교 의학전문대학원 졸업 · 고대안암병원 전공의 수료" },
      { tag: "Edu.", line: "경희대학교 한의학과 졸업" },
      { tag: "Cert.", line: "의사 · 한의사 복수면허 · 양한방 협진전문의" },
      { tag: "Former", line: "셀피아의원 원장" },
      { tag: "Current", line: "셀이즈랩의원 원장" },
    ],
  },
  {
    role: "Director · 원장",
    nameKo: "나인수",
    nameEn: "Na In-Su",
    photo: window.__resources?.drNa || "assets/dr-na.png",
    cv: [
      { tag: "Edu.", line: "한양대학교 의과대학 졸업" },
      { tag: "Cert.", line: "서울 국립재활병원 재활의학과 전문의" },
      { tag: "Fellow", line: "미국 Stanford대학병원 통증치료센터 연수" },
      { tag: "Fellow", line: "미국 Cenegenics Institute 노화방지 연수 · Partner Physician" },
      { tag: "Former", line: "서대문 나재활의학과 원장 (2003–2021)" },
      { tag: "Former", line: "역삼동 노화방지 전문 Cenegenics Clinic 원장" },
      { tag: "Current", line: "서울 신우신경외과재활의학과 원장 (2021–)" },
      { tag: "Society", line: "대한노화방지학회 설립 총무이사 · 미국노화방지학회 · 대한비만체형의학회" },
    ],
  },
];

function Doctors() {
  return (
    <section className="doctors section-pad" id="doctors">
      <div className="wrap">
        <div className="section-num">
          <span className="n">— 04</span>
          <span className="label">Medical Team</span>
        </div>
        <div className="doctors-head">
          <h2 style={{ fontSize: "50px" }}>
            의료진을 <em>소개합니다</em>
          </h2>
          <p className="intro-body" style={{ fontSize: 16, maxWidth: 560 }}>
            수십 년의 임상 경험을 가진 교수진과 양한방 협진이 가능한 전문의가 한 공간에서
            환자 한 분의 여정을 함께 설계합니다.
          </p>
        </div>

        <div className="doctor-grid">
          {doctors.map((d) => (
            <article className="doctor-card" key={d.nameKo}>
              {d.photo
                ? <img src={d.photo} alt={d.nameEn} className="doctor-portrait" style={{ objectFit: "cover", objectPosition: "top center", background: "var(--ivory-soft)" }} />
                : <Placeholder className="doctor-portrait" light label={`Portrait · ${d.nameEn}`} />
              }
              <div className="doctor-meta">
                <div>
                  <div className="role">{d.role}</div>
                  <div className="name"><span className="ko">{d.nameKo}</span><em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>{d.nameEn}</em></div>
                </div>
                <div className="small-caps">Cheongdam</div>
              </div>
              <ul className="doctor-cv">
                {d.cv.map((c, i) => (
                  <li key={i}>
                    <span className="tag">{c.tag}</span>
                    <span>{c.line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Doctors = Doctors;
