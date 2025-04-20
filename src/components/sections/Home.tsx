
import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/use-portfolio-data";

export const Home = () => {
  const { profile } = usePortfolioData();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-portfolio-text"
          variants={itemVariants}
        >
          <span className="text-portfolio-red">Hello, I'm</span> <br />
          {profile.name}
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl font-medium mb-8 text-portfolio-lightText"
          variants={itemVariants}
        >
          {profile.title}
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-10 max-w-2xl text-portfolio-text"
          variants={itemVariants}
        >
          Passionate about creating elegant solutions to complex problems. 
          Specializing in web applications, cloud architecture, and scalable systems.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          <a 
            href="#contact" 
            className="px-6 py-3 bg-portfolio-red text-white font-medium rounded-lg hover:bg-portfolio-darkRed transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.dispatchEvent(new CustomEvent('changeSection', { detail: 'contact' }));
            }}
          >
            Contact Me
          </a>
          <a 
            href="#about" 
            className="px-6 py-3 border-2 border-portfolio-red text-portfolio-red font-medium rounded-lg hover:bg-portfolio-red hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.dispatchEvent(new CustomEvent('changeSection', { detail: 'about' }));
            }}
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
