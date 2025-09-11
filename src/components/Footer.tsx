import { useTranslation } from "react-i18next";
import { portfolioData } from "@/constants/portfolio";
import dayjs from "dayjs";

export function Footer() {
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
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3
              className="text-xl font-bold gradient-text mb-4"
              data-testid="footer-brand"
            >
              {portfolioData.siteName}
            </h3>
            <p
              className="text-muted-foreground text-sm"
              data-testid="footer-tagline"
            >
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-4"
              data-testid="footer-quick-links-title"
            >
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm" data-testid="footer-quick-links">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="footer-about-link"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="footer-projects-link"
                >
                  {t("nav.projects")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="footer-contact-link"
                >
                  {t("nav.contact")}
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="footer-resume-link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold mb-4"
              data-testid="footer-services-title"
            >
              {t("footer.services")}
            </h4>
            <ul className="space-y-2 text-sm" data-testid="footer-services">
              <li>
                <span className="text-muted-foreground">
                  {t("footer.webDev")}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {t("footer.mobileApps")}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {t("footer.uiux")}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  {t("footer.consulting")}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-semibold mb-4"
              data-testid="footer-contact-title"
            >
              {t("nav.contact")}
            </h4>
            <ul
              className="space-y-2 text-sm text-muted-foreground"
              data-testid="footer-contact-info"
            >
              <li data-testid="footer-email">{portfolioData.contact.email}</li>
              <li data-testid="footer-phone">{portfolioData.contact.phone}</li>
              <li data-testid="footer-location">
                {portfolioData.contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p
            className="text-sm text-muted-foreground"
            data-testid="footer-copyright"
          >
            <span>&copy; {dayjs().year()} &nbsp;</span>
            {t("footer.copyright")}
          </p>

          <div
            className="flex space-x-6 mt-4 md:mt-0"
            data-testid="footer-social-links"
          >
            <a
              href={portfolioData.contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="footer-github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={portfolioData.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="footer-linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <a
              href={portfolioData.contact.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="footer-twitter"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="footer-email-link"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
