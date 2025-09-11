import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/constants/portfolio";

export function Navigation() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
              data-testid="logo-button"
            >
              {portfolioData.siteName}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-home"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-about"
              >
                {t("nav.about")}
              </button>
              {/* <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-projects"
              >
                {t('nav.projects')}
              </button> */}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                {t("nav.contact")}
              </button>
            </div>
          </div>

          {/* Theme & Language Toggle */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-secondary rounded-full p-1">
              <Button
                variant={i18n.language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => toggleLanguage("en")}
                className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-200"
                data-testid="lang-en"
              >
                EN
              </Button>
              <Button
                variant={i18n.language === "fr" ? "default" : "ghost"}
                size="sm"
                onClick={() => toggleLanguage("fr")}
                className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-200"
                data-testid="lang-fr"
              >
                FR
              </Button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors duration-200"
              data-testid="theme-toggle"
            >
              <i
                className={`fas ${
                  theme === "dark"
                    ? "fa-sun text-amber-500"
                    : "fa-moon text-slate-400"
                }`}
              ></i>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-muted transition-colors duration-200"
              data-testid="mobile-menu-toggle"
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-home"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-about"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-projects"
              >
                {t("nav.projects")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-contact"
              >
                {t("nav.contact")}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
