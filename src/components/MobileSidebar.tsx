
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const MobileSidebar = ({ activeSection, setActiveSection }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact Me" }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      <Button 
        onClick={toggleSidebar} 
        className="md:hidden fixed top-4 left-4 z-50 bg-portfolio-red hover:bg-portfolio-darkRed"
        size="icon"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-portfolio-red text-white z-40 md:hidden"
          >
            <div className="flex flex-col h-full py-16">
              <div className="flex flex-col items-center py-8">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white mb-4">
                  <img src="/lovable-uploads/c7cb68dc-233d-441b-b840-0fd443bcdfcf.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-xl font-bold">Muttahhid Jomeer</h1>
                <p className="text-xs opacity-80 mt-1">Full-Stack Software Engineer</p>
              </div>

              <nav className="mt-6 flex-1 px-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? "bg-white text-portfolio-red font-medium"
                            : "text-white hover:bg-portfolio-darkRed"
                        }`}
                      >
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 mt-auto">
                <p className="text-sm opacity-70 text-center">© 2025 Muttahhid Jomeer</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
