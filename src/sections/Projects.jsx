
import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-brands";
import { useNavigate } from "react-router-dom";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
{
title: "Vyavastha — Project Management Platform",
description:
"A full-stack project management platform enabling teams to create projects, assign tasks, set deadlines, track progress, and collaborate through real-time project-specific chat.",
image: "/projects/vyavastha/dashboard.png",
tags: [
"React",
"Node.js",
"Express.js",
"MongoDB",
"Tailwind CSS",
"Socket.IO",
"JWT",
],
link: "#",
github: "#",
details: "/projects/vyavastha",
},
{
  title: "Bazzar — MERN E-Commerce Platform",
  description:
    "A full-stack MERN e-commerce platform featuring product listings, category filtering, user authentication, shopping cart management, and checkout functionality.",
  image: "/projects/bazzar/home.png",
  tags: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
  link: "#",
  github: "#",
  details: "/projects/bazzar",
},
{
title: "QuickAI — AI SaaS Platform",
description:
"An AI-powered platform offering article writing, blog title generation, AI image generation, background and object removal, resume review, and a community image gallery.",
image: "/projects/quickai/home.png",
tags: [
"React",
"Node.js",
"Express.js",
"PostgreSQL",
"Clerk",
"AI APIs",
],
link: "https://quick-ai-bice-eight.vercel.app",
github: "https://github.com/omnarayanmaurya/QuickAI",
details: "/projects/quickai",
},
];


export const Projects = () => {
  const navigate = useNavigate();

  const openProject = (project) => {
    if (project.details) {
      navigate(project.details);
    }
  };

  const handleCardKeyDown = (event, project) => {
    if (!project.details) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project);
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my projects, featuring full-stack applications and
            AI-powered tools built to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              role={project.details ? "link" : undefined}
              tabIndex={project.details ? 0 : undefined}
              aria-label={
                project.details
                  ? `View ${project.title} project details`
                  : undefined
              }
              onClick={() => openProject(project)}
              onKeyDown={(event) => handleCardKeyDown(event, project)}
              className={`group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 ${
                project.details
                  ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  : ""
              }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {project.details && (
                    <span className="p-3 rounded-full glass pointer-events-none">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  )}

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} GitHub repository`}
                      onClick={(event) => event.stopPropagation()}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                {project.details && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openProject(project);
                      }}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        GitHub
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

