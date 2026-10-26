import { Code2, Lightbulb, Rocket, Database } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building web applications with React, Node.js, and Express, while developing my skills across the MERN and PERN stacks.",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description:
      "Working with REST APIs, SQL, MySQL, and MongoDB, while exploring PostgreSQL and building reliable backend systems.",
  },
  {
    icon: Lightbulb,
    title: "Python & AI",
    description:
      "Exploring Python for backend development, computer vision, and machine learning, with Django as my next step in Python web development.",
  },
  {
    icon: Rocket,
    title: "Learning by Building",
    description:
      "Turning concepts into practical projects, strengthening problem-solving skills, and continuously improving through hands-on development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building real-world applications,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science Engineering student passionate about
                software development, problem-solving, and building practical
                applications. I enjoy learning how different parts of a system
                work together, from designing user interfaces to developing
                backend services and managing databases.
              </p>

              <p>
                My current focus is full-stack web development, particularly
                the MERN stack (MongoDB, Express.js, React, and Node.js), while
                also expanding toward the PERN stack with PostgreSQL. Through
                hands-on projects, I'm developing my understanding of REST APIs,
                authentication, database design, and complete application
                workflows.
              </p>

              <p>
                Alongside web development, I'm building on my Python
                background through computer vision and machine learning using
                tools such as OpenCV, YOLO, NumPy, Pandas, and Scikit-learn.
                I'm also progressing toward Django for Python backend
                development, with a long-term interest in integrating AI
                capabilities into useful software products.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to become a versatile software developer who can
                build complete applications, work confidently with data, and
                turn emerging technologies into practical solutions."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};