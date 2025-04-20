
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact Me" }
  ];

  return (
    <motion.div 
      className="bg-portfolio-red text-white min-h-screen w-full md:w-72 lg:w-80 fixed left-0 top-0 flex flex-col"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center py-12">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white mb-6">
          <img src="/lovable-uploads/c7cb68dc-233d-441b-b840-0fd443bcdfcf.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold">John Developer</h1>
        <p className="text-sm opacity-80 mt-1">Full-Stack Software Engineer</p>
      </div>

      <nav className="mt-10 flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
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
        <p className="text-sm opacity-70 text-center">© 2025 John Developer</p>
      </div>
    </motion.div>
  );
};
