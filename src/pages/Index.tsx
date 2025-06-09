import { useEffect, useState } from "react";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "certifications",
        "contact",
      ];
      const headerHeight = 64;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= headerHeight + 50 &&
            rect.bottom > headerHeight + 50
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">Harsh Ujjwal</h3>
            <p className="text-gray-400">Computer Science Engineer</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>harshujjwaloffical@gmail.com</span>
              <span>•</span>
              <span>8588830775</span>
              <span>•</span>
              <span>Vaishali, Ghaziabad, UP</span>
            </div>
            <div className="border-t border-gray-800 pt-4">
              <p className="text-sm text-gray-500">
                © 2025 Harsh Ujjwal. Built with React.js and TailwindCSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
