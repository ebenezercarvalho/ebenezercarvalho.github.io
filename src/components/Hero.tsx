import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('portfolio');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
          alt="Nature landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ebenézer Carvalho
          <br />
          <span className="text-secondary">Ciências ambientais</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Especialista em ciências ambientais na gestão sustentável de recursos hídricos, com vasta experiência em análise de dados ambientais e desenvolvimento de soluções inovadoras para a preservação do meio ambiente.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={scrollToProjects}
          className="bg-secondary text-black px-8 py-3 rounded-full font-medium hover:bg-secondary-light transition-colors duration-300"
        >
          Ver projetos
        </motion.button>
      </div>
    </div>
  );
};