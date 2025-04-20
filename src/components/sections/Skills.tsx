
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Vue.js"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "Go", "Java"]
    },
    {
      name: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"]
    },
    {
      name: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "GitHub Actions"]
    },
    {
      name: "Tools",
      skills: ["Git", "VS Code", "Jira", "Figma", "Postman", "Jest"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
          My <span className="text-portfolio-red">Skills</span>
        </h1>
        
        <p className="text-lg mb-10 text-portfolio-text">
          Over the years, I've developed a diverse set of skills across different domains of software development.
          Below are the key technologies and tools I work with regularly.
        </p>
        
        <motion.div 
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="mb-8" variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-portfolio-red">{category.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-4 rounded-lg shadow-md border-l-4 border-portfolio-red hover:shadow-lg transition-shadow"
                  >
                    <p className="font-medium text-portfolio-text">{skill}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
