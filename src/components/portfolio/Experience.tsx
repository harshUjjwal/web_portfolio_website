import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Briefcase, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Inclusion Software Solutions, Mohali",
      type: "Paid | ₹5000/month stipend",
      duration: "May 2025 - Aug 2025",
      isUpcoming: true,
      achievements: [
        "Built responsive, user-friendly websites using HTML, CSS, and JavaScript",
        "Assisted in debugging, code optimization, and feature implementation",
        "Gained experience with real-time client requirements and version control systems",
        "Enhanced code quality and team collaboration by regularly participating in code reviews and peer learning sessions",
        "Worked on live web projects alongside senior developers, contributing to both frontend and backend development",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "Code Review"],
    },
    {
      role: "Software Development Internship",
      company: "Inclusion Software Solutions, Mohali",
      type: "Unpaid",
      duration: "May 2024 - Aug 2024",
      isUpcoming: false,
      achievements: [
        "Developed dynamic web applications using HTML, CSS, JavaScript, and React.js to enhance user experience and engagement",
        "Led frontend and backend integration, improving website functionality and boosting user engagement by 30%",
        "Assisted in building and integrating RESTful APIs to ensure seamless communication between client-side and server-side applications",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "RESTful APIs",
        "Full-Stack",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on experience in software development with real-world projects
            and measurable impact
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow ${exp.isUpcoming ? "border-l-4 border-l-green-500" : "border-l-4 border-l-blue-500"}`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      {exp.role}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <span className="hidden sm:block">•</span>
                      <Badge
                        variant={exp.isUpcoming ? "default" : "secondary"}
                        className="w-fit"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDays className="h-4 w-4" />
                    <span className="font-medium">{exp.duration}</span>
                    {exp.isUpcoming && (
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        Upcoming
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Key Contributions & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">30%</div>
                <div className="text-gray-700">User Engagement Improvement</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-gray-700">Professional Internships</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">
                  Full-Stack
                </div>
                <div className="text-gray-700">Development Experience</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
