import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    { name: "Environmental Analysis", level: 90 },
    { name: "GIS & Remote Sensing", level: 85 },
    { name: "Earth Engine Programming", level: 80 },
    { name: "Data Visualization", level: 75 },
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
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6">
            As an Environmental Engineer with expertise in Google Earth Engine programming,
            I combine technical skills with environmental science to create sustainable solutions
            for complex environmental challenges.
          </p>
          <p className="text-gray-600">
            My work focuses on leveraging advanced technologies for environmental monitoring,
            assessment, and conservation efforts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
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