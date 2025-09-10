import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>John Developer - Full-Stack Developer Portfolio</title>
        <meta 
          name="description" 
          content="Professional full-stack developer portfolio showcasing modern web development projects and skills in React, TypeScript, Node.js and more." 
        />
        <meta 
          name="keywords" 
          content="developer, portfolio, react, typescript, web development, full-stack, javascript, node.js" 
        />
        <meta property="og:title" content="John Developer - Full-Stack Developer Portfolio" />
        <meta 
          property="og:description" 
          content="Professional full-stack developer portfolio showcasing modern web development projects and skills in React, TypeScript, Node.js and more." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Developer - Full-Stack Developer Portfolio" />
        <meta 
          name="twitter:description" 
          content="Professional full-stack developer portfolio showcasing modern web development projects and skills." 
        />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
