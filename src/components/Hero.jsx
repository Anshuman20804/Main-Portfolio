import SplitText from "./ScreenText";
import BlurText from "./BlueText";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const name = "Anshuman"; // ✅ Capital A, rest lowercase

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#F3F4F6] text-black w-full px-4"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Animated Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 flex justify-center flex-wrap">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={`inline-block rain-letter ${
                showText ? "animate-rain-drop" : ""
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg md:text-2xl text-gray-600 mb-10 transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Aspiring software developer focused on building reliable, scalable,
          and user-centric web applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 font-medium"
          >
            Explore My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 font-medium"
          >
            Let’s Connect
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes rainDrop {
          0% {
            transform: translateY(-200px);
            opacity: 0;
          }
          60% {
            transform: translateY(20px);
            opacity: 1;
          }
          80% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        .animate-rain-drop {
          animation: rainDrop 0.8s ease-out forwards;
          animation-fill-mode: forwards;
        }

        .rain-letter {
          opacity: 0;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default Hero;


