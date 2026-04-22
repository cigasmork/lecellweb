function TweaksPanel({ tweaks, setTweak }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setVisible(true);
      if (e.data.type === "__deactivate_edit_mode") setVisible(false);
    };
    window.addEventListener("message", handler);
    // announce after listener live
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  const persist = (edits) => {
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
  };

  if (!visible) return null;

  const papers = [
    { v: "ivory", l: "Ivory" },
    { v: "stone", l: "Stone" },
    { v: "warmwhite", l: "Warm White" },
    { v: "blush", l: "Blush" },
  ];

  return (
    <div className="tweaks-panel">
      <h5>Tweaks</h5>

      <div className="tweak-row">
        <label>Paper tone</label>
        <div className="chips">
          {papers.map((p) => (
            <div
              key={p.v}
              className={`chip ${tweaks.paperTone === p.v ? "on" : ""}`}
              onClick={() => { setTweak("paperTone", p.v); persist({ paperTone: p.v }); }}
            >{p.l}</div>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Accent hue · {tweaks.accentHue}°</label>
        <input
          type="range" min="40" max="120" step="1"
          value={tweaks.accentHue}
          onChange={(e) => setTweak("accentHue", +e.target.value)}
          onMouseUp={(e) => persist({ accentHue: +e.target.value })}
          onTouchEnd={(e) => persist({ accentHue: +e.target.value })}
        />
        <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
          {[60, 72, 82, 92, 105].map((h) => (
            <div
              key={h}
              className={`chip ${tweaks.accentHue === h ? "on" : ""}`}
              style={{ padding: "4px 8px" }}
              onClick={() => { setTweak("accentHue", h); persist({ accentHue: h }); }}
            >{h}°</div>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Show signature section</label>
        <div className="chips">
          <div
            className={`chip ${tweaks.showSignature ? "on" : ""}`}
            onClick={() => { setTweak("showSignature", true); persist({ showSignature: true }); }}
          >On</div>
          <div
            className={`chip ${!tweaks.showSignature ? "on" : ""}`}
            onClick={() => { setTweak("showSignature", false); persist({ showSignature: false }); }}
          >Off</div>
        </div>
      </div>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
