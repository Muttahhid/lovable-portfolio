
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "../../hooks/use-portfolio-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Achievements = () => {
  const { achievements } = usePortfolioData();

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
          {achievements.highlights.map((achievement, index) => (
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
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-red">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.certificates.map((cert, index) => (
              <Dialog key={index}>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                      <p className="text-portfolio-lightText">{cert.issuer} | {cert.year}</p>
                    </div>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-portfolio-red hover:text-portfolio-darkRed">
                        <ZoomIn className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
                <DialogContent className="max-w-3xl w-[90vw]">
                  <DialogHeader>
                    <DialogTitle>{cert.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="aspect-[1/1.414] relative rounded-lg overflow-hidden mb-4">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-portfolio-text">{cert.issuer} | {cert.year}</p>
                      <p className="text-portfolio-lightText">{cert.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
