import { Link } from "react-router-dom";
import groupLogo from "@/assets/g_next_colorido.png";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

const Logo = ({ className = "", imgClassName = "" }: LogoProps) => {
  return (
    <Link
      to="/"
      aria-label="Grupo Nextenergy — início"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      <img
        src={groupLogo}
        alt="Grupo Nextenergy"
        className={`block h-11 md:h-12 w-auto object-contain ${imgClassName}`}
      />
    </Link>
  );
};

export default Logo;
