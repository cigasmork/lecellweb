const doctorsData = [
  {
    role: "Chief Director · 대표원장",
    nameKo: "정우송",
    nameEn: "Jung Woo-Song",
    photos: ["assets/dr-jung-1.jpg", "assets/dr-jung-2.jpg"],
    cv: [
      { tag: "Exp.", line: "안면거상·재건 수술 30년 임상 경력" },
      { tag: "Exp.", line: "누적 8,000례 이상 수술 집도" },
      { tag: "Train.", line: "하버드 의과대학 연수 (Harvard Medical School Training)" },
      { tag: "Train.", line: "메이요 클리닉 고급 외과 연수 (Mayo Clinic Advanced Surgical Training)" },
      { tag: "Soc.", line: "미국성형외과학회 정회원 (Member, American Society of Plastic Surgeons, ASPS)" },
      { tag: "Study", line: "카데바 기반 안면 해부학 워크숍 (Cadaver-based Facial Anatomy Workshop)" },
      { tag: "R&D", line: "줄기세포·엑소좀 기반 재생의학 임상 연구 및 적용" },
    ],
    cvEN: [
      { tag: "Exp.", line: "30 years in facelift & reconstructive surgery" },
      { tag: "Exp.", line: "8,000+ surgeries performed" },
      { tag: "Train.", line: "Harvard Medical School Training" },
      { tag: "Train.", line: "Mayo Clinic Advanced Surgical Training" },
      { tag: "Soc.", line: "Member, American Society of Plastic Surgeons (ASPS)" },
      { tag: "Study", line: "Cadaver-based Facial Anatomy Workshop" },
      { tag: "R&D", line: "Clinical research in stem-cell & exosome regenerative medicine" },
    ],
    cvJP: [
      { tag: "経験", line: "フェイスリフト・再建手術 30年の臨床経験" },
      { tag: "経験", line: "累計 8,000例以上の手術執刀" },
      { tag: "研修", line: "ハーバード・メディカル・スクール研修" },
      { tag: "研修", line: "メイヨー・クリニック高度外科研修" },
      { tag: "学会", line: "米国形成外科学会 (ASPS) 会員" },
      { tag: "研究", line: "献体ベース顔面解剖ワークショップ" },
      { tag: "R&D", line: "幹細胞・エクソソーム再生医療の臨床研究・適用" },
    ],
  },
  {
    role: "Director · 원장",
    nameKo: "김태륜",
    nameEn: "Kim Tae-Ryun",
    photos: [window.__resources?.drKim || "assets/dr-kim.png"],
    cv: [
      { tag: "Edu.", line: "고려대학교 의학전문대학원 졸업 · 고대안암병원 전공의 수료" },
      { tag: "Edu.", line: "경희대학교 한의학과 졸업" },
      { tag: "Cert.", line: "의사 · 한의사 복수면허 · 양한방 협진전문의" },
      { tag: "Former", line: "셀피아의원 · 셀이즈랩의원 원장" },
      { tag: "Book", line: "저서 『Skin Deep, Gen Deep: Forever Young』 공저" },
      { tag: "Current", line: "르셀청담 원장" },
    ],
    cvEN: [
      { tag: "Edu.", line: "Korea University Graduate School of Medicine · Korea University Anam Hospital residency" },
      { tag: "Edu.", line: "Kyung Hee University, College of Korean Medicine" },
      { tag: "Cert.", line: "Dual-licensed M.D. & Oriental M.D. · Integrative medicine specialist" },
      { tag: "Former", line: "Director, Celpia Clinic · Cell Is Lab Clinic" },
      { tag: "Book", line: "Co-author, 『Skin Deep, Gen Deep: Forever Young』" },
      { tag: "Current", line: "Director, LeCell Cheongdam" },
    ],
    cvJP: [
      { tag: "学歴", line: "高麗大学大学院医学部卒 · 高麗大学安岩病院研修修了" },
      { tag: "学歴", line: "慶熙大学韓医学部卒" },
      { tag: "資格", line: "医師・韓医師 複数免許 · 東西医学協診専門医" },
      { tag: "前職", line: "セルピアクリニック · セルイズラボクリニック院長" },
      { tag: "著書", line: "『Skin Deep, Gen Deep: Forever Young』 共著" },
      { tag: "現職", line: "ルセル清潭 院長" },
    ],
  },
  {
    role: "Director · 원장",
    nameKo: "정재윤",
    nameEn: "Jung Jae-Yoon",
    photos: [window.__resources?.drJungjae || "assets/dr-jungjae.png"],
    cv: [
      { tag: "Edu.", line: "순천향대학교 의과대학 졸업" },
      { tag: "Cert.", line: "전문의" },
      { tag: "Former", line: "우리들병원 응급의료센터 근무" },
      { tag: "Book", line: "저서 『Skin Deep, Gen Deep: Forever Young』 공저" },
      { tag: "Field", line: "피부 · 항노화 · 정밀진단 · 웰니스 진료" },
      { tag: "Current", line: "르셀청담 원장" },
    ],
    cvEN: [
      { tag: "Edu.", line: "Soonchunhyang University College of Medicine" },
      { tag: "Cert.", line: "Board-Certified Physician" },
      { tag: "Former", line: "Emergency Medical Center, Wooridul Hospital" },
      { tag: "Book", line: "Co-author, 『Skin Deep, Gen Deep: Forever Young』" },
      { tag: "Field", line: "Dermatology · Anti-Aging · Precision Diagnostics · Wellness" },
      { tag: "Current", line: "Director, LeCell Cheongdam" },
    ],
    cvJP: [
      { tag: "学歴", line: "順天郷大学医科大学卒" },
      { tag: "資格", line: "専門医" },
      { tag: "前職", line: "ウリドゥル病院 救急医療センター勤務" },
      { tag: "著書", line: "『Skin Deep, Gen Deep: Forever Young』 共著" },
      { tag: "専門", line: "皮膚 · 抗老化 · 精密診断 · ウェルネス診療" },
      { tag: "現職", line: "ルセル清潭 院長" },
    ],
  },
  {
    role: "Advisory Director · 고문원장",
    nameKo: "이길연",
    nameEn: "Lee Gil-yeon",
    photos: [window.__resources?.drLee || "assets/dr-lee.png"],
    cv: [
      { tag: "Edu.", line: "경희대학교 대학원 의학과 박사 (의학박사)" },
      { tag: "Prof.", line: "경희대학교 의과대학 교수" },
      { tag: "Dir.", line: "경희대학교병원 건강증진센터 소장" },
      { tag: "Former", line: "경희의료원 의과학연구원 부원장 · 외과 과장" },
      { tag: "R&D", line: "디지털 헬스케어 · 정밀의료 기반 맞춤 건강관리 연구" },
      { tag: "Book", line: "저서 『Skin Deep, Gen Deep: Forever Young』 공저" },
    ],
    cvEN: [
      { tag: "Edu.", line: "Ph.D. in Medicine, Kyung Hee University Graduate School" },
      { tag: "Prof.", line: "Professor, Kyung Hee University College of Medicine" },
      { tag: "Dir.", line: "Director, Health Promotion Center, Kyung Hee University Hospital" },
      { tag: "Former", line: "Deputy Director, Kyung Hee Institute of Medical Science · Chief, Dept. of Surgery" },
      { tag: "R&D", line: "Digital healthcare & precision-medicine personalized health management research" },
      { tag: "Book", line: "Co-author, 『Skin Deep, Gen Deep: Forever Young』" },
    ],
    cvJP: [
      { tag: "学歴", line: "慶熙大学大学院医学科 博士 (医学博士)" },
      { tag: "教授", line: "慶熙大学医科大学 教授" },
      { tag: "役職", line: "慶熙大学病院 健康増進センター 所長" },
      { tag: "前職", line: "慶熙医療院 医科学研究院 副院長 · 外科 科長" },
      { tag: "R&D", line: "デジタルヘルスケア · 精密医療ベースのカスタム健康管理研究" },
      { tag: "著書", line: "『Skin Deep, Gen Deep: Forever Young』 共著" },
    ],
  },
];

const promoTextByLang = {
  KR: "한국 최고의 거상명의와 함께하는 항노화 전문 의료진",
  EN: "Anti-aging specialists redefining the standard in Cheongdam",
  JP: "清潭の新しい基準を提示する抗老化専門医師団",
};

const specialtyLabelByLang = {
  KR: "전문 분야",
  EN: "Specialties",
  JP: "専門分野",
};

function Doctors() {
  const t = useLang();
  const d = t.doctors;
  const lang = React.useContext(LangContext);
  const [idx, setIdx] = React.useState(0);
  const total = doctorsData.length;

  const doc = doctorsData[idx];
  const getCv = (doc) => lang === "EN" ? doc.cvEN : lang === "JP" ? doc.cvJP : doc.cv;
  const getTitle = (doc) => lang === "EN" ? doc.titleEn : lang === "JP" ? doc.titleJp : doc.title;
  const getBlurb = (doc) => lang === "EN" ? doc.blurbEn : lang === "JP" ? doc.blurbJp : doc.blurb;
  const getHighlights = (doc) => lang === "EN" ? doc.highlightsEn : lang === "JP" ? doc.highlightsJp : doc.highlights;
  const getSpecialties = (doc) => lang === "EN" ? doc.specialtiesEn : lang === "JP" ? doc.specialtiesJp : doc.specialties;

  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  // Photo carousel within a single doctor
  const [photoIdx, setPhotoIdx] = React.useState(0);
  React.useEffect(() => {
    setPhotoIdx(0);
    if ((doc.photos || []).length <= 1) return;
    const t = setInterval(() => {
      setPhotoIdx(p => (p + 1) % doc.photos.length);
    }, 3500);
    return () => clearInterval(t);
  }, [idx]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hasFeature = !!doc.title;
  const photos = doc.photos || [];

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

        {/* Promo line */}
        <div style={{
          display: "flex", alignItems: "center", gap: 20,
          padding: "28px 0", margin: "24px 0 48px",
          borderTop: "1px solid rgba(27,25,21,0.12)",
          borderBottom: "1px solid rgba(27,25,21,0.12)",
        }}>
          <span style={{
            fontFamily: "var(--ff-mono)", fontSize: 11,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold-deep)", whiteSpace: "nowrap",
          }}>— Featured</span>
          <span style={{ flex: 1, height: 1, background: "rgba(27,25,21,0.12)" }} />
          <span style={{
            fontFamily: "var(--ff-serif)", fontSize: 18, fontStyle: "italic",
            color: "var(--ink)", letterSpacing: "-0.01em",
          }}>{promoTextByLang[lang] || promoTextByLang.KR}</span>
        </div>

        {/* Slider */}
        <div style={{ position: "relative", userSelect: "none" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr",
            gap: 28, alignItems: "stretch",
            transition: "transform 0.4s ease",
            maxWidth: 980,
            margin: "0 auto",
          }} className="doctor-slide-grid">
            {/* Left: portrait (crossfade between photos) */}
            <div style={{
              position: "relative", aspectRatio: "4/5",
              background: "var(--ivory-soft)", overflow: "hidden",
              maxWidth: 560,
              width: "100%",
              margin: "0 auto",
            }}>
              {photos.map((src, i) => (
                <img key={src} src={src} alt={doc.nameEn}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "top center",
                    display: "block",
                    opacity: i === photoIdx ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                />
              ))}
              <button
                type="button"
                className="doctor-nav-btn"
                aria-label="Previous doctor"
                onClick={prev}
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.8)",
                  background: "rgba(27,25,21,0.45)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  backdropFilter: "blur(6px)",
                  zIndex: 3,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="doctor-nav-btn"
                aria-label="Next doctor"
                onClick={next}
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.8)",
                  background: "rgba(27,25,21,0.45)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  backdropFilter: "blur(6px)",
                  zIndex: 3,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <div style={{
                position: "absolute", top: 24, left: 24,
                fontFamily: "var(--ff-mono)", fontSize: 10,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(27,25,21,0.5)",
                padding: "6px 12px", backdropFilter: "blur(8px)",
              }}>{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>

              {/* Photo dots */}
              {photos.length > 1 && (
                <div style={{
                  position: "absolute", bottom: 20, left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex", gap: 8,
                }}>
                  {photos.map((_, i) => (
                    <span key={i}
                      style={{
                        width: i === photoIdx ? 20 : 6, height: 6,
                        borderRadius: 3,
                        background: i === photoIdx ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: bio */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8px 0" }}>
              <div>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontFamily: "var(--ff-mono)", fontSize: 10,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "var(--ink-muted)", marginBottom: 20,
                }}>
                  <span>{doc.role}</span>
                  <span>Cheongdam</span>
                </div>

                {/* Honorary title badge */}
                {hasFeature && (
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "8px 14px",
                    border: "1px solid var(--gold-deep)",
                    color: "var(--gold-deep)",
                    fontFamily: "var(--ff-serif)", fontSize: 13, fontStyle: "italic",
                    letterSpacing: "-0.01em",
                    marginBottom: 18,
                    background: "rgba(180,142,90,0.06)",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/>
                    </svg>
                    <span>{getTitle(doc)}</span>
                  </div>
                )}

                <div style={{
                  fontFamily: "var(--ff-serif)", fontSize: 44, fontWeight: 300,
                  lineHeight: 1.1, color: "var(--ink)",
                  paddingBottom: 20, borderBottom: "1px solid rgba(27,25,21,0.15)",
                  textAlign: "center",
                }}>
                  <span>{doc.nameKo}</span>{" "}
                  <em style={{ fontStyle: "italic", color: "var(--gold-deep)", fontSize: 36 }}>
                    {doc.nameEn}
                  </em>
                </div>

                {/* Blurb */}
                {hasFeature && (
                  <p style={{
                    fontFamily: "var(--ff-serif)", fontSize: 14.5, lineHeight: 1.75,
                    color: "var(--ink)", margin: "22px 0 0",
                    maxWidth: 760,
                    whiteSpace: "pre-line",
                  }}>
                    {getBlurb(doc)}
                  </p>
                )}

                {/* Highlights row */}
                {hasFeature && (
                  <div style={{
                    display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16, marginTop: 26,
                    padding: "20px 0",
                    borderTop: "1px solid rgba(27,25,21,0.12)",
                    borderBottom: "1px solid rgba(27,25,21,0.12)",
                  }}>
                    {getHighlights(doc).map((h, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <div style={{
                          fontFamily: "var(--ff-serif)", fontSize: 28, fontWeight: 300,
                          color: "var(--gold-deep)", lineHeight: 1,
                        }}>{h.num}</div>
                        <div style={{
                          fontFamily: "var(--ff-mono)", fontSize: 9,
                          letterSpacing: "0.18em", textTransform: "uppercase",
                          color: "var(--ink-muted)",
                        }}>{h.unit}</div>
                        <div style={{ fontFamily: "var(--ff-serif)", fontSize: 12, color: "var(--ink)", marginTop: 2 }}>
                          {h.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <ul style={{
                  listStyle: "none", padding: 0, margin: hasFeature ? "22px 0 0" : "28px 0 0",
                  display: "flex", flexDirection: "column", gap: 12,
                }}>
                  {getCv(doc).map((c, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 16, fontFamily: "var(--ff-serif)", fontSize: 14, color: "var(--ink)", lineHeight: 1.6 }}>
                      <span style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-deep)", paddingTop: 3 }}>{c.tag}</span>
                      <span>{c.line}</span>
                    </li>
                  ))}
                </ul>

                {/* Specialties */}
                {hasFeature && (
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(27,25,21,0.12)" }}>
                    <div style={{
                      fontFamily: "var(--ff-mono)", fontSize: 10,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                      color: "var(--ink-muted)", marginBottom: 12,
                    }}>— {specialtyLabelByLang[lang] || specialtyLabelByLang.KR}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {getSpecialties(doc).map((s, i) => (
                        <span key={i} style={{
                          padding: "6px 12px",
                          border: "1px solid rgba(27,25,21,0.2)",
                          fontFamily: "var(--ff-serif)", fontSize: 12,
                          color: "var(--ink)",
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Drag hint + indicator */}
              <div style={{
                display: "flex", alignItems: "center", gap: 20,
                marginTop: 40, paddingTop: 20,
                borderTop: "1px solid rgba(27,25,21,0.12)",
                fontFamily: "var(--ff-mono)", fontSize: 10,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--ink-muted)",
              }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="22" height="14" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <line x1="2" y1="7" x2="22" y2="7"/>
                    <polyline points="6 3 2 7 6 11"/>
                    <polyline points="18 3 22 7 18 11"/>
                  </svg>
                  <span>Use Buttons · ← →</span>
                </span>
                <div style={{ flex: 1, display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  {doctorsData.map((_, i) => (
                    <button key={i} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`}
                      style={{
                        width: idx === i ? 28 : 8, height: 2,
                        background: idx === i ? "var(--gold-deep)" : "rgba(27,25,21,0.25)",
                        border: 0, padding: 0, cursor: "pointer",
                        transition: "width 0.3s ease, background 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Doctors = Doctors;
