import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    { name: "Análises ambientais", level: 90 },
    { name: "GIS & Sensoriamento Remoto", level: 85 },
    { name: "Google Earth Engine", level: 80 },
    // { name: "Data Visualization", level: 75 },
  ];

  return (
    <section className="section-container" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
          <p className="text-gray-600 mb-6">
            Estudante de Mestrado em Engenharia Ambiental na linha de Gestão Sustentável de
             Recursos hídricos pela <b>Universidade Estadual do Rio de Janeiro</b>, com licenciatura
             em Biologia, também pela UERJ e Biomedicina pela USS. Atualmente trabalho na 
             área de saneamento ambiental e recursos hídricos. Desenvolvo soluções tecnológicas 
             para monitoramento ambiental, avaliação e conservação de recursos naturais.
          </p>
          <p className="text-gray-600">
            Meu trabalho se concentra na utilização de diferentes tecnologias para monitoramento,
            avaliação e esforços de conservação ambiental.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Habilidades técnicas</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};