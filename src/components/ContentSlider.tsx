
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

interface ContentSliderProps {
  activeSection: string;
}

export const ContentSlider = ({ activeSection }: ContentSliderProps) => {
  // Variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -50
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const renderSection = () => {
    // Using a dedicated wrapper for animations
    return (
      <motion.div
        key={activeSection}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {(() => {
          switch (activeSection) {
            case "home":
              return <Home />;
            case "about":
              return <About />;
            case "skills":
              return <Skills />;
            case "achievements":
              return <Achievements />;
            case "contact":
              return <Contact />;
            default:
              return <Home />;
          }
        })()}
      </motion.div>
    );
  };

  return (
    <div className="ml-0 md:ml-72 lg:ml-80 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </div>
  );
};
