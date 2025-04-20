
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Tech Innovation Award",
      organization: "Industry Tech Summit",
      year: "2022",
      description: "Recognized for developing an innovative AI-powered code review assistant that increased team productivity by 30%."
    },
    {
      title: "Open Source Contributor",
      organization: "React Ecosystem",
      year: "2021",
      description: "Contributed several key improvements to a popular React library with over 10k stars on GitHub."
    },
    {
      title: "Patent: Distributed Systems Optimization",
      organization: "US Patent Office",
      year: "2020",
      description: "Co-inventor of a patented method for optimizing data flow in distributed computing environments."
    },
    {
      title: "Conference Speaker",
      organization: "Multiple Tech Conferences",
      year: "2019-2022",
      description: "Delivered talks on microservices architecture, serverless technologies, and frontend performance optimization."
    },
    {
      title: "Master's Thesis Excellence",
      organization: "Tech University",
      year: "2016",
      description: "Received honors for thesis on 'Scalable Architectures for Real-time Data Processing'."
    }
  ];

  const certificates = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2021",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2020",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2019",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      year: "2018",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    }
  ];

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
          <span className="text-portfolio-red">Achievements</span> & Recognition
        </h1>
        
        <p className="text-lg mb-10 text-portfolio-text">
          Throughout my career, I've been fortunate to receive recognition for my work and contributions
          to the field of software engineering. Here are some highlights:
        </p>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-portfolio-red"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-portfolio-text">{achievement.title}</h3>
                <p className="text-portfolio-accent font-medium">{achievement.year}</p>
              </div>
              <p className="text-portfolio-lightText mb-3">{achievement.organization}</p>
              <p className="text-portfolio-text">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-portfolio-red">
            <Award className="h-6 w-6" />
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-portfolio-red bg-opacity-10 hover:bg-opacity-0 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1 text-portfolio-text">{cert.name}</h3>
                  <p className="text-portfolio-lightText">{cert.issuer} | {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
