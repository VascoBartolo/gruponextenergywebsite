import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import GroupConstellation from "@/components/GroupConstellation";
import { ArrowRight, Building2, Compass, Coins, ShieldCheck, Target, Network } from "lucide-react";

const stats = [
  { value: "4", label: "Empresas operacionais" },
  { value: "SGPS", label: "Sociedade-mãe do grupo" },
  { value: "1", label: "Visão de grupo partilhada" },
];

const pillars = [
  { icon: Compass, title: "Estratégia", desc: "Define a visão e a direção de longo prazo do grupo, alinhando todas as participadas em torno de objetivos comuns." },
  { icon: Coins, title: "Capital", desc: "Aloca capital, gere o investimento e a estrutura financeira das empresas operacionais." },
  { icon: ShieldCheck, title: "Governance", desc: "Assegura governança, compliance e controlo de risco em todo o perímetro do grupo." },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO — centered, with the group constellation */}
      <section className="relative overflow-hidden bg-dot-grid">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="container relative py-12 lg:py-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-sub font-semibold tracking-wider uppercase shadow-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              Holding · SGPS · Sociedade-mãe
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Uma visão. <span className="text-gradient-brand">Várias empresas.</span> Uma energia.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl font-body leading-relaxed">
              Nextenergy, SGPS detém as participações sociais das empresas operacionais e coordena a estratégia, o capital e a governance do grupo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="brand" size="xl">
                <Link to="/empresas">Conhecer as empresas <ArrowRight /></Link>
              </Button>
              <Button asChild variant="brand-outline" size="xl">
                <Link to="/grupo">Sobre o grupo</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 lg:mt-12">
            <GroupConstellation />
          </div>
        </div>

        {/* Stats — inline row with dividers */}
        <div className="container relative pb-12">
          <div className="mx-auto max-w-3xl flex flex-col sm:flex-row rounded-2xl border border-border bg-card/70 backdrop-blur-sm divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden shadow-soft">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 px-8 py-7 text-center hover:bg-gradient-brand-soft transition-colors duration-500">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-brand">{s.value}</div>
                <div className="mt-2 text-xs font-sub uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE HOLDING DOES — numbered cards */}
      <section className="container py-12 lg:py-20">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">O papel da holding</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Coordenamos o grupo, sem nos substituirmos a ele.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} style={{ animationDelay: `${i * 120}ms` }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft animate-fade-in-up overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <p.icon className="text-primary-foreground" size={26} />
                </div>
                <span className="font-display text-3xl font-bold text-muted-foreground/25">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild variant="brand-outline" size="lg">
            <Link to="/grupo">Como funciona o grupo <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      {/* WHY THE GROUP — list left, text right (mirrored vs operational site) */}
      <section className="bg-brand-dark text-background py-12 lg:py-20 relative overflow-hidden bg-dot-grid-light">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            {[
              { icon: Building2, t: "Participações Sociais", d: "Detenção e gestão das participações nas empresas operacionais." },
              { icon: Target, t: "Visão Comum", d: "Alinhamento estratégico entre todas as empresas do grupo." },
              { icon: ShieldCheck, t: "Governance & Controlo", d: "Compliance, gestão de risco e reporte transversal ao grupo." },
            ].map((item) => (
              <div key={item.t} className="flex gap-5 p-5 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className="font-sub font-semibold text-lg">{item.t}</h4>
                  <p className="text-sm text-background/60 mt-1 font-body">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">O Grupo</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Estrutura sólida, empresas <span className="text-gradient-brand">com autonomia</span>.</h2>
            <p className="mt-6 text-background/70 font-body leading-relaxed max-w-lg">
              Cada empresa operacional mantém a sua identidade, equipa e foco de mercado. A holding garante a visão comum, a disciplina de capital e a governance que permitem a todas crescer com confiança.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm font-sub">
              <Network className="text-primary" size={20} />
              <span className="text-background/80">Um grupo, quatro empresas operacionais.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 lg:py-20">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 bg-gradient-brand text-primary-foreground text-center shadow-brand">
          <div className="absolute inset-0 bg-dot-grid-light opacity-60" />
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)" }} />
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Quer falar com o Grupo Nextenergy?</h2>
            <p className="font-body opacity-90">Para parcerias, investidores ou questões institucionais, fale com a sociedade-mãe do grupo.</p>
            <Button asChild size="xl" className="bg-background text-primary font-semibold shadow-soft transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-background hover:shadow-brand">
              <Link to="/contact">Contactar o grupo <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
