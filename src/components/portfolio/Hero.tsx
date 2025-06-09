import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import React from "react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

// Using a placeholder for the actual photo - in production, you'd host this image
const harshProfileImage = "/api/placeholder/300/300"; // This will be replaced with actual image

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                Available for Opportunities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Harsh Ujjwal</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Computer Science Engineer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Solution-driven Software Developer proficient in full-stack web
                development, IoT systems, and AI-based automation. Building
                scalable applications with modern technologies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>harshujjwaloffical@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>8588830775</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Vaishali, Ghaziabad, Uttar Pradesh</span>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/harshUjjwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-ujjwal-94a26b281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => onNavigate("contact")}
                size="lg"
                className="text-base"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate("projects")}
                className="text-base"
              >
                <Download className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>

            {/* Tech Stack Preview */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "JavaScript",
                  "Python",
                  "AWS",
                  "IoT",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-50 to-indigo-100">
                <img
                  src="./photo/myphoto.jpg"
                  alt="Harsh Ujjwal - Computer Science Engineer"
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback =
                      target.nextElementSibling as HTMLDivElement;
                    if (fallback) {
                      fallback.style.display = "flex";
                    }
                  }}
                />
                <div
                  className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">👨‍💻</div>
                    <p className="text-sm">
                      Place myphoto.jpg in the /photo directory
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
