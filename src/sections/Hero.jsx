
import { Button } from "@/components/Button";

import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Django",
  "OpenCV",
  "YOLO",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "REST APIs",
  "Git",
  "GitHub",
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full max-w-full flex items-center overflow-x-clip"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div> */}

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-w-0">

          {/* Left Column - Text Content */}
          <div className="space-y-8 min-w-0 w-full">

            {/* Introduction Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary max-w-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shrink-0" />

                <span>
                  Computer Science Engineer
                </span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 min-w-0">
              <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">
                  meaningful
                </span>

                <br />

                digital solutions

                <br />

                <span className="font-serif italic font-normal text-white">
                  through code.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Om Narayan Maurya, a Computer Science Engineering
                student focused on full-stack development with the MERN
                stack and exploring the PERN stack. I'm also building my
                Python skills in backend development, computer vision,
                and AI through hands-on projects.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="/resume.pdf"
                download="Om_Narayan_Maurya_Resume.pdf"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Find me on:
              </span>

              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/omnarayanmaurya",
                  label: "GitHub",
                },

                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/om-narayan-maurya-70886b308/",
                  label: "LinkedIn",
                },


              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative min-w-0 w-full animate-fade-in animation-delay-300">
            <div className="relative w-full max-w-md mx-auto">

              {/* Image Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              {/* Profile Image Card */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Om Narayan Maurya"
                  className="block w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Availability Badge */}
                <div className="absolute -bottom-4 right-2 sm:-right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shrink-0" />

                    <span className="text-sm font-medium whitespace-nowrap">
                      Open to Opportunities
                    </span>
                  </div>
                </div>

                {/* Education Badge */}
                <div className="absolute -top-4 left-2 sm:-left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">
                    B.Tech
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="mt-20 w-full min-w-0 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I'm working with and exploring
          </p>

          <div className="relative w-full overflow-hidden">
            {/* Left Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling Skills */}
            <div className="flex w-max animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={`${skill}-${idx}`}
                  className="flex-shrink-0 px-5 sm:px-8 py-4"
                >
                  <span className="text-lg sm:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

