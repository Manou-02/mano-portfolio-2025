import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { portfolioData } from '@/constants/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Projects() {
  const { t, i18n } = useTranslation();
  const { ref, mainControls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            data-testid="projects-title"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="projects-subtitle"
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`project-card-${project.id}`}
            >
              <Card className="bg-card border border-border rounded-lg overflow-hidden card-hover">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${project.id}`}
                />
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                    {i18n.language === 'fr' ? project.descriptionFr : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4" data-testid={`project-technologies-${project.id}`}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      className="text-primary hover:text-primary/80 font-medium transition-colors duration-200 inline-flex items-center gap-2"
                      data-testid={`project-live-demo-${project.id}`}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>{t('projects.liveDemo')}</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 inline-flex items-center gap-2"
                      data-testid={`project-code-${project.id}`}
                    >
                      <i className="fab fa-github"></i>
                      <span>{t('projects.code')}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            className="px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2"
            data-testid="view-all-projects"
          >
            <span>{t('projects.viewAll')}</span>
            <i className="fab fa-github"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
