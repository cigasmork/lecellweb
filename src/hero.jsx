function Hero() {
  const t = useLang();
  const h = t.hero;
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
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
          <div><div className="eyebrow">{h.eyebrow}</div></div>
          <div className="eyebrow">{h.est}</div>
        </div>
        <div>
          <h1 className="hero-headline">
            {h.headline1}<br />
            <em>{h.headline2}</em>
            <span className="ko">{h.sub.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
            ))}</span>
          </h1>
        </div>
        <div className="hero-foot">
          <div className="kv">
            <span className="k">{h.addrLabel}</span>
            <span className="v"><em>{h.addr}</em></span>
          </div>
          <div className="kv">
            <span className="k">{h.hoursLabel}</span>
            <span className="v"><em>{h.hours}</em></span>
          </div>
          <div className="kv">
            <span className="k">{h.careLabel}</span>
            <span className="v">By <em>appointment</em> only</span>
          </div>
          <div className="scroll-hint">
            <span>{h.scroll}</span>
            <span className="line" />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
