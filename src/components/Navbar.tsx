import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Início" },
  { to: "/grupo", label: "O Grupo" },
  { to: "/empresas", label: "Empresas" },
  { to: "/contact", label: "Contactos" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-20">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium font-sub transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gradient-brand rounded-full" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="brand" size="sm">
            <NavLink to="/contact">Contactar</NavLink>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => `px-4 py-3 rounded-lg font-sub ${isActive ? "bg-gradient-brand-soft text-foreground" : "text-muted-foreground"}`}>
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="brand" className="mt-2"><NavLink to="/contact" onClick={() => setOpen(false)}>Contactar</NavLink></Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
