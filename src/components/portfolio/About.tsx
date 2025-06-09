import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description:
        "Proficient in React.js, Node.js, and modern web technologies",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "IoT & AI Systems",
      description:
        "Experience with ESP32, Arduino, and machine learning applications",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership",
      description:
        "Led cross-functional teams and improved user engagement by 30%",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Built AI fog detection system with 90% accuracy",
    },
  ];

  const keyStrengths = [
    "Leadership",
    "Problem Solving",
    "Decision-Making Skills",
    "Adaptability & Resilience",
    "Critical Thinking",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Solution-driven Software Developer proficient in full-stack
                  web development, IoT systems, and AI-based automation. Skilled
                  in building scalable web apps using HTML, CSS, JavaScript,
                  React.js, Node.js, and RESTful APIs, with backend integration
                  via AWS and MySQL.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Experienced with embedded systems and real-time data
                  processing (ESP32, Arduino IDE, DHT11, IR sensors) using
                  Python, C, and Java. Improved website functionality by 30%,
                  reduced traffic delays by 40% in smart traffic projects, and
                  built an AI fog detection system with 90% accuracy.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Proven ability to lead cross-functional teams and deliver
                  impactful solutions, demonstrated by projects in smart traffic
                  control, liquid dispensing automation, and AI-driven sensing.
                </p>
              </CardContent>
            </Card>

            {/* Key Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Key Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {keyStrengths.map((strength) => (
                    <Badge
                      key={strength}
                      variant="secondary"
                      className="text-sm"
                    >
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What I Bring
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
