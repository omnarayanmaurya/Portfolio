
const qualifications = [
  {
    period: "Sep 2023 – Jun 2027",
    role: "Bachelor of Technology (B.Tech)",
    institution: "BBDNIIT, Lucknow",
    description:
      "Pursuing a degree in Computer Science Engineering, building a foundation in programming, software development, databases, and computer science fundamentals.",
    score: "75.17%",
  },
  {
    period: "Intermediate",
    role: "Higher Secondary Education",
    institution: "Army Public School, Allahabad",
    description:
      "Completed intermediate education, developing a foundation in analytical thinking and academic problem-solving.",
    score: "87.8%",
  },
  {
    period: "High School",
    role: "Secondary Education",
    institution: "Army Public School, Allahabad",
    description:
      "Completed secondary education with a strong academic foundation.",
    score: "84.8%",
  },
];

export const Qualifications = () => {
  return (
    <section id="qualifications" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
            Education
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6
            animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            My academic{" "}
            <span className="font-serif italic font-normal text-white">
              qualifications.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My educational journey and the academic foundation behind my
            interest in software development and technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Qualification Items */}
          <div className="space-y-12">
            {qualifications.map((qualification, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {qualification.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {qualification.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {qualification.institution}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {qualification.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                        {qualification.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

