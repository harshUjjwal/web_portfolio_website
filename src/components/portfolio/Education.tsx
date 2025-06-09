import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, Award, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Sharda University",
      location: "Greater Noida",
      duration: "2022 - 2026",
      grade: "CGPA: 8.20/10",
      status: "Pursuing",
      type: "Undergraduate",
      highlights: [
        "Major in Computer Science & Engineering",
        "Focus on Software Development and IoT",
        "Active in technical projects and hackathons",
        "Consistent academic performance",
      ],
    },
    {
      degree: "Intermediate - 12th",
      institution: "Modern School Vaishali",
      location: "Ghaziabad, Uttar Pradesh",
      duration: "2021 - 2022",
      grade: "Percentage: 84%",
      status: "Completed",
      type: "Higher Secondary",
      highlights: [
        "Science stream with focus on PCM",
        "Strong foundation in Mathematics and Physics",
        "Excellent academic performance",
        "Prepared for engineering entrance exams",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Pursuing"
      ? "bg-green-100 text-green-700"
      : "bg-blue-100 text-blue-700";
  };

  const getTypeColor = (type: string) => {
    return type === "Undergraduate" ? "border-purple-500" : "border-blue-500";
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation in computer science and engineering with
            consistent performance
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow border-l-4 ${getTypeColor(edu.type)}`}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="text-lg font-medium text-gray-700">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 lg:text-right">
                    <div className="flex lg:justify-end">
                      <Badge className={getStatusColor(edu.status)}>
                        {edu.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 lg:justify-end">
                      <CalendarDays className="h-4 w-4" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Grade/Performance */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="font-semibold text-gray-900">
                      Academic Performance:
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-lg font-semibold text-green-700 border-green-300"
                  >
                    {edu.grade}
                  </Badge>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education Type */}
                <div className="pt-2">
                  <Badge variant="secondary" className="text-sm">
                    {edu.type} Education
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Summary */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Academic Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    B.Tech CSE
                  </div>
                  <div className="text-gray-700">Currently Pursuing</div>
                  <div className="text-sm text-gray-600">2022-2026</div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">8.20</div>
                  <div className="text-gray-700">Current CGPA</div>
                  <div className="text-sm text-gray-600">Out of 10</div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">84%</div>
                  <div className="text-gray-700">12th Grade</div>
                  <div className="text-sm text-gray-600">Science Stream</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
