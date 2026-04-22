const doctorsData = [
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
    cvEN: [
      { tag: "Edu.", line: "Korea University Graduate School of Medicine · Korea University Anam Hospital residency" },
      { tag: "Edu.", line: "Kyung Hee University, College of Korean Medicine" },
      { tag: "Cert.", line: "Dual-licensed M.D. & Oriental M.D. · Integrative medicine specialist" },
      { tag: "Former", line: "Director, Celpia Clinic" },
      { tag: "Current", line: "Director, Cell Is Lab Clinic" },
    ],
    cvJP: [
      { tag: "学歴", line: "高麗大学大学院医学部卒 · 高麗大学安岩病院研修修了" },
      { tag: "学歴", line: "慶熙大学韓医学部卒" },
      { tag: "資格", line: "医師・韓医師 複数免許 · 東西医学協診専門医" },
      { tag: "前職", line: "セルピアクリニック院長" },
      { tag: "現職", line: "セルイズラボクリニック院長" },
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
      { tag: "Current", line: "서울 신우신경외과재활의학과 원장 (2021–)" },
      { tag: "Society", line: "대한노화방지학회 설립 총무이사 · 미국노화방지학회 · 대한비만체형의학회" },
    ],
    cvEN: [
      { tag: "Edu.", line: "Hanyang University College of Medicine" },
      { tag: "Cert.", line: "Rehabilitation Medicine Specialist, Seoul National Rehabilitation Hospital" },
      { tag: "Fellow", line: "Stanford University Hospital, Pain Management Center" },
      { tag: "Fellow", line: "Cenegenics Institute Anti-Aging Training · Partner Physician" },
      { tag: "Former", line: "Director, Na Rehabilitation Clinic, Seodaemun (2003–2021)" },
      { tag: "Current", line: "Director, Shinwoo Neurosurgery & Rehab, Seoul (2021–)" },
      { tag: "Society", line: "Korean Society of Anti-Aging Medicine (Founding) · American Academy of Anti-Aging Medicine" },
    ],
    cvJP: [
      { tag: "学歴", line: "漢陽大学医科大学卒" },
      { tag: "資格", line: "ソウル国立リハビリテーション病院 リハビリ科専門医" },
      { tag: "研修", line: "米国スタンフォード大学病院 疼痛治療センター研修" },
      { tag: "研修", line: "米国 Cenegenics Institute 抗老化研修 · Partner Physician" },
      { tag: "前職", line: "ナリハビリ整形外科院長 西大門 (2003–2021)" },
      { tag: "現職", line: "ソウル新友神経外科リハビリ院長 (2021–)" },
      { tag: "学会", line: "韓国抗老化医学会 設立 · 米国抗老化医学会 · 韓国肥満体型医学会" },
    ],
  },
];

function Doctors() {
  const t = useLang();
  const d = t.doctors;
  const lang = React.useContext(LangContext);

  const getCv = (doc) => {
    if (lang === "EN") return doc.cvEN;
    if (lang === "JP") return doc.cvJP;
    return doc.cv;
  };

  return (
    <section className="doctors section-pad" id="doctors">
      <div className="wrap">
        <div className="section-num">
          <span className="n">— 04</span>
          <span className="label">{d.sectionLabel}</span>
        </div>
        <div className="doctors-head">
          <h2 style={{ fontSize: "50px" }}>{d.title} <em>{d.titleEm}</em></h2>
          <p className="intro-body" style={{ fontSize: 16, maxWidth: 560 }}>{d.desc}</p>
        </div>
        <div className="doctor-grid">
          {doctorsData.map((doc) => (
            <article className="doctor-card" key={doc.nameKo}>
              <img src={doc.photo} alt={doc.nameEn} className="doctor-portrait"
                style={{ objectFit: "cover", objectPosition: "top center", background: "var(--ivory-soft)" }} />
              <div className="doctor-meta">
                <div>
                  <div className="role">{doc.role}</div>
                  <div className="name">
                    <span className="ko">{doc.nameKo}</span>
                    <em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>{doc.nameEn}</em>
                  </div>
                </div>
                <div className="small-caps">Cheongdam</div>
              </div>
              <ul className="doctor-cv">
                {getCv(doc).map((c, i) => (
                  <li key={i}><span className="tag">{c.tag}</span><span>{c.line}</span></li>
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
