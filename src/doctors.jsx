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
    photos: [window.__resources?.drNa || "assets/dr-na.png"],
    cv: [
      { tag: "Edu.", line: "한양대학교 의과대학 졸업" },
      { tag: "Cert.", line: "서울국립재활병원 재활의학과 전문의" },
      { tag: "Fellow", line: "미국 스탠퍼드대학병원 통증치료센터 연수 (Stanford University Hospital, Pain Management Center)" },
      { tag: "Fellow", line: "미국 시네제닉스 인스티튜트 노화방지 연수 · 파트너 닥터 (Cenegenics Institute Anti-Aging Training · Partner Physician)" },
      { tag: "Former", line: "서대문 나재활의학과 원장 (2003–2021)" },
      { tag: "Current", line: "서울 신우신경외과재활의학과 원장 (2021–)" },
      { tag: "Society", line: "대한노화방지학회 설립 총무이사 · 미국노화방지학회(A4M) · 대한비만체형의학회" },
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
      { tag: "研修", line: "米国シネジェニクス研究所 抗老化研修 · パートナー医師" },
      { tag: "前職", line: "西大門 ナリハビリテーション医学科院長 (2003–2021)" },
      { tag: "現職", line: "ソウル新友神経外科リハビリ院長 (2021–)" },
      { tag: "学会", line: "韓国抗老化医学会 設立総務理事 · 米国抗老化医学会(A4M) · 韓国肥満体型医学会" },
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

  // Drag / swipe gesture
  const dragState = React.useRef({ active: false, startX: 0, dx: 0 });
  const [dragOffset, setDragOffset] = React.useState(0);

  const onPointerDown = (e) => {
    dragState.current = { active: true, startX: e.clientX, dx: 0 };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    dragState.current.dx = dx;
    setDragOffset(dx);
  };
  const onPointerUp = () => {
    if (!dragState.current.active) return;
    const dx = dragState.current.dx;
    dragState.current.active = false;
    setDragOffset(0);
    if (Math.abs(dx) > 80) {
      if (dx < 0) next(); else prev();
    }
  };

  const wheelLock = React.useRef(0);
  const onWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : 0;
    if (Math.abs(delta) < 20) return;
    const now = Date.now();
    if (now - wheelLock.current < 600) return;
    wheelLock.current = now;
    if (delta > 0) next(); else prev();
  };

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
        <div
          style={{ position: "relative", touchAction: "pan-y", cursor: dragState.current.active ? "grabbing" : "grab", userSelect: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={onWheel}
        >
          <div style={{
            display: "grid", gridTemplateColumns: "1fr",
            gap: 28, alignItems: "stretch",
            transform: `translateX(${dragOffset * 0.3}px)`,
            transition: dragState.current.active ? "none" : "transform 0.4s ease",
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
                  <span>Drag · Swipe · ← →</span>
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
