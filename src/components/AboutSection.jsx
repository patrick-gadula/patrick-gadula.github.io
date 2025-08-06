import { Code, Calculator, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer & Full-Stack Developer
            </h3>
            <p className="text-muted-foreground">
              I studied Software Engineering at UIC for two years (GPA: 3.83)
              before transferring to UIUC, where I completed my degree in
              Mathematics and Computer Science (GPA: 3.5). In summer 2024, I
              interned at WishTender as a Software Engineer, building and
              optimizing features for a gift-scheduling platform using React,
              Node.js, and PostgreSQL.
            </p>

            <p className="text-muted-foreground">
              I'm driven by an interest in building well-engineered software
              it's web apps, backend systems, or tools that solve real problems.
              My background in mathematics helps me approach development with
              precision and structure, and my experience as a poker player has
              shaped how I think about logic, risk, and strategy in both code
              and life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development </h4>
                  <p className="text-muted-foreground">
                    Building full-stack applications with frameworks like React,
                    Vite, and Express to deliver fast and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mathematics </h4>
                  <p className="text-muted-foreground">
                    Strong foundation in logical reasoning and problem-solving,
                    which I apply directly to writing efficient and reliable
                    code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Experience leading technical projects with a focus on clear
                    planning, communication, and delivering results under tight
                    timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
