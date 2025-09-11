import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { portfolioData } from "@/constants/portfolio";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={portfolioData.personal.profileImage}
              alt="Developer profile photo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl ring-4 ring-primary/20 object-cover"
              data-testid="profile-image"
            />
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span data-testid="hero-greeting">{t("hero.greeting")}</span>
              <span className="gradient-text block" data-testid="hero-name">
                {t("hero.name")}
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              data-testid="hero-description"
            >
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              {/* Project section  */}
              {/* <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
                data-testid="view-work-button"
              >
                <span>{t("hero.viewWork")}</span>
                <i className="fas fa-arrow-right"></i>
              </Button> */}
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border border-border hover:bg-secondary text-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2"
                data-testid="get-in-touch-button"
              >
                <span>{t("hero.getInTouch")}</span>
                <i className="fas fa-envelope"></i>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a
              href={portfolioData.contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-xl"
              data-testid="social-github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={portfolioData.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-xl"
              data-testid="social-linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <a 
              href={portfolioData.contact.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-xl"
              data-testid="social-twitter"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-xl"
              data-testid="social-email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
