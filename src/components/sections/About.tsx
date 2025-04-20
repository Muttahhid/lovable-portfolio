
import { motion } from "framer-motion";

export const About = () => {
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
          <p className="text-lg">
            I'm a dedicated software engineer with over 5 years of experience in developing web applications
            and scalable backend services. My journey in software development began when I was in college,
            building small projects that eventually grew into a passion for creating robust, user-friendly applications.
          </p>
          
          <p className="text-lg">
            I hold a Master's degree in Computer Science from Tech University, where I specialized in distributed systems
            and cloud computing. This educational background, combined with my professional experience, has equipped me
            with a strong foundation in both theoretical concepts and practical application development.
          </p>
          
          <p className="text-lg">
            When I'm not coding, you can find me hiking in the mountains, reading about new technologies,
            or contributing to open-source projects. I believe in continuous learning and staying updated
            with the latest trends in the tech industry.
          </p>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-portfolio-red">Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-portfolio-red pl-6 py-2">
              <h3 className="text-xl font-medium">Senior Software Engineer</h3>
              <p className="text-portfolio-lightText">Tech Solutions Inc. | 2020 - Present</p>
              <p className="mt-2">Led the development of a microservices architecture that improved system reliability by 40%.</p>
            </div>
            
            <div className="border-l-4 border-portfolio-red pl-6 py-2">
              <h3 className="text-xl font-medium">Software Developer</h3>
              <p className="text-portfolio-lightText">WebCraft Studios | 2018 - 2020</p>
              <p className="mt-2">Developed and maintained multiple client websites and web applications using React and Node.js.</p>
            </div>
            
            <div className="border-l-4 border-portfolio-red pl-6 py-2">
              <h3 className="text-xl font-medium">Junior Developer</h3>
              <p className="text-portfolio-lightText">CodeLab | 2016 - 2018</p>
              <p className="mt-2">Started as an intern and grew into a full-time role, working on frontend development with JavaScript and CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
