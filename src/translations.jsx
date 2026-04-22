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
      title1: "A clinic",
      title2: "of renewal.",
      p1: "르셀청담의원은 서울 청담에 자리한 프리미엄 안티에이징 클리닉입니다. 프라이빗한 진료 환경 속에서, 환자 한 분 한 분의 시간과 결을 세심하게 살피며 보다 자연스럽고 품격 있는 변화를 제안합니다.",
      p2: "충분한 상담과 섬세한 진료, 그리고 개인의 피부 상태와 라이프스타일을 고려한 맞춤 케어를 통해 단순한 시술을 넘어 시간이 지날수록 더 편안하고 아름다운 방향을 함께 그려갑니다.",
      p3: "빠르게 바꾸는 아름다움보다, 천천히 깊어지는 건강한 아름다움. 르셀청담의원은 당신만의 속도에 맞춘 하이엔드 메디컬 케어를 제공합니다.",
    },
    signature: {
      sectionLabel: "Signature Program",
      title1: "Stem-cell rooted,",
      title2: "ageless by design.",
      desc: "르셀청담의 시그니처 프로그램은 줄기세포 치료를 중심으로 항노화·피부 재생·면역 개선을 유기적으로 결합한 통합 메디컬 케어입니다. 단기 시술을 넘어 개인의 라이프스타일에 맞춘 장기 관리 여정을 설계합니다.",
      eyebrow: "LeCell Signature Care",
      featureTitle1: "A program that speaks",
      featureTitle2: "to your cells.",
      featureDesc: "자가 유래 줄기세포와 엑소좀 병행 치료로 피부 깊은 층의 재생과 전신 면역 개선을 동시에 이끌어냅니다. VVIP 라운지에서 프라이빗하게 진행되며, 의료진과의 심화 상담·진단·관리가 하나의 여정으로 구성됩니다.",
      attrs: { consult: "90분 심층 상담 · 진단", method: "자가 줄기세포 · 엑소좀", duration: "12주 기준 맞춤 설계", lounge: "VVIP Private Suite" },
      view: "View →",
      treatments: [
        { n: "01", ti: "Cellular Therapy", ko: "줄기세포 치료", sub: "피부 · 혈액 · 고압산소 줄기세포" },
        { n: "02", ti: "Reverse-Aging", ko: "리버스에이징 수술", sub: "안면거상 · 인중축소 · 동안 성형" },
        { n: "03", ti: "Laser Lifting", ko: "레이저 리프팅", sub: "울쎄라 · 써마지 · 프락셀" },
        { n: "04", ti: "Skin Booster", ko: "스킨부스터", sub: "리쥬란 · 리바이브 · 레디어스" },
      ],
    },
    programs: {
      sectionLabel: "Programs",
      title: "진료 프로그램",
      titleEm: "프로그램",
      desc: "항노화 기반 성형·피부 진료와 줄기세포 치료를 축으로 구성된 다섯 개의 통합 진료 카테고리입니다.",
      data: [
        { id: "stemcell", n: "01", tab: "줄기세포", h: "Cellular", hEm: "Rejuvenation", ko: "줄기세포 치료", lede: "피부·혈액·고압산소 기반 줄기세포 치료로 노화 진행을 늦추고 세포 재생을 촉진합니다. 엑소좀 병행으로 항노화와 면역 개선을 동시에 구현합니다.", items: [{ ti: "피부 줄기세포", sub: "Skin-derived cellular therapy", dur: "60 min" }, { ti: "혈액 줄기세포", sub: "Blood-derived systemic therapy", dur: "90 min" }, { ti: "고압산소 줄기세포", sub: "Hyperbaric cellular protocol", dur: "120 min" }, { ti: "엑소좀 병행 치료", sub: "Exosome adjunct therapy", dur: "45 min" }] },
        { id: "lift", n: "02", tab: "안면거상", h: "Reverse", hEm: "Aging", ko: "안면거상 · 리버스에이징", lede: "미니 · 전체 안면거상부터 목거상, 인중축소까지. 노화로 인한 처짐과 윤곽 변화에 대한 근본적 개선을 제공합니다.", items: [{ ti: "미니 안면거상", sub: "Mini facelift", dur: "3 hr" }, { ti: "전체 안면거상", sub: "Full facelift", dur: "5 hr" }, { ti: "목거상", sub: "Neck lift", dur: "3 hr" }, { ti: "인중축소", sub: "Lip lift", dur: "1 hr" }] },
        { id: "laser", n: "03", tab: "레이저", h: "Energy-based", hEm: "Lifting", ko: "레이저 리프팅", lede: "고강도 초음파·고주파로 피부 심층의 탄력을 회복합니다. 시술 후 즉각적인 당김과 장기적 콜라겐 재생 효과를 제공합니다.", items: [{ ti: "울쎄라", sub: "HIFU deep-layer lifting", dur: "60 min" }, { ti: "써마지", sub: "Monopolar RF tightening", dur: "90 min" }, { ti: "프락셀", sub: "Fractional resurfacing", dur: "45 min" }, { ti: "인모드", sub: "Bipolar RF contouring", dur: "45 min" }] },
        { id: "booster", n: "04", tab: "스킨부스터", h: "Regenerative", hEm: "Infusion", ko: "스킨부스터", lede: "피부 깊은 곳에 영양을 공급하고 자가 콜라겐 재생을 유도합니다. 장기적인 피부 결·탄력 개선을 위한 주기적 관리 프로그램으로 구성됩니다.", items: [{ ti: "리쥬란", sub: "Polynucleotide booster", dur: "30 min" }, { ti: "리바이브", sub: "Volumizing hydro-filler", dur: "30 min" }, { ti: "레디어스", sub: "Collagen-stimulating filler", dur: "45 min" }, { ti: "물광주사", sub: "Hydration infusion", dur: "30 min" }] },
        { id: "wellness", n: "05", tab: "웰니스", h: "Integrative", hEm: "Wellness", ko: "웰니스 · 통합 케어", lede: "비만 클리닉과 암 환자 맞춤 통합 케어를 포함한 기능의학 기반 웰니스 프로그램. 고객의 생애 주기 전반을 고려한 장기적 관리입니다.", items: [{ ti: "GLP-1 비만 클리닉", sub: "Metabolic weight management", dur: "30 min" }, { ti: "유전자 분석", sub: "Genetic profiling", dur: "60 min" }, { ti: "암 환자 통합 케어", sub: "Oncology support protocol", dur: "90 min" }, { ti: "기능의학 IV", sub: "Functional medicine infusion", dur: "60 min" }] },
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
      hoursLabel: "Hours", hours: "월 — 금 · 10:00 — 19:00", hoursSub: "토요일 협의 · 일요일 휴무",
      reserveLabel: "Reserve", reserveVal: "예약제 중심 운영 · 워크인 병행",
      valetLabel: "Valet", valetVal: "발렛파킹 · VVIP 전용 동선",
      contactLabel: "Contact",
      cta: "예약 문의하기 →",
    },
    footer: {
      sub: "Cheongdam · 청담 · Seoul",
      desc: "항노화 기반 성형·피부과와 줄기세포 치료의 메디컬 케어. 프라이빗한 공간에서 당신만을 위한 여정을 설계합니다.",
      exploreTitle: "Explore",
      visitTitle: "Visit",
      contactTitle: "Contact",
      copy: "© 2026 LeCell Cheongdam Clinic. All rights reserved.",
      biz: "사업자번호 000-00-00000 · 대표 김태륜",
    },
  },

  EN: {
    nav: { about: "About", signature: "Signature", programs: "Programs", doctors: "Doctors", space: "Space", location: "Location", reserve: "Reserve" },
    hero: { eyebrow: "Anti-Aging · Stem Cell · Cheongdam", est: "est. 2026 · seoul", headline1: "The art of", headline2: "cellular renewal.", sub: "Not reversing time,\nbut refining it beautifully.\nLeCell Cheongdam's premium anti-aging care.", addrLabel: "Address", addr: "Cheongdamdong 89–21, Gangnam", hoursLabel: "Hours", hours: "Mon–Fri 10:00 — 19:00", careLabel: "Care", care: "By appointment only", scroll: "Scroll" },
    about: { sectionLabel: "About LeCell", title1: "A clinic", title2: "of renewal.", p1: "LeCell Cheongdam is a premium anti-aging clinic located in Cheongdam, Seoul. In a private, unhurried setting, we attentively consider each patient's unique needs and propose changes that are natural, refined, and lasting.", p2: "Through in-depth consultations, meticulous care, and personalized treatment tailored to your skin condition and lifestyle, we go beyond simple procedures to guide you toward a more comfortable, beautiful version of yourself over time.", p3: "Rather than fast changes, we believe in beauty that deepens gradually. LeCell Cheongdam provides high-end medical care calibrated to your own pace." },
    signature: { sectionLabel: "Signature Program", title1: "Stem-cell rooted,", title2: "ageless by design.", desc: "Our signature program organically combines stem cell therapy with anti-aging, skin regeneration, and immune enhancement — a truly integrated medical care model. We design long-term wellness journeys tailored to your individual lifestyle.", eyebrow: "LeCell Signature Care", featureTitle1: "A program that speaks", featureTitle2: "to your cells.", featureDesc: "Autologous stem cell therapy combined with exosome treatments simultaneously rejuvenates deep skin layers and enhances systemic immunity. Conducted privately in our VVIP lounge, every session is part of a curated journey with in-depth consultation and follow-up.", attrs: { consult: "90-min in-depth consultation", method: "Autologous stem cell · Exosome", duration: "12-week personalized plan", lounge: "VVIP Private Suite" }, view: "View →",
      treatments: [{ n: "01", ti: "Cellular Therapy", ko: "Stem Cell", sub: "Skin · Blood · Hyperbaric Oxygen" }, { n: "02", ti: "Reverse-Aging", ko: "Surgery", sub: "Facelift · Lip Lift · Rejuvenation" }, { n: "03", ti: "Laser Lifting", ko: "Energy-based", sub: "HIFU · RF · Fractional Laser" }, { n: "04", ti: "Skin Booster", ko: "Regenerative", sub: "Rejuran · Revive · Radiesse" }] },
    programs: { sectionLabel: "Programs", title: "Treatment", titleEm: "Programs", desc: "Five integrated care categories centered on anti-aging aesthetics, surgery, and stem cell therapy.", data: [
      { id: "stemcell", n: "01", tab: "Stem Cell", h: "Cellular", hEm: "Rejuvenation", ko: "Stem Cell Therapy", lede: "Our stem cell protocols using skin, blood, and hyperbaric oxygen slow the aging process and stimulate cellular regeneration. Combined with exosome therapy for systemic anti-aging and immune support.", items: [{ ti: "Skin Stem Cell", sub: "Skin-derived cellular therapy", dur: "60 min" }, { ti: "Blood Stem Cell", sub: "Blood-derived systemic therapy", dur: "90 min" }, { ti: "Hyperbaric O₂", sub: "Hyperbaric cellular protocol", dur: "120 min" }, { ti: "Exosome Therapy", sub: "Exosome adjunct therapy", dur: "45 min" }] },
      { id: "lift", n: "02", tab: "Anti-Aging Surgery", h: "Reverse", hEm: "Aging", ko: "Facelift · Reverse Aging", lede: "From mini and full facelifts to neck lifts and lip lifts — we provide fundamental improvement for sagging and contour changes caused by aging.", items: [{ ti: "Mini Facelift", sub: "Minimal-incision facelift", dur: "3 hr" }, { ti: "Full Facelift", sub: "Comprehensive facial rejuvenation", dur: "5 hr" }, { ti: "Neck Lift", sub: "Neck and jawline refinement", dur: "3 hr" }, { ti: "Lip Lift", sub: "Philtrum shortening surgery", dur: "1 hr" }] },
      { id: "laser", n: "03", tab: "Laser Lifting", h: "Energy-based", hEm: "Lifting", ko: "Laser Lifting", lede: "High-intensity ultrasound and radiofrequency restore deep skin elasticity, providing immediate tightening and long-term collagen regeneration.", items: [{ ti: "Ulthera", sub: "HIFU deep-layer lifting", dur: "60 min" }, { ti: "Thermage", sub: "Monopolar RF tightening", dur: "90 min" }, { ti: "Fraxel", sub: "Fractional resurfacing", dur: "45 min" }, { ti: "InMode", sub: "Bipolar RF contouring", dur: "45 min" }] },
      { id: "booster", n: "04", tab: "Skin Booster", h: "Regenerative", hEm: "Infusion", ko: "Skin Booster", lede: "We nourish the skin from within and stimulate autologous collagen regeneration for long-term improvements in texture and elasticity.", items: [{ ti: "Rejuran", sub: "Polynucleotide booster", dur: "30 min" }, { ti: "Revive", sub: "Volumizing hydro-filler", dur: "30 min" }, { ti: "Radiesse", sub: "Collagen-stimulating filler", dur: "45 min" }, { ti: "Skin Hydration", sub: "Hydration infusion", dur: "30 min" }] },
      { id: "wellness", n: "05", tab: "Wellness", h: "Integrative", hEm: "Wellness", ko: "Wellness · Integrative Care", lede: "Functional medicine-based wellness programs including obesity clinic, GLP-1 therapy, genetic profiling, and integrated oncology support care.", items: [{ ti: "GLP-1 Obesity Clinic", sub: "Metabolic weight management", dur: "30 min" }, { ti: "Genetic Profiling", sub: "DNA-based analysis", dur: "60 min" }, { ti: "Oncology Support", sub: "Integrated cancer patient care", dur: "90 min" }, { ti: "Functional IV", sub: "Functional medicine infusion", dur: "60 min" }] },
    ] },
    doctors: { sectionLabel: "Medical Team", title: "Meet our", titleEm: "Doctors", desc: "Faculty with decades of clinical experience and dual-licensed specialists work together in one space to craft each patient's unique care journey." },
    space: { sectionLabel: "The Space", title: "A space etched", titleEm: "in Cheongdam", desc: "In our appointment-only space with VVIP lounge, private treatment suites, and valet parking, we design time dedicated solely to your journey.", tags: ["01 · Reception", "02 · VVIP Lounge", "03 · Consult", "04 · Suite", "05 · Recovery"] },
    location: { sectionLabel: "Visit", title: "Private care,", titleEm: "for you", addrLabel: "Address", addr: "89-21 Cheongdamdong, Gangnam-gu, Seoul, 1F", hoursLabel: "Hours", hours: "Mon – Fri · 10:00 — 19:00", hoursSub: "Sat by arrangement · Sun closed", reserveLabel: "Reserve", reserveVal: "Appointment-based · Walk-in available", valetLabel: "Valet", valetVal: "Valet parking · VVIP exclusive access", contactLabel: "Contact", cta: "Request Appointment →" },
    footer: { sub: "Cheongdam · Seoul · Korea", desc: "Premium anti-aging aesthetics and stem cell therapy. A personalized high-end medical care journey, in a private Cheongdam space.", exploreTitle: "Explore", visitTitle: "Visit", contactTitle: "Contact", copy: "© 2026 LeCell Cheongdam Clinic. All rights reserved.", biz: "CEO: Kim Tae-Ryun" },
  },

  JP: {
    nav: { about: "About", signature: "シグネチャー", programs: "プログラム", doctors: "医師紹介", space: "空間", location: "アクセス", reserve: "ご予約" },
    hero: { eyebrow: "アンチエイジング · 幹細胞 · 清潭", est: "est. 2026 · seoul", headline1: "The art of", headline2: "cellular renewal.", sub: "時間の流れに逆らうのではなく、\n美しく磨き上げていく。\nルセル清潭のプレミアム アンチエイジングケア", addrLabel: "住所", addr: "清潭洞89–21, 江南区", hoursLabel: "診療時間", hours: "月〜金 10:00 — 19:00", careLabel: "ご予約", care: "完全予約制", scroll: "Scroll" },
    about: { sectionLabel: "About LeCell", title1: "A clinic", title2: "of renewal.", p1: "ルセル清潭は、ソウル清潭に位置するプレミアム アンチエイジングクリニックです。プライベートな診療環境の中で、お一人おひとりの状態を丁寧に確認しながら、自然で品格ある変化をご提案します。", p2: "十分なカウンセリングと繊細な施術、そして個人の肌状態とライフスタイルを考慮したカスタムケアにより、単なる施術を超えた、時を経るほどに心地よく美しい方向をともに描きます。", p3: "素早い変化より、ゆっくりと深まる健やかな美しさ。ルセル清潭は、あなた自身のペースに合わせたハイエンドメディカルケアを提供します。" },
    signature: { sectionLabel: "シグネチャー プログラム", title1: "幹細胞から始まる、", title2: "エイジレスな美しさ。", desc: "ルセル清潭のシグネチャープログラムは、幹細胞療法を中心に、抗老化・肌再生・免疫改善を有機的に組み合わせた統合メディカルケアです。短期的な施術を超え、個人のライフスタイルに合わせた長期ケアの旅を設計します。", eyebrow: "LeCell Signature Care", featureTitle1: "あなたの細胞に語りかける", featureTitle2: "プログラム。", featureDesc: "自家幹細胞とエクソソーム併用療法により、皮膚深層の再生と全身免疫の改善を同時に実現します。VVIPラウンジでプライベートに行われ、医師との深いカウンセリング・診断・ケアが一つの旅として構成されています。", attrs: { consult: "90分の深いカウンセリング", method: "自家幹細胞 · エクソソーム", duration: "12週間カスタムプラン", lounge: "VVIPプライベートスイート" }, view: "詳細 →",
      treatments: [{ n: "01", ti: "幹細胞療法", ko: "Cellular Therapy", sub: "皮膚 · 血液 · 高圧酸素" }, { n: "02", ti: "リバースエイジング", ko: "Reverse-Aging", sub: "フェイスリフト · 人中縮小" }, { n: "03", ti: "レーザーリフティング", ko: "Laser Lifting", sub: "ウルセラ · サーマジ · フラクセル" }, { n: "04", ti: "スキンブースター", ko: "Skin Booster", sub: "リジュラン · レビーブ · レディエス" }] },
    programs: { sectionLabel: "プログラム", title: "診療", titleEm: "プログラム", desc: "抗老化を軸とした美容外科・皮膚科と幹細胞療法を組み合わせた5つの統合診療カテゴリーです。", data: [
      { id: "stemcell", n: "01", tab: "幹細胞", h: "Cellular", hEm: "Rejuvenation", ko: "幹細胞療法", lede: "皮膚・血液・高圧酸素を用いた幹細胞治療により、老化の進行を遅らせ、細胞再生を促進します。エクソソーム併用で全身の抗老化と免疫改善を同時に実現します。", items: [{ ti: "皮膚幹細胞", sub: "皮膚由来細胞療法", dur: "60 分" }, { ti: "血液幹細胞", sub: "血液由来全身療法", dur: "90 分" }, { ti: "高圧酸素", sub: "高圧酸素細胞プロトコル", dur: "120 分" }, { ti: "エクソソーム", sub: "エクソソーム併用療法", dur: "45 分" }] },
      { id: "lift", n: "02", tab: "フェイスリフト", h: "Reverse", hEm: "Aging", ko: "フェイスリフト・リバースエイジング", lede: "ミニ・フルフェイスリフトからネックリフト、人中縮小まで。老化による皮膚のたるみや輪郭の変化に根本的な改善を提供します。", items: [{ ti: "ミニフェイスリフト", sub: "最小切開リフトアップ", dur: "3 時間" }, { ti: "フルフェイスリフト", sub: "全顔総合リジュベネーション", dur: "5 時間" }, { ti: "ネックリフト", sub: "首・フェイスラインの引き締め", dur: "3 時間" }, { ti: "人中縮小", sub: "上唇リフトアップ術", dur: "1 時間" }] },
      { id: "laser", n: "03", tab: "レーザー", h: "Energy-based", hEm: "Lifting", ko: "レーザーリフティング", lede: "高密度超音波と高周波で皮膚深層の弾力を回復します。即効性のある引き締め効果と長期的なコラーゲン再生を提供します。", items: [{ ti: "ウルセラ", sub: "HIFU深層リフティング", dur: "60 分" }, { ti: "サーマジ", sub: "単極性RF引き締め", dur: "90 分" }, { ti: "フラクセル", sub: "フラクショナルレーザー", dur: "45 分" }, { ti: "インモード", sub: "双極性RFコンタリング", dur: "45 分" }] },
      { id: "booster", n: "04", tab: "スキンブースター", h: "Regenerative", hEm: "Infusion", ko: "スキンブースター", lede: "皮膚の深部に栄養を補給し、自家コラーゲン再生を誘導します。肌のキメと弾力の長期的改善のための定期ケアプログラムです。", items: [{ ti: "リジュラン", sub: "ポリヌクレオチドブースター", dur: "30 分" }, { ti: "レビーブ", sub: "ボリュームハイドロフィラー", dur: "30 分" }, { ti: "レディエス", sub: "コラーゲン刺激フィラー", dur: "45 分" }, { ti: "水光注射", sub: "保湿インフュージョン", dur: "30 分" }] },
      { id: "wellness", n: "05", tab: "ウェルネス", h: "Integrative", hEm: "Wellness", ko: "ウェルネス・統合ケア", lede: "肥満クリニックや がん患者向け統合ケアを含む機能医学ベースのウェルネスプログラム。お客様のライフサイクル全般を考慮した長期管理です。", items: [{ ti: "GLP-1肥満クリニック", sub: "代謝体重管理", dur: "30 分" }, { ti: "遺伝子解析", sub: "DNAベース分析", dur: "60 分" }, { ti: "がん患者統合ケア", sub: "腫瘍学的サポートプログラム", dur: "90 分" }, { ti: "機能医学IV", sub: "機能医学インフュージョン", dur: "60 分" }] },
    ] },
    doctors: { sectionLabel: "医師紹介", title: "医師を", titleEm: "ご紹介します", desc: "数十年の臨床経験を持つ教授陣と、東西医学の協診が可能な専門医が同じ空間で、お一人おひとりのケアの旅をともに設計します。" },
    space: { sectionLabel: "空間のご紹介", title: "清潭に刻まれた", titleEm: "空間の品格", desc: "VVIPラウンジとプライベート施術室、バレーパーキングを備えた完全予約制の空間で、\nお一人のための時間を設計します。", tags: ["01 · Reception", "02 · VVIPラウンジ", "03 · 診察室", "04 · 施術室", "05 · Recovery"] },
    location: { sectionLabel: "アクセス", title: "あなたのための", titleEm: "プライベート診療", addrLabel: "住所", addr: "ソウル特別市江南区清潭洞89-21, 1階", hoursLabel: "診療時間", hours: "月〜金 · 10:00 — 19:00", hoursSub: "土曜応相談 · 日曜休診", reserveLabel: "予約", reserveVal: "完全予約制 · ウォークイン対応", valetLabel: "駐車場", valetVal: "バレーパーキング · VVIP専用動線", contactLabel: "お問合せ", cta: "ご予約・お問い合わせ →" },
    footer: { sub: "Cheongdam · 清潭 · Seoul", desc: "抗老化を軸とした美容外科・皮膚科と幹細胞療法のメディカルケア。プライベートな空間で、あなただけの旅を設計します。", exploreTitle: "Explore", visitTitle: "アクセス", contactTitle: "お問合せ", copy: "© 2026 LeCell Cheongdam Clinic. All rights reserved.", biz: "代表: Kim Tae-Ryun" },
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
