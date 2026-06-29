const TRANSLATIONS = {
  KR: {
    nav: {
      about: "About",
      signature: "Signature",
      programs: "Programs",
      doctors: "Doctors",
      space: "Space",
      location: "Location",
      reserve: "예약하기",
    },
    hero: {
      eyebrow: "Anti-Aging · Stem Cell · Cheongdam",
      est: "est. 2026 · seoul",
      headline1: "The art of",
      headline2: "cellular renewal.",
      sub: "시간의 흐름을 거스르기보다,\n아름답게 다듬어가는\n르셀 청담의 프리미엄 안티에이징 케어",
      addrLabel: "Address",
      addr: "서울 강남구 청담동 89–21",
      hoursLabel: "Hours",
      hours: "Mon–Fri 10:00 — 19:00",
      careLabel: "Care",
      care: "By appointment only",
      scroll: "Scroll",
    },
    about: {
      sectionLabel: "About LeCell",
      title1: "Beauty",
      title2: "beyond time.",
      p1: "거울 앞에서 문득, 시간이 남긴 변화를 마주하는 순간이 있습니다. 노화는 피부 한 곳의 문제가 아니라 얼굴선과 컨디션 전체에 스며드는 흐름입니다. 그래서 같은 고민이라도 그 해법은 사람마다 다를 수밖에 없습니다.",
      p2: "르셀청담은 그 변화를 한 사람의 이야기로 읽는 데서 시작합니다. 2026년 서울 청담에서 시작한 프리미엄 메디컬 에스테틱으로, 정밀한 상담과 검사를 바탕으로 피부와 모발, 몸 전체의 컨디션을 함께 살피며 개인에게 맞는 케어의 흐름을 설계합니다.",
      p3: "개인의 피부 특성과 노화 유형을 분석하고, 모든 시술을 담당 의료진이 직접 진행합니다. 표준화된 시술이 아니라 한 사람만을 위한 프라이빗 맞춤 케어 — 그것이 르셀청담이 시간을 대하는 방식입니다.",
    },
    signature: {
      sectionLabel: "Signature Program",
      title1: "Stem-cell rooted,",
      title2: "ageless by design.",
      desc: "르셀청담의 시그니처는 줄기세포·혈액 재생을 중심으로 탄력·윤곽·피부 컨디션을 단계로 설계한 통합 케어입니다. 단품의 단순한 합이 아니라, 서로 다른 깊이의 케어를 하나의 흐름으로 묶어 개인의 여정을 설계합니다.",
      eyebrow: "LeCell Signature Care",
      featureTitle1: "A program that speaks",
      featureTitle2: "to your cells.",
      featureDesc: "타임리스 360은 서로 다른 깊이에 작용하는 장비와 부스터, 자가 유래 케어를 단계로 묶어 설계한 르셀의 대표 라인입니다. 초음파(ULTHERA)와 RF(THERMAGE) 탄력 케어를 기본으로, 등급에 따라 콜라겐 부스터·자가 유래 케어까지 확장하며 VVIP 라운지에서 프라이빗하게 진행됩니다.",
      attrs: { consult: "원장 직접 상담 · 정밀 분석", method: "자가 줄기세포 · PRP · 엑소좀", duration: "등급별 단계 코스 설계", lounge: "VVIP Private Suite" },
      view: "View →",
      treatments: [
        { n: "01", ti: "Timeless 360", ko: "타임리스 360", sub: "초음파 · RF · 부스터 단계 설계" },
        { n: "02", ti: "Secret Rejuvenation", ko: "시크릿 리쥬버네이션 사이클", sub: "전신 컨디션 3단계 통합 케어" },
        { n: "03", ti: "4-Layer Lifting", ko: "프리미엄 4-레이어 리프팅", sub: "피부 층별 프리미엄 리프팅" },
        { n: "04", ti: "Longevity Recovery", ko: "롱제비티 리커버리", sub: "자가 혈액 기반 재생 케어" },
      ],
    },
    programs: {
      sectionLabel: "Programs",
      title: "시술 프로그램",
      titleEm: "프로그램",
      desc: "줄기세포·혈액 재생을 축으로 리프팅·윤곽, 스킨부스터, 보톡스 디자인, 시그니처 패키지까지 — 르셀청담의 통합 시술 라인입니다.",
      data: [
        { id: "stemcell", n: "01", tab: "줄기세포·혈액", h: "Stem Cell", hEm: "& Longevity", ko: "줄기세포 · 혈액 재생", lede: "혈액·골수·지방에서 유래한 자가 세포 자원을 활용해 피부와 컨디션의 회복 환경을 돕는 재생 케어 라인입니다. 용량과 회차에 따라 단계적으로 설계합니다.", items: [{ ti: "Longevity Recovery", sub: "롱제비티 리커버리 · 자가 혈액 기반 회복", dur: "60–90 min" }, { ti: "Longevity Prime P", sub: "롱제비티 프라임 P · PRP 피부·두피 케어", dur: "60 min" }, { ti: "Cellules de Moelle", sub: "셀룰 드 무엘 · 골수 유래 재생", dur: "90 min" }, { ti: "Plasma Reset", sub: "플라즈마 리셋 · 혈장 교환 컨디션 케어", dur: "반일" }] },
        { id: "lift", n: "02", tab: "리프팅·윤곽", h: "Sculpture du", hEm: "Visage", ko: "리프팅 · 윤곽", lede: "작용 깊이가 다른 장비 기반 탄력 케어와 부위별 주사 윤곽 밸런싱을 함께 다루는 라인입니다. 탄력과 얼굴선을 각각의 관점에서 살핍니다.", items: [{ ti: "Lifting Ultra", sub: "리프팅 울트라 · 고강도 집속 초음파(HIFU)", dur: "60 min" }, { ti: "Lifting Therma", sub: "리프팅 써마 · RF 진피 가온(써마지 FLX)", dur: "60 min" }, { ti: "Contour Fit", sub: "콘투어 핏 · 부위별 윤곽 밸런싱", dur: "30 min" }, { ti: "Menton Élégant", sub: "멍통 엘레강 콘투어 · 턱선 라인 정돈", dur: "20 min" }] },
        { id: "laser", n: "03", tab: "시그니처", h: "Signature", hEm: "Packages", ko: "르셀 시그니처 패키지", lede: "탄력·윤곽·피부 컨디션을 단계로 설계한 대표 복합 패키지입니다. 서로 다른 깊이와 방식의 케어를 하나의 흐름으로 묶었습니다.", items: [{ ti: "Timeless 360", sub: "타임리스 360 · 초음파·RF·부스터 단계 설계", dur: "60–120 min" }, { ti: "Premium 4-Layer Lifting", sub: "프리미엄 4-레이어 리프팅 · 피부 층별 구성", dur: "상담 설계" }, { ti: "Secret Rejuvenation Cycle", sub: "시크릿 리쥬버네이션 · 전신 3단계 통합", dur: "사이클 설계" }, { ti: "Soin Floraison", sub: "스왕 플로레종 · 수술 전후 회복 케어", dur: "수술 연계" }] },
        { id: "booster", n: "04", tab: "스킨부스터", h: "Booster de", hEm: "Régénération", ko: "스킨부스터 · 피부 재생", lede: "피부 속 수분·결·탄력 환경을 돕는 주사 기반 부스터 라인입니다. 표면에 더하기보다 진피 속 환경을 정돈하는 관점으로 접근합니다.", items: [{ ti: "Rejuran Skin Booster", sub: "리쥬란 스킨부스터 · 연어 DNA 유래 PN", dur: "30 min" }, { ti: "Rejuran HB", sub: "리쥬란 HB · 수분 케어 추가", dur: "30 min" }, { ti: "Restylane Skin Booster", sub: "레스틸렌 스킨부스터 · HA 수분·결 케어", dur: "30 min" }, { ti: "Éclat Melasma", sub: "에클라 멜라스마 · 피부 톤·색소 케어", dur: "15 min" }] },
        { id: "wellness", n: "05", tab: "보톡스", h: "Sculpting", hEm: "au Botox", ko: "보톡스 · 윤곽 디자인", lede: "보툴리눔 톡신 제제를 부위별 근육 밸런스에 맞춰 미세하게 설계하는 라인입니다. 부위별 근육의 역할과 균형을 함께 고려합니다.", items: [{ ti: "Botox du Visage", sub: "보톡스 뒤 비자지 · 스킨보톡스(결·모공)", dur: "15–20 min" }, { ti: "Ligne du Menton", sub: "린뉴 뒤 멍통 · 사각턱·침샘", dur: "10 min" }, { ti: "Botox Délicat", sub: "보톡스 델리카 · 눈가·미간·입꼬리", dur: "10 min" }, { ti: "Ligne d'Épaule", sub: "린뉴 데폴 · 승모근 라인", dur: "10–15 min" }] },
      ],
    },
    doctors: {
      sectionLabel: "Medical Team",
      title: "의료진을",
      titleEm: "소개합니다",
      desc: "수십 년의 임상 경험을 가진 교수진과 양한방 협진이 가능한 전문의가 한 공간에서 환자 한 분의 여정을 함께 설계합니다.",
    },
    space: {
      sectionLabel: "The Space",
      title: "청담동에 새긴",
      titleEm: "공간의 품격",
      desc: "VVIP 라운지와 프라이빗 시술실, 발렛파킹 서비스가 갖춰진 예약제 전용 공간에서\n한 분의 여정만을 위한 시간을 설계합니다.",
      tags: ["01 · Reception", "02 · VVIP Lounge", "03 · Consult", "04 · Suite", "05 · Recovery"],
    },
    location: {
      sectionLabel: "Visit",
      title: "당신을 위한",
      titleEm: "프라이빗 진료",
      addrLabel: "Address", addr: "서울특별시 강남구 청담동 89-21, 1층",
      hoursLabel: "Hours", hours: "월 — 금 · 10:00 — 19:00", hoursSub: "토 · 10:00 — 16:00 · 일·공휴일 휴무",
      reserveLabel: "Reserve", reserveVal: "카카오톡 @르셀청담 · 예약제 운영",
      valetLabel: "Access", valetVal: "발렛파킹 · 7호선 청담역 13번 출구 도보 3분",
      contactLabel: "Contact",
      cta: "예약 문의하기 →",
    },
    footer: {
      sub: "Cheongdam · 청담 · Seoul",
      desc: "항노화 기반 성형·피부과와 줄기세포 치료의 메디컬 케어. 프라이빗한 공간에서 당신만을 위한 여정을 설계합니다.",
      exploreTitle: "Explore",
      visitTitle: "Visit",
      contactTitle: "Contact",
      copy: "© 2026 LeCell Clinic Cheongdam · Genova Group · All Rights Reserved.",
      biz: "사업자번호 000-00-00000 · 대표 김태륜",
    },
  },

  EN: {
    nav: { about: "About", signature: "Signature", programs: "Programs", doctors: "Doctors", space: "Space", location: "Location", reserve: "Reserve" },
    hero: { eyebrow: "Anti-Aging · Stem Cell · Cheongdam", est: "est. 2026 · seoul", headline1: "The art of", headline2: "cellular renewal.", sub: "Not reversing time,\nbut refining it beautifully.\nLeCell Cheongdam's premium anti-aging care.", addrLabel: "Address", addr: "Cheongdamdong 89–21, Gangnam", hoursLabel: "Hours", hours: "Mon–Fri 10:00 — 19:00", careLabel: "Care", care: "By appointment only", scroll: "Scroll" },
    about: { sectionLabel: "About LeCell", title1: "Beauty", title2: "beyond time.", p1: "Sometimes, before the mirror, we meet the changes time has left behind. Aging is not a matter of one spot on the skin but a current that runs through the whole face and condition — so even the same concern calls for a different answer for each person.", p2: "LeCell Cheongdam begins by reading that change as one person's story. As a premium medical aesthetic founded in Cheongdam, Seoul in 2026, we examine the skin, hair, and whole-body condition together through precise consultation and diagnostics, designing a flow of care suited to each individual.", p3: "We analyze each person's skin characteristics and aging type, and every procedure is performed directly by the attending medical team. Not standardized treatment, but private, tailored care for one person alone — that is how LeCell Cheongdam approaches time." },
    signature: { sectionLabel: "Signature Program", title1: "Stem-cell rooted,", title2: "ageless by design.", desc: "Our signature line centers on stem-cell and blood-based regeneration, designing elasticity, contour, and skin condition as one staged journey — not a simple sum of single treatments, but different depths of care woven into a single flow.", eyebrow: "LeCell Signature Care", featureTitle1: "A program that speaks", featureTitle2: "to your cells.", featureDesc: "Timeless 360 is our flagship line, weaving devices of differing depths, boosters, and autologous-derived care into staged programs. Built on ultrasound (ULTHERA) and RF (THERMAGE) firming, it expands by tier to collagen boosters and autologous care, conducted privately in our VVIP lounge.", attrs: { consult: "Director-led consultation · diagnostics", method: "Autologous stem cell · PRP · Exosome", duration: "Tiered, staged course design", lounge: "VVIP Private Suite" }, view: "View →",
      treatments: [{ n: "01", ti: "Timeless 360", ko: "Signature Package", sub: "Ultrasound · RF · Booster staging" }, { n: "02", ti: "Secret Rejuvenation", ko: "Rejuvenation Cycle", sub: "3-step whole-body condition care" }, { n: "03", ti: "4-Layer Lifting", ko: "Premium Lifting", sub: "Layer-by-layer premium lifting" }, { n: "04", ti: "Longevity Recovery", ko: "Blood-based Care", sub: "Autologous blood regeneration" }] },
    programs: { sectionLabel: "Programs", title: "Treatment", titleEm: "Programs", desc: "From stem-cell and blood-based regeneration to lifting & contour, skin boosters, botox design, and signature packages — LeCell Cheongdam's integrated treatment line.", data: [
      { id: "stemcell", n: "01", tab: "Stem Cell", h: "Stem Cell", hEm: "& Longevity", ko: "Stem Cell & Longevity", lede: "A regenerative line using autologous cell resources derived from blood, marrow, and fat to support the skin and the body's recovery environment, designed in stages by dose and session.", items: [{ ti: "Longevity Recovery", sub: "Autologous blood-based recovery", dur: "60–90 min" }, { ti: "Longevity Prime P", sub: "PRP skin & scalp care", dur: "60 min" }, { ti: "Cellules de Moelle", sub: "Marrow-derived regeneration", dur: "90 min" }, { ti: "Plasma Reset", sub: "Plasma-exchange condition care", dur: "Half-day" }] },
      { id: "lift", n: "02", tab: "Lifting & Contour", h: "Sculpture du", hEm: "Visage", ko: "Sculpture du Visage", lede: "A line pairing device-based firming at varying depths with region-specific injectable contour balancing, caring for elasticity and facial lines each on their own terms.", items: [{ ti: "Lifting Ultra", sub: "High-intensity focused ultrasound (HIFU)", dur: "60 min" }, { ti: "Lifting Therma", sub: "RF dermal heating (Thermage FLX)", dur: "60 min" }, { ti: "Contour Fit", sub: "Region-based contour balancing", dur: "30 min" }, { ti: "Menton Élégant", sub: "Jawline refinement", dur: "20 min" }] },
      { id: "laser", n: "03", tab: "Signature", h: "Signature", hEm: "Packages", ko: "Le Cell Signature Packages", lede: "Our flagship combination packages, staging elasticity, contour, and skin condition — different depths and methods woven into a single flow.", items: [{ ti: "Timeless 360", sub: "Ultrasound · RF · booster staging", dur: "60–120 min" }, { ti: "Premium 4-Layer Lifting", sub: "Layer-by-layer composition", dur: "By consultation" }, { ti: "Secret Rejuvenation", sub: "3-step whole-body integration", dur: "Cycle design" }, { ti: "Soin Floraison", sub: "Pre/post-surgery recovery care", dur: "Surgery-linked" }] },
      { id: "booster", n: "04", tab: "Skin Booster", h: "Booster de", hEm: "Régénération", ko: "Booster de Régénération", lede: "An injectable booster line supporting the skin's inner moisture, texture, and elasticity environment — restoring the dermal environment rather than adding to the surface.", items: [{ ti: "Rejuran Skin Booster", sub: "Salmon-DNA polynucleotide (PN)", dur: "30 min" }, { ti: "Rejuran HB", sub: "Added hydration care", dur: "30 min" }, { ti: "Restylane Skin Booster", sub: "HA moisture & texture care", dur: "30 min" }, { ti: "Éclat Melasma", sub: "Skin tone & pigment care", dur: "15 min" }] },
      { id: "wellness", n: "05", tab: "Botox", h: "Sculpting", hEm: "au Botox", ko: "Sculpting au Botox", lede: "A line designing botulinum toxin finely to each region's muscle balance, considering the role and balance of muscles by area.", items: [{ ti: "Botox du Visage", sub: "Skin botox (texture & pores)", dur: "15–20 min" }, { ti: "Ligne du Menton", sub: "Jaw & salivary gland", dur: "10 min" }, { ti: "Botox Délicat", sub: "Eyes · glabella · mouth corners", dur: "10 min" }, { ti: "Ligne d'Épaule", sub: "Trapezius line", dur: "10–15 min" }] },
    ] },
    doctors: { sectionLabel: "Medical Team", title: "Meet our", titleEm: "Doctors", desc: "Faculty with decades of clinical experience and dual-licensed specialists work together in one space to craft each patient's unique care journey." },
    space: { sectionLabel: "The Space", title: "A space etched", titleEm: "in Cheongdam", desc: "In our appointment-only space with VVIP lounge, private treatment suites, and valet parking, we design time dedicated solely to your journey.", tags: ["01 · Reception", "02 · VVIP Lounge", "03 · Consult", "04 · Suite", "05 · Recovery"] },
    location: { sectionLabel: "Visit", title: "Private care,", titleEm: "for you", addrLabel: "Address", addr: "89-21 Cheongdamdong, Gangnam-gu, Seoul, 1F", hoursLabel: "Hours", hours: "Mon – Fri · 10:00 — 19:00", hoursSub: "Sat · 10:00 — 16:00 · Sun & holidays closed", reserveLabel: "Reserve", reserveVal: "KakaoTalk @르셀청담 · By appointment", valetLabel: "Access", valetVal: "Valet parking · Cheongdam Stn. Exit 13, 3-min walk", contactLabel: "Contact", cta: "Request Appointment →" },
    footer: { sub: "Cheongdam · Seoul · Korea", desc: "Premium anti-aging aesthetics and stem cell therapy. A personalized high-end medical care journey, in a private Cheongdam space.", exploreTitle: "Explore", visitTitle: "Visit", contactTitle: "Contact", copy: "© 2026 LeCell Clinic Cheongdam · Genova Group · All Rights Reserved.", biz: "CEO: Kim Tae-Ryun" },
  },

  JP: {
    nav: { about: "About", signature: "シグネチャー", programs: "プログラム", doctors: "医師紹介", space: "空間", location: "アクセス", reserve: "ご予約" },
    hero: { eyebrow: "アンチエイジング · 幹細胞 · 清潭", est: "est. 2026 · seoul", headline1: "The art of", headline2: "cellular renewal.", sub: "時間の流れに逆らうのではなく、\n美しく磨き上げていく。\nルセル清潭のプレミアムアンチエイジングケア", addrLabel: "住所", addr: "清潭洞89–21, 江南区", hoursLabel: "診療時間", hours: "月〜金 10:00 — 19:00", careLabel: "ご予約", care: "完全予約制", scroll: "Scroll" },
    about: { sectionLabel: "About LeCell", title1: "Beauty", title2: "beyond time.", p1: "鏡の前でふと、時間が残した変化と向き合う瞬間があります。老化は肌の一か所の問題ではなく、フェイスラインとコンディション全体に広がる流れです。だからこそ、同じ悩みでもその解決法は人それぞれ異なります。", p2: "ルセル清潭は、その変化を一人の物語として読み解くことから始めます。2026年ソウル清潭で始まったプレミアムメディカルエステティックとして、精密なカウンセリングと検査をもとに肌・髪・全身のコンディションをともに見つめ、個人に合うケアの流れを設計します。", p3: "個人の肌の特性と老化タイプを分析し、すべての施術を担当医療陣が直接行います。標準化された施術ではなく、一人だけのためのプライベートカスタムケア — それがルセル清潭が時間に向き合う方法です。" },
    signature: { sectionLabel: "シグネチャー プログラム", title1: "幹細胞から始まる、", title2: "エイジレスな美しさ。", desc: "ルセル清潭のシグネチャーは、幹細胞・血液再生を中心に、弾力・輪郭・肌コンディションを段階で設計した統合ケアです。単品の単純な合計ではなく、異なる深さのケアを一つの流れにまとめ、個人の旅を設計します。", eyebrow: "LeCell Signature Care", featureTitle1: "あなたの細胞に語りかける", featureTitle2: "プログラム。", featureDesc: "タイムレス360は、異なる深さに作用する装備とブースター、自家由来ケアを段階でまとめて設計したルセルの代表ラインです。超音波(ULTHERA)とRF(THERMAGE)の弾力ケアを基本に、グレードに応じてコラーゲンブースター・自家由来ケアまで拡張し、VVIPラウンジでプライベートに行われます。", attrs: { consult: "院長 直接カウンセリング · 精密分析", method: "自家幹細胞 · PRP · エクソソーム", duration: "グレード別 段階コース設計", lounge: "VVIPプライベートスイート" }, view: "詳細 →",
      treatments: [{ n: "01", ti: "タイムレス360", ko: "Timeless 360", sub: "超音波 · RF · ブースター段階設計" }, { n: "02", ti: "シークレット リジュベ", ko: "Rejuvenation Cycle", sub: "全身コンディション3段階統合" }, { n: "03", ti: "4-レイヤー リフティング", ko: "Premium Lifting", sub: "肌の層別プレミアムリフティング" }, { n: "04", ti: "ロンジェビティ リカバリー", ko: "Longevity Recovery", sub: "自家血液ベース再生ケア" }] },
    programs: { sectionLabel: "プログラム", title: "施術", titleEm: "プログラム", desc: "幹細胞・血液再生を軸に、リフティング・輪郭、スキンブースター、ボトックスデザイン、シグネチャーパッケージまで — ルセル清潭の統合施術ラインです。", data: [
      { id: "stemcell", n: "01", tab: "幹細胞・血液", h: "Stem Cell", hEm: "& Longevity", ko: "幹細胞 · 血液再生", lede: "血液・骨髄・脂肪由来の自家細胞資源を活用し、肌とコンディションの回復環境を整える再生ケアラインです。用量と回数に応じて段階的に設計します。", items: [{ ti: "ロンジェビティ リカバリー", sub: "Longevity Recovery · 自家血液ベース回復", dur: "60–90 分" }, { ti: "ロンジェビティ プライム P", sub: "Longevity Prime P · PRP 肌・頭皮ケア", dur: "60 分" }, { ti: "セリュル ド ムエル", sub: "Cellules de Moelle · 骨髄由来再生", dur: "90 分" }, { ti: "プラズマ リセット", sub: "Plasma Reset · 血漿交換コンディションケア", dur: "半日" }] },
      { id: "lift", n: "02", tab: "リフティング・輪郭", h: "Sculpture du", hEm: "Visage", ko: "リフティング · 輪郭", lede: "作用する深さの異なる装備による弾力ケアと、部位別の注射輪郭バランシングを併せて扱うラインです。弾力と顔のラインをそれぞれの観点から見つめます。", items: [{ ti: "リフティング ウルトラ", sub: "Lifting Ultra · 高密度集束超音波(HIFU)", dur: "60 分" }, { ti: "リフティング サーマ", sub: "Lifting Therma · RF真皮加温(サーマジFLX)", dur: "60 分" }, { ti: "コントゥール フィット", sub: "Contour Fit · 部位別輪郭バランシング", dur: "30 分" }, { ti: "マントン エレガン", sub: "Menton Élégant · あごラインの整え", dur: "20 分" }] },
      { id: "laser", n: "03", tab: "シグネチャー", h: "Signature", hEm: "Packages", ko: "ルセル シグネチャー パッケージ", lede: "弾力・輪郭・肌コンディションを段階で設計した代表的な複合パッケージです。異なる深さと方式のケアを一つの流れにまとめました。", items: [{ ti: "タイムレス360", sub: "Timeless 360 · 超音波·RF·ブースター段階設計", dur: "60–120 分" }, { ti: "プレミアム4-レイヤー", sub: "Premium 4-Layer Lifting · 肌の層別構成", dur: "相談設計" }, { ti: "シークレット リジュベ", sub: "Secret Rejuvenation Cycle · 全身3段階統合", dur: "サイクル設計" }, { ti: "スワン フロレゾン", sub: "Soin Floraison · 手術前後の回復ケア", dur: "手術連携" }] },
      { id: "booster", n: "04", tab: "スキンブースター", h: "Booster de", hEm: "Régénération", ko: "スキンブースター · 肌再生", lede: "肌の中の水分・キメ・弾力環境を整える注射ベースのブースターラインです。表面に加えるよりも、真皮内の環境を整える観点でアプローチします。", items: [{ ti: "リジュラン スキンブースター", sub: "Rejuran · サーモンDNA由来PN", dur: "30 分" }, { ti: "リジュラン HB", sub: "Rejuran HB · 水分ケア追加", dur: "30 分" }, { ti: "レスチレン スキンブースター", sub: "Restylane · HA水分・キメケア", dur: "30 分" }, { ti: "エクラ メラスマ", sub: "Éclat Melasma · 肌トーン・色素ケア", dur: "15 分" }] },
      { id: "wellness", n: "05", tab: "ボトックス", h: "Sculpting", hEm: "au Botox", ko: "ボトックス · 輪郭デザイン", lede: "ボツリヌストキシン製剤を部位別の筋肉バランスに合わせて緻密に設計するラインです。部位別の筋肉の役割とバランスを併せて考慮します。", items: [{ ti: "ボトックス デュ ヴィザージュ", sub: "Botox du Visage · スキンボトックス(キメ・毛穴)", dur: "15–20 分" }, { ti: "リーニュ デュ マントン", sub: "Ligne du Menton · エラ・唾液腺", dur: "10 分" }, { ti: "ボトックス デリカ", sub: "Botox Délicat · 目元·眉間·口角", dur: "10 分" }, { ti: "リーニュ デポール", sub: "Ligne d'Épaule · 僧帽筋ライン", dur: "10–15 分" }] },
    ] },
    doctors: { sectionLabel: "医療チーム", title: "医師を", titleEm: "ご紹介します", desc: "数十年の臨床経験を持つ専門医と、東西医学の協診が可能な医師陣が同じ空間で、お一人おひとりのケアの道のりをともに設計します。" },
    space: { sectionLabel: "空間のご紹介", title: "清潭に刻まれた", titleEm: "空間の品格", desc: "VVIPラウンジとプライベート施術室、バレーパーキングを備えた完全予約制の空間で、\nお一人のための時間を設計します。", tags: ["01 · Reception", "02 · VVIPラウンジ", "03 · 診察室", "04 · 施術室", "05 · Recovery"] },
    location: { sectionLabel: "アクセス", title: "あなたのための", titleEm: "プライベート診療", addrLabel: "住所", addr: "ソウル特別市江南区清潭洞89-21, 1階", hoursLabel: "診療時間", hours: "月〜金 · 10:00 — 19:00", hoursSub: "土 · 10:00 — 16:00 · 日·祝休診", reserveLabel: "予約", reserveVal: "カカオトーク @르셀청담 · 予約制", valetLabel: "アクセス", valetVal: "バレーパーキング · 7号線清潭駅13番出口 徒歩3分", contactLabel: "お問合せ", cta: "ご予約・お問い合わせ →" },
    footer: { sub: "Cheongdam · 清潭 · Seoul", desc: "抗老化を軸とした美容外科・皮膚科と幹細胞療法のメディカルケア。プライベートな空間で、あなただけの旅を設計します。", exploreTitle: "Explore", visitTitle: "アクセス", contactTitle: "お問合せ", copy: "© 2026 LeCell Clinic Cheongdam · Genova Group · All Rights Reserved.", biz: "代表: Kim Tae-Ryun" },
  },
};

// Language Context
const LangContext = React.createContext("KR");
function useLang() {
  const lang = React.useContext(LangContext);
  return TRANSLATIONS[lang] || TRANSLATIONS.KR;
}

window.LangContext = LangContext;
window.useLang = useLang;
window.TRANSLATIONS = TRANSLATIONS;
