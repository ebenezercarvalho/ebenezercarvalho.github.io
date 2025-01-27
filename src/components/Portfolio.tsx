import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const projects = [
  {
    title: "Monitor de Eutrofização",
    description: "Avaliação espaço-temporal da qualidade da água",
    detailedDescription: "Avaliação rápida da qualidade da água no Reservatório do Funil, RJ por meio de imagens de satélite. Esse projeto utiliza as bases de dados do Google Earth Engine e identifica o aumento da clorofila por meio do índice NDCI.",
    image: "https://github-production-user-asset-6210df.s3.amazonaws.com/65116965/406779895-3f373aa3-351a-4129-81e2-0222b18e88bc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250127%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250127T013525Z&X-Amz-Expires=300&X-Amz-Signature=e60f3bd66816bc10062a969cb6b5cb0eff23b07abe9feae6a7c9559814cc9242&X-Amz-SignedHeaders=host",
    category: "Análises ambientais",
  },
  {
    title: "Satellite Data Processing",
    description: "Google Earth Engine automation for land cover change",
    detailedDescription: "Development of automated scripts in Google Earth Engine to process and analyze satellite imagery for detecting land cover changes over time. This project implemented machine learning algorithms to classify different land use types and track deforestation patterns in the Amazon rainforest.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Programming",
  },
  {
    title: "Conservation Planning",
    description: "Habitat restoration and species protection strategies",
    detailedDescription: "A comprehensive conservation planning project focused on endangered species habitat restoration. This initiative involved mapping critical habitats, developing protection strategies, and implementing restoration measures. The project successfully increased local biodiversity and created sustainable wildlife corridors.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Planning",
  },
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(
    null
  );

  return (
    <section className="section-container bg-gray-50" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Projetos de destaque</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Aqui estão alguns dos projetos mais recentes desenvolvidos em diversas áreas
          como análises ambientais e processamento de dados de satélite. Clique em uma imagem para ver mais detalhes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white text-black px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  Ver detalhes
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <span className="inline-block mt-4 text-sm text-primary font-medium">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <DialogDescription className="text-base leading-relaxed text-gray-700">
              {selectedProject?.detailedDescription}
            </DialogDescription>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {selectedProject?.category}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};