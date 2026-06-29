import nxMonogram from "@/assets/g_nx_branco.png";
import iconEngineering from "@/assets/icon_engineering.png";
import iconCommunity from "@/assets/icon_community.png";
import iconDeep from "@/assets/g_deep_colorido.png";
import iconInvest from "@/assets/icon_invest.png";

/**
 * Abstract "group constellation": the holding (sociedade-mãe) at the centre,
 * with the four operating companies as connected satellite nodes — each
 * showing its own icon. Placed on the brand's diagonal ("X") axis, echoing
 * the logo's structuring diagonal.
 */

const C = 220; // centre (viewBox units)
const R = 220; // orbit radius

// Four companies on the diagonal axis (the brand "X")
const companies = [
  { label: "Engenharia & Soluções", icon: iconEngineering, deg: -135 },
  { label: "Community", icon: iconCommunity, deg: -45 },
  { label: "Invest", icon: iconInvest, deg: 45 },
  { label: "Deep", icon: iconDeep, deg: 135 },
].map((c, i) => {
  const a = (c.deg * Math.PI) / 180;
  const x = C + R * Math.cos(a);
  const y = C + R * Math.sin(a);
  return { ...c, x, y, px: (x / 520) * 100, py: (y / 520) * 100, delay: i * 700 };
});

const GroupConstellation = () => (
  <div className="relative mx-auto w-full max-w-lg aspect-square">
    <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-full" />

    {/* lines + rotating rings */}
    <svg viewBox="0 0 440 440" className="absolute inset-0 w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "hsl(var(--brand-orange))" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--brand-red))" }} />
        </linearGradient>
      </defs>

      <g className="animate-spin [animation-duration:60s]" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx={C} cy={C} r={R} fill="none" stroke="url(#cg)" strokeWidth="1.5" strokeDasharray="2 12" opacity="0.5" />
      </g>
      <g className="animate-spin [animation-duration:90s] [animation-direction:reverse]" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx={C} cy={C} r={R - 56} fill="none" stroke="url(#cg)" strokeWidth="1" strokeDasharray="1 10" opacity="0.4" />
      </g>

      {companies.map((c, i) => (
        <line key={`l${i}`} x1={C} y1={C} x2={c.x} y2={c.y} stroke="url(#cg)" strokeWidth="1.5" opacity="0.35" />
      ))}

      <circle cx={C} cy={C} r="74" fill="url(#cg)" opacity="0.10" />
    </svg>

    {/* company satellite nodes — the badge centre sits exactly on each X endpoint;
        the label floats below without shifting that centre */}
    {companies.map((c) => (
      <div
        key={c.label}
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2 animate-float"
        style={{ left: `${c.px}%`, top: `${c.py}%`, animationDelay: `${c.delay}ms` }}
      >
        <div className="relative">
          <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-card border border-border shadow-soft flex items-center justify-center p-2 sm:p-2.5 md:p-3 hover:border-primary/50 hover:scale-105 transition-all duration-300">
            <img src={c.icon} alt={`Nextenergy ${c.label}`} className="max-w-full max-h-full w-auto h-auto object-contain" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 md:mt-2 text-[9px] sm:text-[10px] md:text-[11px] font-sub font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">{c.label}</span>
        </div>
      </div>
    ))}

    {/* central holding node — kept below the satellite labels (z-10 < z-20) */}
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-gradient-brand shadow-brand flex items-center justify-center animate-pulse-glow">
          <img src={nxMonogram} alt="Grupo Nextenergy" className="w-12 sm:w-14 md:w-16 h-auto object-contain" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 md:mt-2 text-[9px] sm:text-[10px] md:text-[11px] font-sub font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Grupo Nextenergy</span>
      </div>
    </div>
  </div>
);

export default GroupConstellation;
