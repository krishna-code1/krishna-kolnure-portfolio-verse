
import React from 'react';
import { Code, BookOpen, Gamepad2, Music } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Coding",
      description: "Exploring new programming languages and frameworks to expand my development skills.",
      icon: <Code className="w-10 h-10 text-primary mb-4" />
    },
    {
      title: "Reading",
      description: "Reading technical books and articles to stay updated with the latest technology trends.",
      icon: <BookOpen className="w-10 h-10 text-primary mb-4" />
    },
    {
      title: "Gaming",
      description: "Playing strategy and puzzle games that challenge my problem-solving abilities.",
      icon: <Gamepad2 className="w-10 h-10 text-primary mb-4" />
    },
    {
      title: "Music",
      description: "Listening to music while coding to enhance focus and productivity.",
      icon: <Music className="w-10 h-10 text-primary mb-4" />
    }
  ];

  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text font-space">Hobbies & Interests</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              className="card-gradient rounded-lg p-6 text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2"
            >
              {hobby.icon}
              <h3 className="text-xl font-bold mb-3 text-foreground/90">{hobby.title}</h3>
              <p className="text-foreground/70">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
