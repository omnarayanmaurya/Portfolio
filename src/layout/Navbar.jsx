
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Qualifications", href: "#qualifications" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to homepage sections from any page.
  const handleNavigation = (href) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    const targetId = href.substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#141a1f]/90 backdrop-blur-xl py-3 shadow-none border-none"
          : "bg-transparent py-5 border-none shadow-none"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg md:text-xl font-bold text-secondary-foreground whitespace-nowrap"
          >
            Om Narayan Maurya<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => handleNavigation("#contact")}
              className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-secondary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-[#141a1f]/95 backdrop-blur-xl rounded-xl p-4 flex flex-col gap-4 border-none shadow-none">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleNavigation("#contact")}
                className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium text-center hover:opacity-90 transition-opacity"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

