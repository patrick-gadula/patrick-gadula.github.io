import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <img
          src="/my_picture.jpeg"
          alt="Patrick Gadula"
          className="animate-fade-in w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto mb-6 object-cover shadow-md transition-transform hover:scale-105"
        />
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-4">
              Patrick
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 ml-4">
              Gadula
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm an
            <span className="text-orange-500 font-semibold"> ILLINI </span>
            Mathematics and Computer Science graduate with experience in
            full-stack development using React, Vite, and Express. I've built
            responsive, dynamic web apps and also work with C++, Python, and
            Java for systems and backend logic.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-mute-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
