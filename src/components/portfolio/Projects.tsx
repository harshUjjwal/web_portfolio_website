import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Code, ExternalLink, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Green Corridor Traffic Light System",
      subtitle: "Final Year Project",
      duration: "Jan 2025 - Present",
      status: "In Progress",
      description:
        "Developing a smart traffic light control system using IoT and mapping to create green corridors for efficient traffic flow. Integrating real-time data analysis and route optimisation algorithms to reduce congestion in urban areas.",
      technologies: [
        "Python",
        "ESP32",
        "Arduino IDE",
        "Machine Learning",
        "IR Sensor",
        "APIs",
        "Artificial Intelligence",
      ],
      highlights: [
        "Real-time Data Analysis",
        "Route Optimization",
        "Urban Traffic Management",
      ],
      type: "Academic Project",
      githubLink: null,
      liveLink: null,
    },
    {
      title: "Smart Traffic Innovation with Emergency Vehicle Prioritisation",
      subtitle: "SIH Participation",
      duration: "Sep 2024 - Dec 2024",
      status: "Completed",
      description:
        "Used AI and sensor-based technology to detect emergency vehicles and dynamically control traffic signals. Participated in the Smart India Hackathon designing a smart traffic system to prioritise emergency vehicles.",
      technologies: [
        "Python",
        "ESP32",
        "Arduino IDE",
        "Machine Learning",
        "IR Sensor",
      ],
      highlights: [
        "Smart India Hackathon",
        "AI-based Detection",
        "40% Traffic Delay Reduction",
      ],
      type: "Competition",
      githubLink: null,
      liveLink: null,
    },
    {
      title: "Automatic Liquid Dispenser with Notification Display",
      subtitle: "IoT Automation Project",
      duration: "Aug 2024 - Nov 2024",
      status: "Completed",
      description:
        "Built an automated dispensing system that measures and dispenses precise liquid quantities integrating infrared sensors and IoT. Displayed real-time liquid levels on an LCD screen and sent notifications for monitoring.",
      technologies: [
        "Arduino IDE",
        "DHT11 Sensor",
        "LCD Display",
        "L293d Motor Driver",
      ],
      highlights: [
        "Precise Measurement",
        "Real-time Monitoring",
        "Automated Dispensing",
      ],
      type: "IoT Project",
      githubLink:
        "https://github.com/harshUjjwal/Automatic-liquid-dispenser-with-notification-",
      liveLink: null,
    },
    {
      title: "Responsive Real Estate Website",
      subtitle: "Web Development Project",
      duration: "May 2024 - Aug 2024",
      status: "Completed",
      description:
        "Developed a responsive real estate web application inspired by platforms like MagicBricks, enabling users to browse, search, and filter property listings. Implemented an intermediate level of responsiveness for mobile and tablet views using media queries and flexible layouts.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Git",
        "Chrome DevTool",
      ],
      highlights: [
        "Responsive Design",
        "Property Search",
        "Mobile Optimization",
      ],
      type: "Web Development",
      githubLink: "https://github.com/harshUjjwal/real-estate-website",
      liveLink: "https://harshujjwal.github.io/real-estate-website/",
    },
    {
      title: "Fog Density-Based Safe Driving System",
      subtitle: "AI & IoT Safety Project",
      duration: "Jan 2024 - Mar 2024",
      status: "Completed",
      description:
        "Implemented an IoT-based system using the DHT11 sensor and ultrasonic sensors to detect fog density and recommend safe driving speeds. Designed an AI voice notification system to alert drivers about visibility conditions and vehicle proximity.",
      technologies: [
        "Arduino IDE",
        "DHT11 Sensor",
        "APIs",
        "Artificial Intelligence",
      ],
      highlights: ["90% Accuracy", "AI Voice Alerts", "Safety Enhancement"],
      type: "AI Project",
      githubLink:
        "https://github.com/harshUjjwal/fog-density-based-safe-driving-system",
      liveLink: null,
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "In Progress"
      ? "bg-green-100 text-green-700"
      : "bg-blue-100 text-blue-700";
  };

  const getTypeColor = (type: string) => {
    const colors = {
      "Academic Project": "border-purple-500 bg-purple-50",
      Competition: "border-orange-500 bg-orange-50",
      "IoT Project": "border-blue-500 bg-blue-50",
      "Web Development": "border-green-500 bg-green-50",
      "AI Project": "border-red-500 bg-red-50",
    };
    return colors[type as keyof typeof colors] || "border-gray-500 bg-gray-50";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of innovative solutions in web development, IoT systems,
            and AI applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 ${getTypeColor(project.type)} border-l-4`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-gray-900 leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-gray-600">
                      {project.subtitle}
                    </p>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <Badge
                        key={highlightIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-2">
                  {project.liveLink && (
                    <Button
                      className="w-full group"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      View Live Project
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      className="w-full group"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  )}
                  {!project.liveLink && !project.githubLink && (
                    <Button variant="outline" className="w-full" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Summary */}
        <Card className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Project Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-indigo-600">5+</div>
                <div className="text-gray-700">Major Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-indigo-600">90%</div>
                <div className="text-gray-700">AI System Accuracy</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-indigo-600">40%</div>
                <div className="text-gray-700">Traffic Delay Reduction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-indigo-600">SIH</div>
                <div className="text-gray-700">Hackathon Participant</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
