import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import iconHolding from "@/assets/icon_holding.png";
import CompaniesShowcase from "@/components/CompaniesShowcase";

const Companies = () => (
  <Layout>
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-12 pb-8">
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

    {/* Holding — sociedade-mãe */}
    <section className="container pb-10">
      <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft flex flex-col md:flex-row md:items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-background border border-border flex items-center justify-center p-3 shrink-0">
          <img src={iconHolding} alt="Nextenergy, SGPS, Lda" className="max-w-full max-h-full w-auto h-auto object-contain" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-2xl font-bold text-muted-foreground/30 leading-none">0</span>
            <span className="text-[11px] font-sub font-semibold uppercase tracking-wider text-primary">Holding · SGPS · Sociedade-mãe</span>
          </div>
          <h2 className="font-display text-2xl font-semibold mb-1">Nextenergy, SGPS, Lda</h2>
          <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-2xl">
            Detém as participações sociais das empresas operacionais e coordena a estratégia, o capital e a governance do grupo.
          </p>
        </div>
        <div className="md:text-right shrink-0">
          <div className="text-xs font-sub uppercase tracking-wider text-muted-foreground">NIPC</div>
          <div className="font-display font-semibold">519 ### ###</div>
        </div>
      </div>
    </section>

    {/* Operating companies — interactive showcase */}
    <section className="container pb-12">
      <div className="mb-8 max-w-2xl">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Empresas operacionais</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Quatro empresas. <span className="text-gradient-brand">Uma visão de energia.</span>
        </h2>
        <p className="mt-3 text-muted-foreground font-body">
          Explore as áreas de negócio que compõem o grupo e o papel de cada uma na transição energética.
        </p>
      </div>
      <CompaniesShowcase />
    </section>

    <section className="container py-12 lg:py-16 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold">Quer fazer parte do grupo?</h2>
      <p className="mt-3 text-muted-foreground font-body">Para parcerias, aquisições ou oportunidades de investimento, fale com a sociedade-mãe.</p>
      <Button asChild variant="brand" size="xl" className="mt-8">
        <Link to="/contact">Falar com o grupo <ArrowRight /></Link>
      </Button>
    </section>
  </Layout>
);

export default Companies;
