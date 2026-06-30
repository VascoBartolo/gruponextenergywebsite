import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Building2, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada. Entraremos em contacto brevemente.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      <section className="relative bg-dot-grid overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="container relative pt-12 pb-8">
          <div className="space-y-6 animate-fade-in-up">
            <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary">Contactos</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Fale com a <span className="text-gradient-brand">sociedade-mãe</span>.
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Para questões institucionais, parcerias, investidores ou imprensa, contacte a Nextenergy, SGPS. A nossa equipa responde com brevidade.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {[
            { icon: Mail, title: "Email", value: "info@gruponextenergy.com", href: "mailto:info@gruponextenergy.com" },
            { icon: Phone, title: "Telefone", value: "+351 296 242 547", href: "tel:+351296242547" },
            { icon: Building2, title: "Nextenergy, SGPS, Lda", value: "NIPC: 519 ### ###" },
            { icon: MapPin, title: "Sede", value: "Portugal" },
          ].map((c) => (
            <a key={c.title} href={c.href} className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                  <c.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="text-xs font-sub uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  <div className="font-display font-semibold text-lg mt-1">{c.value}</div>
                </div>
              </div>
            </a>
          ))}

          <div className="p-6 rounded-2xl bg-gradient-brand text-primary-foreground lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            <div className="font-sub font-semibold mb-2">Horário</div>
            <div className="text-sm opacity-90 font-body">Seg — Sex · 09:00 — 18:00</div>
            <div className="text-sm opacity-90 font-body mt-1">Sáb, Dom e Feriados · Encerrado</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-sub">Nome completo</Label>
              <Input id="name" required placeholder="O seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-sub">Email</Label>
              <Input id="email" type="email" required placeholder="nome@empresa.com" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-sub">Telefone</Label>
              <Input id="phone" placeholder="+351 ..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="font-sub">Empresa / Organização</Label>
              <Input id="company" placeholder="Opcional" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="font-sub">Assunto</Label>
            <Input id="subject" placeholder="Parceria, investidores, imprensa..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-sub">Mensagem</Label>
            <Textarea id="message" required rows={6} placeholder="Como podemos ajudar?" />
          </div>
          <Button type="submit" variant="brand" size="lg" disabled={sending} className="w-full sm:w-auto">
            {sending ? "A enviar..." : <>Enviar mensagem <Send size={16} /></>}
          </Button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
