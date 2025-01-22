import { motion } from "framer-motion";

const projects = [
  {
    title: "Environmental Impact Assessment",
    description: "Comprehensive analysis of urban development impacts",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    category: "Analysis",
  },
  {
    title: "Satellite Data Processing",
    description: "Google Earth Engine automation for land cover change",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Programming",
  },
  {
    title: "Conservation Planning",
    description: "Habitat restoration and species protection strategies",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Planning",
  },
];

export const Portfolio = () => {
  return (
    <section className="section-container bg-gray-50" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore my recent work in environmental engineering and Earth science
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
                <button className="bg-white text-black px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
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
    </section>
  );
};