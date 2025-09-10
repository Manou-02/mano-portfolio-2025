import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { portfolioData } from '@/constants/portfolio';
import { Badge } from '@/components/ui/badge';

export function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
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
            data-testid="about-title"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="about-subtitle"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-description-1">
              {t('about.description1')}
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-description-2">
              {t('about.description2')}
            </p>
            
            {/* Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-primary">{portfolioData.personal.stats.projects}</div>
                <div className="text-sm text-muted-foreground">{t('about.projects')}</div>
              </div>
              <div className="text-center" data-testid="stat-years">
                <div className="text-3xl font-bold text-primary">{portfolioData.personal.stats.years}</div>
                <div className="text-sm text-muted-foreground">{t('about.years')}</div>
              </div>
              <div className="text-center" data-testid="stat-commits">
                <div className="text-3xl font-bold text-primary">{portfolioData.personal.stats.commits}</div>
                <div className="text-sm text-muted-foreground">{t('about.commits')}</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Skills */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8" data-testid="technical-skills-title">
              {t('about.technicalSkills')}
            </h3>
            
            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <h4 className="font-semibold mb-3 text-primary" data-testid="frontend-title">Frontend</h4>
                <div className="flex flex-wrap gap-2" data-testid="frontend-skills">
                  {portfolioData.skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div>
                <h4 className="font-semibold mb-3 text-primary" data-testid="backend-title">Backend</h4>
                <div className="flex flex-wrap gap-2" data-testid="backend-skills">
                  {portfolioData.skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div>
                <h4 className="font-semibold mb-3 text-primary" data-testid="tools-title">Tools & Others</h4>
                <div className="flex flex-wrap gap-2" data-testid="tools-skills">
                  {portfolioData.skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
