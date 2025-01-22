import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="section-container" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interested in collaboration? Let's connect and discuss how we can work together.
        </p>
      </motion.div>

      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition-colors duration-300"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-gray-600 hover:text-primary transition-colors duration-300"
        >
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
};