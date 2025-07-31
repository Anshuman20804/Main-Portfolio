import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
} from "react-icons/si";
const About = () => {
    const skills = [
    {
      name: "JavaScript (ES6+)",
      logo: (
        <SiJavascript className="w-8 h-8 text-yellow-500" />
      ),
    },
    {
      name: "React.js",
      logo: (
        <SiReact className="w-8 h-8 text-blue-600" />
      ),
    },
    {
      name: "HTML5 & CSS3",
      logo: (
        <div className="flex space-x-2">
          <SiHtml5 className="w-8 h-8 text-orange-600" />
          <SiCss3 className="w-8 h-8 text-blue-500" />
        </div>
      ),
    },
    {
      name: "Tailwind CSS",
      logo: (
        <SiTailwindcss className="w-8 h-8 text-blue-400" />
      ),
    },
    {
      name: "Node.js",
      logo: (
        <SiNodedotjs className="w-8 h-8 text-green-500" />
      ),
    },
    {
      name: "Express.js",
      logo: (
        <SiExpress className="w-8 h-8 text-gray-800" />
      ),
    },
    {
      name: "MongoDB",
      logo: (
        <SiMongodb className="w-8 h-8 text-green-600" />
      ),
    },
    {
      name: "MySQL",
      logo: (
        <SiMysql className="w-8 h-8 text-blue-700" />
      ),
    },
    {
      name: "C",
      logo: (
        <SiC className="w-8 h-8 text-blue-800" />
      ),
    },
    {
      name: "C++",
      logo: (
        <SiCplusplus className="w-8 h-8 text-blue-600" />
      ),
    },
    {
      name: "Java",
      logo: (
        <FaJava className="w-8 h-8 text-red-600" />
      ),
    },
    {
      name: "Python",
      logo: (
        <SiPython className="w-8 h-8 text-blue-500" />
      ),
    },
    {
      name: "Git & GitHub",
      logo: (
        <div className="flex space-x-2">
          <SiGit className="w-8 h-8 text-orange-700" />
          <SiGithub className="w-8 h-8 text-gray-900" />
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* About Me */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
            About Me
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              I'm a final-year B.Tech CSE undergraduate with a passion for
              building modern web apps. I started with HTML/CSS and now work
              with React, Node.js, and MongoDB to create full-stack projects.
            </p>
            <p>
              I enjoy turning ideas into code and designing clean, responsive
              UIs. I'm currently exploring backend development and machine
              learning while actively seeking internships to apply and grow my
              skills.
            </p>
            <p>
              When I am not coding, you will find me researching new tech,
              improving personal projects, or learning about system design.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-black mb-6">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 group flex items-center space-x-3"
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {skill.logo}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section - aligned to left */}
        <div className="max-w-6xl px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-black mb-4">Education</h3>
          <div className="bg-white p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-900">
              B.Tech in Computer Science Engineering
            </h4>
            <p className="text-gray-600 text-sm">MCKV Institute of Engineering</p>
            <p className="text-gray-500 text-sm">2022 - 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
