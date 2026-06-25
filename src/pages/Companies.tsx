import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import iconHolding from "@/assets/icon_holding.png";
import iconEngineering from "@/assets/icon_engineering.png";
import iconCommunity from "@/assets/icon_community.png";
import iconDeep from "@/assets/icon_deep.png";
import iconInvest from "@/assets/icon_invest.png";

type Company = {
  index: string;
  name: string;
  tag: string;
  desc: string;
  icon: string;
  nipc: string;
  site?: string;
};

const companies: Company[] = [
  {
    index: "0",
    name: "Nextenergy, SGPS, Lda",
    tag: "Holding · SGPS · Sociedade-mãe",
    desc: "Detém as participações sociais das empresas operacionais e coordena a estratégia, o capital e a governance do grupo.",
    icon: iconHolding,
    nipc: "519 ### ###",
  },
  {
    index: "1",
    name: "Nextenergy, Lda",
    tag: "Engenharia & Soluções",
    desc: "Engenharia, projeto e instalação de soluções de eficiência energética para clientes residenciais, empresariais e industriais.",
    icon: iconEngineering,
    nipc: "512 084 980",
    site: "www.nextenergy.pt",
  },
  {
    index: "2",
    name: "Nextenergy Community, Lda",
    tag: "Comunidades de Energia",
    desc: "Desenvolvimento e gestão de Comunidades de Energia Renovável (CER) e autoconsumo coletivo.",
    icon: iconCommunity,
    nipc: "518 423 687",
    site: "www.nextenergycommunity.pt",
  },
  {
    index: "3",
    name: "Nextenergy Deep, Lda",
    tag: "Software & Digital",
    desc: "Desenvolvimento de software, APIs e infraestrutura digital do grupo. Monitorização de ativos, digitalização de processos e plataformas para clientes.",
    icon: iconDeep,
    nipc: "519 ### ###",
    site: "www.nextenergydeep.pt",
  },
  {
    index: "4",
    name: "Nextenergy Invest, Lda",
    tag: "Investimento & Património",
    desc: "Investimento e gestão de património.",
    icon: iconInvest,
    nipc: "519 220 943",
    site: "www.nextenergyinvest.pt",
  },
];

const Companies = () => (
  <Layout>
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-20 pb-12">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary">Empresas</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            As empresas do <span className="text-gradient-brand">Grupo Nextenergy</span>.
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Uma sociedade-mãe e quatro empresas operacionais, cada uma com a sua identidade e foco de mercado, unidas por uma visão comum.
          </p>
        </div>
      </div>
    </section>

    <section className="container pb-20">
      <div className="grid md:grid-cols-2 gap-6">
        {companies.map((c, i) => {
          const inner = (
            <>
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center p-2.5 shrink-0">
                  <img src={c.icon} alt={c.name} className="max-w-full max-h-full w-auto h-auto object-contain" />
                </div>
                <span className="font-display text-5xl font-bold text-muted-foreground/20 leading-none">{c.index}</span>
              </div>
              <div className="text-[11px] font-sub font-semibold uppercase tracking-wider text-primary mb-2">{c.tag}</div>
              <h3 className="font-display text-2xl font-semibold mb-3">{c.name}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{c.desc}</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3 text-sm">
                <span className="font-sub text-muted-foreground">NIPC <span className="text-foreground">{c.nipc}</span></span>
                {c.site ? (
                  <span className="inline-flex items-center gap-1 font-sub font-semibold text-primary">
                    {c.site} <ArrowUpRight size={14} />
                  </span>
                ) : (
                  <span className="font-sub text-muted-foreground/70">Esta sociedade</span>
                )}
              </div>
            </>
          );

          const base = "group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-soft transition-all duration-500 animate-fade-in-up";

          return c.site ? (
            <a key={c.index} href={`https://${c.site}`} target="_blank" rel="noopener noreferrer"
              style={{ animationDelay: `${i * 80}ms` }} className={`${base} block`}>
              {inner}
            </a>
          ) : (
            <div key={c.index} style={{ animationDelay: `${i * 80}ms` }} className={base}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>

    <section className="container py-20 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold">Quer fazer parte do grupo?</h2>
      <p className="mt-3 text-muted-foreground font-body">Para parcerias, aquisições ou oportunidades de investimento, fale com a sociedade-mãe.</p>
      <Button asChild variant="brand" size="xl" className="mt-8">
        <Link to="/contact">Falar com o grupo <ArrowRight /></Link>
      </Button>
    </section>
  </Layout>
);

export default Companies;
