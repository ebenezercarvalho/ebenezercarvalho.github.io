import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('portfolio');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1462331321792-cc44368b8894?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Satellite view of Earth's water resources"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 text-center text-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <Avatar className="w-32 h-32 border-4 border-secondary">
            <AvatarImage src="https://avatars.githubusercontent.com/u/65116965?s=400&u=a941f8a880c23b5484c3293ddd077bd85723b0f9&v=4" alt="Ebenézer Carvalho" />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ebenézer Carvalho
          <br />
          <span className="text-secondary">Portfolio</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Biólogo, especialista em ciências ambientais e gestão sustentável de recursos hídricos, com experiência em análise de dados ambientais e desenvolvimento de soluções inovadoras para a preservação do meio ambiente.
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