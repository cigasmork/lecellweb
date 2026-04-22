// Image placeholders — subtly striped, labeled
function Placeholder({ label, light, style, children, className = "" }) {
  return (
    <div className={`ph-img ${light ? "light" : ""} ${className}`} style={style}>
      <div className="ph-label">{label || "photograph"}</div>
      {children}
    </div>
  );
}

window.Placeholder = Placeholder;
