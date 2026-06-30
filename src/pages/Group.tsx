import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Compass, Coins, ShieldCheck, Building2, Target, LineChart, ArrowRight, Check } from "lucide-react";

const functions = [
  { icon: Building2, title: "Detenção de Participações", desc: "Detém as participações sociais das empresas operacionais, consolidando-as num grupo coerente.", features: ["Estrutura societária clara", "Gestão da carteira de participadas", "Consolidação do grupo"] },
  { icon: Compass, title: "Estratégia do Grupo", desc: "Define a visão de longo prazo e coordena a estratégia transversal a todas as empresas.", features: ["Visão e direção de longo prazo", "Alinhamento entre participadas", "Prioridades de crescimento"] },
  { icon: Coins, title: "Capital & Investimento", desc: "Aloca capital, gere a estrutura financeira e avalia oportunidades de investimento.", features: ["Alocação de capital", "Gestão financeira do grupo", "Avaliação de investimentos"] },
  { icon: ShieldCheck, title: "Governance & Compliance", desc: "Assegura a governança, o controlo interno e o cumprimento normativo em todo o perímetro.", features: ["Modelo de governance", "Controlo interno e risco", "Compliance e reporte"] },
  { icon: Target, title: "Coordenação Operacional", desc: "Promove sinergias e partilha de boas práticas entre as empresas do grupo, respeitando a sua autonomia.", features: ["Sinergias entre empresas", "Partilha de boas práticas", "Autonomia operacional"] },
  { icon: LineChart, title: "Acompanhamento & Reporte", desc: "Monitoriza o desempenho das participadas e garante transparência junto dos stakeholders.", features: ["Monitorização de desempenho", "Reporte transversal", "Transparência institucional"] },
];

const Group = () => (
  <Layout>
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-12 pb-8">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary">O Grupo</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            A sociedade-mãe que coordena <span className="text-gradient-brand">todo o grupo</span>.
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Nextenergy, SGPS é a holding do Grupo Nextenergy. Detém as participações sociais das empresas operacionais e coordena a estratégia, o capital e a governance — para que cada empresa cresça com foco e o grupo cresça com disciplina.
          </p>
        </div>
      </div>
    </section>

    <section className="container pb-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {functions.map((s, i) => (
          <div key={s.title} style={{ animationDelay: `${i * 80}ms` }}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-soft transition-all duration-500 animate-fade-in-up">
            <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <s.icon className="text-primary-foreground" size={26} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">{s.desc}</p>
            <ul className="space-y-2">
              {s.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-primary" /> <span className="font-body">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-brand-dark text-background py-12 lg:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Como o grupo cria valor.</h2>
          <p className="mt-4 text-background/70 font-body">Quatro princípios que orientam a relação entre a holding e as empresas operacionais.</p>
        </div>
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {["Visão", "Capital", "Governance", "Autonomia"].map((step, i) => (
            <div key={step} className="relative p-6 rounded-2xl bg-background/5 border border-background/10">
              <div className="font-display text-5xl font-bold text-gradient-brand">0{i + 1}</div>
              <h4 className="mt-4 font-sub font-semibold text-lg">{step}</h4>
              <p className="text-sm text-background/60 mt-1 font-body">
                {[
                  "Uma direção estratégica comum, partilhada por todas as empresas do grupo.",
                  "Alocação disciplinada de capital, ao serviço do crescimento sustentável.",
                  "Governança, controlo de risco e transparência em todo o perímetro.",
                  "Cada empresa mantém a sua identidade, equipa e foco de mercado.",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-12 lg:py-16 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold">Estratégia. Capital. Governance. Crescimento.</h2>
      <p className="mt-3 text-muted-foreground font-body">Conheça as empresas que compõem o Grupo Nextenergy.</p>
      <Button asChild variant="brand" size="xl" className="mt-8">
        <Link to="/empresas">Ver as empresas <ArrowRight /></Link>
      </Button>
    </section>
  </Layout>
);

export default Group;
