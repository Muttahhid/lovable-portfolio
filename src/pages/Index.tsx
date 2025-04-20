
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { ContentSlider } from "@/components/ContentSlider";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  
  // Enable smooth scrolling when changing sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);
  
  // Listen for custom navigation events
  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };
    
    document.addEventListener('changeSection', handleSectionChange as EventListener);
    
    return () => {
      document.removeEventListener('changeSection', handleSectionChange as EventListener);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-portfolio-lightGray">
      {!isMobile && <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />}
      {isMobile && <MobileSidebar activeSection={activeSection} setActiveSection={setActiveSection} />}
      <ContentSlider activeSection={activeSection} />
    </div>
  );
};

export default Index;
