import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import iconEngineering from "@/assets/icon_engineering.png";
import iconCommunity from "@/assets/icon_community.png";
import iconDeep from "@/assets/g_deep_colorido.png";
import iconInvest from "@/assets/icon_invest.png";

type Brand = {
  id: string;
  tab: string;
  num: string;
  name: string;
  category: string;
  tagline: string;
  desc: string;
  features: string[];
  icon: string;
  site: string;
  grad: string; // tab / cta gradient
  soft: string; // visual background tint
  accent: string; // tagline + feature colour
  shadow: string; // active tab / cta shadow
};

const brands: Brand[] = [
  {
    id: "engineering",
    tab: "Engenharia",
    num: "01",
    name: "Nextenergy, Lda",
    category: "Núcleo Técnico",
    tagline: "Engineering & Solutions",
    desc: "Engenharia, projeto e instalação de soluções de eficiência energética para clientes residenciais, empresariais e industriais.",
    features: ["Estudos & Projeto", "Instalação & EPC", "Eficiência Energética", "Manutenção"],
    icon: iconEngineering,
    site: "www.nextenergy.pt",
    grad: "linear-gradient(135deg,#FF8A3D,#E8442A)",
    soft: "linear-gradient(135deg,#FFF6F0,#FFE4D2)",
    accent: "#E8442A",
    shadow: "rgba(232,68,42,0.35)",
  },
  {
    id: "community",
    tab: "Community",
    num: "02",
    name: "Nextenergy Community, Lda",
    category: "Energia Partilhada",
    tagline: "Community",
    desc: "Desenvolvimento e gestão de Comunidades de Energia Renovável (CER) e autoconsumo coletivo.",
    features: ["CER & Autoconsumo", "Gestão Digital", "Onboarding", "Faturação"],
    icon: iconCommunity,
    site: "www.nextenergycommunity.pt",
    grad: "linear-gradient(135deg,#FF8A3D,#E8442A)",
    soft: "linear-gradient(135deg,#FFF0EC,#FFD9CC)",
    accent: "#E8442A",
    shadow: "rgba(232,68,42,0.35)",
  },
  {
    id: "deep",
    tab: "Deep",
    num: "03",
    name: "Nextenergy Deep, Lda",
    category: "Tecnologia & Dados",
    tagline: "Data & Innovation",
    desc: "Desenvolvimento de software, APIs e infraestrutura digital do grupo. Monitorização de ativos, digitalização de processos e plataformas para clientes.",
    features: ["Software & APIs", "Monitorização de Ativos", "Dashboards", "Integrações"],
    icon: iconDeep,
    site: "www.digitaleprovider.com",
    grad: "linear-gradient(135deg,#4F4B9E,#2D2A6E)",
    soft: "linear-gradient(135deg,#EEEDF8,#D8D5F0)",
    accent: "#2D2A6E",
    shadow: "rgba(45,42,110,0.35)",
  },
  {
    id: "invest",
    tab: "Invest",
    num: "04",
    name: "Nextenergy Invest, Lda",
    category: "Capital & Património",
    tagline: "Invest",
    desc: "Investimento e gestão de património.",
    features: ["Investimento", "Gestão de Património", "Estruturação", "Portefólio"],
    icon: iconInvest,
    site: "www.nextenergyinvest.pt",
    grad: "linear-gradient(135deg,#7A7A8E,#3A3A4E)",
    soft: "linear-gradient(135deg,#F2F2F5,#DCDCE2)",
    accent: "#4A4A5E",
    shadow: "rgba(58,58,78,0.35)",
  },
];

const CompaniesShowcase = () => {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const manualUntil = useRef(0);

  // Auto-rotate every 5s, pausing while hovering or for 1 min after a click.
  useEffect(() => {
    const id = setInterval(() => {
      if (paused.current || Date.now() < manualUntil.current) return;
      setActive((i) => (i + 1) % brands.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Manual selection: jump to the company and hold auto-rotation for 1 minute.
  const select = (i: number) => {
    setActive(i);
    manualUntil.current = Date.now() + 60_000;
  };

  const b = brands[active];

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Tab selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {brands.map((brand, i) => {
          const isActive = i === active;
          return (
            <button
              key={brand.id}
              onClick={() => select(i)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sub font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive ? "text-white" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
              style={isActive ? { background: brand.grad, boxShadow: `0 6px 16px -4px ${brand.shadow}` } : undefined}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: isActive ? "#fff" : "currentColor", opacity: isActive ? 1 : 0.4 }} />
              {brand.tab}
            </button>
          );
        })}
      </div>

      {/* Stage */}
      <div className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
        <div key={b.id} className="grid md:grid-cols-2 animate-fade-in">
          {/* Visual */}
          <div className="relative min-h-[300px] p-10 flex flex-col justify-center items-start gap-6 overflow-hidden" style={{ background: b.soft }}>
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-20" style={{ background: b.accent }} />
            <div className="absolute bottom-0 right-16 w-24 h-24 rounded-full opacity-10" style={{ background: b.accent }} />
            <div className="relative w-32 h-32 rounded-3xl bg-white/70 backdrop-blur-sm shadow-soft flex items-center justify-center p-6">
              <img src={b.icon} alt={b.name} className="max-w-full max-h-full w-auto h-auto object-contain" />
            </div>
            <span className="relative inline-block px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-[10px] font-sub font-bold uppercase tracking-[0.2em] text-foreground">
              {b.tagline}
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-sub font-bold tracking-widest" style={{ color: b.accent }}>{b.num}</span>
                <span className="text-xs font-sub font-semibold uppercase tracking-wider" style={{ color: b.accent }}>{b.category}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">{b.name}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">{b.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 p-4 rounded-2xl bg-background">
                {b.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[13px] font-body">
                    <span className="w-4 h-4 rounded-md flex items-center justify-center shrink-0" style={{ background: b.accent }}>
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <a
              href={`https://${b.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sub font-bold uppercase tracking-wider text-white w-max transition-transform duration-200 hover:translate-x-0.5"
              style={{ background: b.grad, boxShadow: `0 6px 16px -4px ${b.shadow}` }}
            >
              Visitar website
              <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight size={12} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesShowcase;
