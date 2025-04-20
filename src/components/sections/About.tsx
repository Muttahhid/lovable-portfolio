
import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/use-portfolio-data";

export const About = () => {
  const { about } = usePortfolioData();

  return (
    <motion.div 
      className="min-h-screen py-16 px-8 md:px-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-portfolio-text">
          About <span className="text-portfolio-red">Me</span>
        </h1>
        
        <div className="space-y-6 text-portfolio-text">
          <p className="text-lg">{about.introduction}</p>
          <p className="text-lg">{about.education}</p>
          <p className="text-lg">{about.interests}</p>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-portfolio-red">Experience</h2>
          
          <div className="space-y-8">
            {about.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-portfolio-red pl-6 py-2">
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="text-portfolio-lightText">{exp.company} | {exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
