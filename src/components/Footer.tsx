import { Link } from "react-router-dom";
import groupLogoWhite from "@/assets/g_next_branco.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-dark text-background mt-32">
    <div className="container py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2 space-y-4">
        <Link to="/" aria-label="Grupo Nextenergy — início" className="inline-flex">
          <img src={groupLogoWhite} alt="Grupo Nextenergy" className="h-12 w-auto object-contain" />
        </Link>
        <p className="text-sm text-background/60 max-w-sm font-body">
          Nextenergy, SGPS — sociedade-mãe do Grupo Nextenergy. Detém as participações sociais das empresas operacionais e coordena a estratégia, o capital e a governance do grupo.
        </p>
      </div>
      <div>
        <h4 className="font-sub font-semibold mb-4 text-sm tracking-wider uppercase">Navegação</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
          <li><Link to="/grupo" className="hover:text-primary transition-colors">O Grupo</Link></li>
          <li><Link to="/empresas" className="hover:text-primary transition-colors">Empresas</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contactos</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-sub font-semibold mb-4 text-sm tracking-wider uppercase">Contactos</h4>
        <ul className="space-y-3 text-sm text-background/70">
          <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> info@gruponextenergy.com</li>
          <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +351 296 242 547</li>
          <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Portugal</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-6 text-xs text-background/50 flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} Nextenergy, SGPS, Lda. Todos os direitos reservados.</span>
        <span>NIPC: 519 ### ###</span>
      </div>
    </div>
  </footer>
);

export default Footer;
