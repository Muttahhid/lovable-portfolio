
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, Phone, MapPin, Linkedin, Github, Twitter 
} from "lucide-react";

export const Contact = () => {
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
          Get in <span className="text-portfolio-red">Touch</span>
        </h1>
        
        <p className="text-lg mb-10 text-portfolio-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out using the form below or through my contact information.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-portfolio-red">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-portfolio-red mr-3" />
                  <a href="mailto:hello@johndeveloper.com" className="text-portfolio-text hover:text-portfolio-red">
                    hello@johndeveloper.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-portfolio-red mr-3" />
                  <a href="tel:+1234567890" className="text-portfolio-text hover:text-portfolio-red">
                    +123 456 7890
                  </a>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-portfolio-red mr-3" />
                  <p className="text-portfolio-text">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-portfolio-red">Social Links</h2>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-portfolio-red rounded-full flex items-center justify-center hover:bg-portfolio-darkRed transition-colors">
                  <Linkedin className="text-white w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-portfolio-red rounded-full flex items-center justify-center hover:bg-portfolio-darkRed transition-colors">
                  <Github className="text-white w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-portfolio-red rounded-full flex items-center justify-center hover:bg-portfolio-darkRed transition-colors">
                  <Twitter className="text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="w-full border-portfolio-lightText"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border-portfolio-lightText"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full border-portfolio-lightText"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={6}
                  className="w-full border-portfolio-lightText"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-portfolio-red hover:bg-portfolio-darkRed text-white px-8 py-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
