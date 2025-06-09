import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  CalendarDays,
  ExternalLink,
  Award,
  BookOpen,
} from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Master Data Analytics With This Job Ready Course",
      subtitle: "Python SQL Excel Stats Interview Prep",
      provider: "30Days Coding",
      duration: "Dec 2024 - Jan 2025",
      type: "Virtual",
      status: "Recently Completed",
      category: "Data Analytics",
      skills: ["Python", "SQL", "Excel", "Statistics", "Interview Preparation"],
      description:
        "Comprehensive course covering data analytics fundamentals, advanced Python programming, SQL database management, and statistical analysis for job readiness.",
      isRecent: true,
    },
    {
      title: "How To Use ChatGPT And Generative AI To Help Create Content",
      subtitle: "AI Content Creation & Automation",
      provider: "Justin B, Virtual (Udemy)",
      duration: "May 2024 - Jun 2024",
      type: "Online",
      status: "Completed",
      category: "Artificial Intelligence",
      skills: [
        "ChatGPT",
        "Generative AI",
        "Content Creation",
        "AI Tools",
        "Automation",
      ],
      description:
        "Learned to leverage ChatGPT and generative AI tools for content creation, automation, and productivity enhancement in professional workflows.",
      isRecent: false,
    },
    {
      title: "Internet Of Things (IoT)",
      subtitle: "IoT Systems & Development",
      provider: "Skill Vertex",
      duration: "May 2023 - Jun 2023",
      type: "Virtual",
      status: "Completed",
      category: "IoT Development",
      skills: ["IoT", "Embedded Systems", "Sensors", "Arduino", "Connectivity"],
      description:
        "Comprehensive training in IoT concepts, embedded systems programming, sensor integration, and connected device development.",
      isRecent: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Data Analytics": "border-blue-500 bg-blue-50",
      "Artificial Intelligence": "border-purple-500 bg-purple-50",
      "IoT Development": "border-green-500 bg-green-50",
    };
    return (
      colors[category as keyof typeof colors] || "border-gray-500 bg-gray-50"
    );
  };

  const getStatusColor = (status: string) => {
    return status === "Recently Completed"
      ? "bg-green-100 text-green-700"
      : "bg-blue-100 text-blue-700";
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and skill development through specialized
            courses and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 ${getCategoryColor(cert.category)} border-l-4 h-full flex flex-col`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg text-gray-900 leading-tight">
                      {cert.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-gray-600">
                      {cert.subtitle}
                    </p>
                  </div>
                  {cert.isRecent && (
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      New
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-medium">{cert.provider}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDays className="h-4 w-4" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.type}
                    </Badge>
                    <Badge
                      className={getStatusColor(cert.status)}
                      variant="secondary"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col">
                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  {cert.description}
                </p>

                {/* Skills Learned */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Skills Acquired
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Badge variant="secondary" className="text-sm font-medium">
                    {cert.category}
                  </Badge>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button variant="outline" className="w-full group">
                    <FileText className="mr-2 h-4 w-4" />
                    View Certificate
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Summary */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Learning Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-700">Certifications</div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-gray-700">Skills Acquired</div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">3</div>
                  <div className="text-gray-700">Specializations</div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <CalendarDays className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">2024</div>
                  <div className="text-gray-700">Recent Training</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Committed to continuous learning and staying updated with the
                latest technologies in software development, AI, and data
                analytics.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;
