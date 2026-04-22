function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />

      {/* Vimeo background embed */}
      <div className="hero-video-wrap">
        <iframe
          className="hero-yt-iframe"
          src="https://player.vimeo.com/video/1185402196?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="HERO"
        />
      </div>

      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-top">
          <div>
            <div className="eyebrow">Anti-Aging · Stem Cell · Cheongdam</div>
          </div>
          <div className="eyebrow">est. 2026 · seoul</div>
        </div>

        <div>
          <h1 className="hero-headline">
            The art of<br />
            <em>cellular renewal.</em>
            <span className="ko">시간의 흐름을 거스르기보다,<br />아름답게 다듬어가는<br />르셀 청담의 프리미엄 안티에이징 케어</span>
          </h1>
        </div>

        <div className="hero-foot">
          <div className="kv">
            <span className="k">Address</span>
            <span className="v">서울 강남구 청담동 <em>89–21</em></span>
          </div>
          <div className="kv">
            <span className="k">Hours</span>
            <span className="v">Mon–Fri <em>10:00 — 19:00</em></span>
          </div>
          <div className="kv">
            <span className="k">Care</span>
            <span className="v">By <em>appointment</em> only</span>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <span className="line" />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
