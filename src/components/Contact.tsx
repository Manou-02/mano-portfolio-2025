import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { portfolioData } from '@/constants/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Contact() {
  const { t } = useTranslation();
  const { ref, mainControls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            data-testid="contact-title"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="contact-subtitle"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4" data-testid="contact-email">
              <div className="bg-primary/10 p-3 rounded-lg">
                <i className="fas fa-envelope text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold">{t('contact.email')}</h3>
                <p className="text-muted-foreground">{portfolioData.contact.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-testid="contact-phone">
              <div className="bg-primary/10 p-3 rounded-lg">
                <i className="fas fa-phone text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold">{t('contact.phone')}</h3>
                <p className="text-muted-foreground">{portfolioData.contact.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-testid="contact-location">
              <div className="bg-primary/10 p-3 rounded-lg">
                <i className="fas fa-map-marker-alt text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold">{t('contact.location')}</h3>
                <p className="text-muted-foreground">{portfolioData.contact.location}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-testid="contact-availability">
              <div className="bg-primary/10 p-3 rounded-lg">
                <i className="fas fa-clock text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold">{t('contact.availability')}</h3>
                <p className="text-muted-foreground">{t('contact.availabilityStatus')}</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h3 className="font-semibold mb-4" data-testid="contact-follow-title">{t('contact.followMe')}</h3>
              <div className="flex space-x-4" data-testid="contact-social-links">
                <a 
                  href={portfolioData.contact.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  data-testid="contact-github"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href={portfolioData.contact.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  data-testid="contact-linkedin"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a 
                  href={portfolioData.contact.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  data-testid="contact-twitter"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a 
                  href={portfolioData.contact.social.dribbble} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  data-testid="contact-dribbble"
                >
                  <i className="fab fa-dribbble text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Image */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern workspace setup" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="contact-workspace-image"
            />
          </motion.div>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="p-8">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold mb-4" data-testid="contact-cta-title">
                {t('contact.readyToStart')}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="contact-cta-description">
                {t('contact.letsDiscuss')}
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2 transform hover:scale-105"
                onClick={() => window.open(`mailto:${portfolioData.contact.email}`, '_blank')}
                data-testid="contact-send-message"
              >
                <i className="fas fa-paper-plane"></i>
                <span>{t('contact.sendMessage')}</span>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
