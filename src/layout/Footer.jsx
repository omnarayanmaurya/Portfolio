
import { ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-brands";
import { useLocation, useNavigate } from "react-router-dom";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/omnarayanmaurya",
    label: "GitHub",
  },

  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/om-narayan-maurya-70886b308/",
    label: "LinkedIn",
  },


  {
    icon: Twitter,
    href: "https://x.com/",
    label: "Twitter",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    const targetId = href.substring(1);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
      return;
    }

    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Name and copyright */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-xl font-bold tracking-tight"
            >
              Om Narayan Maurya
              <span className="text-primary">.</span>
            </button>

            <p className="mt-2 text-sm text-muted-foreground">
              © {currentYear} Om Narayan Maurya. All rights reserved.
            </p>
          </div>

          {/* Footer navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigation(link.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass rounded-full p-2 transition-all hover:bg-primary/10 hover:text-primary"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="glass rounded-full p-2 transition-all hover:bg-primary/10 hover:text-primary"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

