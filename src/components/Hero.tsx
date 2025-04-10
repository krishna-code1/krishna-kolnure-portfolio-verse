
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-space">
          Hi, I'm <span className="gradient-text">Krishna</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-foreground/80">
          Computer Engineering Student
        </h2>
        <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
          Passionate about software development, problem-solving, and emerging technologies.
          Currently pursuing B.Tech at MIT Academy of Engineering.
        </p>
        
        <button 
          onClick={scrollToAbout}
          className="flex items-center justify-center mx-auto mt-8 text-primary hover:text-secondary transition-colors duration-300"
        >
          <span className="mr-2">Explore More</span>
          <ArrowDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
