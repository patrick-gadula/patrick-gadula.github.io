import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projects = [
  {
    id: 1,
    title: "Veterinary-Clinical Case Chatbot",
    description:
      "Q&A chatbot that uses FAISS and TF-IDF to retrieve relevant veterinary clinical cases and textbook excerpts in response to user-entered symptoms or diagnoses.",
    image: "/projects/project1.png",
    tags: ["RAG", "FAISS", "TF-IDF", "Machine-Learning", "GPT 3.5"],
    demoUrl: "#",
    githubUrl: "https://github.com/patrick-gadula/Veterinary-Chatbot",
  },
  {
    id: 2,
    title: "MVP Case Site for Fundrasing Event",
    description:
      "Built a prototype loot box platform for a live fundraising event, featuring spinning case animations, item drop logic, and backend support for real-time item distribution and balance tracking.",
    image: "/projects/project2.png",
    tags: ["React", "Vite", "Express", "Prisma", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ptkEssentials: Minecraft Casino Roulette Simulator",
    description:
      "Java-based Minecraft plugin simulating a configurable roulette game with odds, payouts, and visual effects, built using the Spigot API and designed for multiplayer use on survival and minigame servers.",
    image: "/projects/project3.png",
    tags: ["Java", "Documentation", "Bukkit", "Spigot", "Minecraft"],
    demoUrl: "#",
    githubUrl: "https://github.com/patrick-gadula/ptkEssentials",
  },
];

export const ProjectsSection = () => {
  const { toast } = useToast();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My most prestigious projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    {project.id === 2 ? (
                      <button
                        onClick={() =>
                          toast({
                            title: "🔒 Private Repository",
                            description: (
                              <span>
                                This project is{" "}
                                <strong>available upon request</strong>. <br />
                                Contact me directly if you'd like access.
                              </span>
                            ),
                          })
                        }
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </button>
                    ) : (
                      <a
                        href={project.githubUrl}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/patrick-gadula"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
