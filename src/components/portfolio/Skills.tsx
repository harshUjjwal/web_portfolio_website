import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu, Globe, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Backend Development",
      skills: ["Node.js", "RESTful APIs", "Java"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Cloud",
      skills: ["MySQL", "SQL", "Amazon Web Services (AWS)"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "IoT & Embedded",
      skills: ["Arduino", "Internet of Things (IoT)", "ESP32"],
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Google Colab", "Python"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Tools & Platforms",
      skills: ["GitHub", "Chrome DevTool", "Arduino IDE"],
      color: "bg-gray-100 text-gray-600",
    },
  ];

  const allSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Java",
    "Python",
    "SQL",
    "MySQL",
    "Amazon Web Services (AWS)",
    "RESTful APIs",
    "GitHub",
    "Internet of Things (IoT)",
    "Machine Learning",
    "Arduino",
    "Google Colab",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications, IoT
            systems, and AI solutions
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Skills Overview */}
        <Card className="border-t-4 border-t-blue-600">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">
              Complete Skill Set
            </CardTitle>
            <p className="text-gray-600">Technologies I work with regularly</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {allSkills.map((skill) => (
                <Badge
                  key={skill}
                  className="text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
