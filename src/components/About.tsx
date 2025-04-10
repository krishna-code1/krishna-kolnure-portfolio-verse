
import React from 'react';
import { Calendar, MapPin, School } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text font-space">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div className="card-gradient rounded-lg p-6 md:p-8 float">
            <p className="text-foreground/90 leading-relaxed mb-6">
              I am a passionate and dedicated Computer Engineering student at MIT Academy of Engineering (MITAOE), 
              currently pursuing my B.Tech. Born in 2006, I have a keen interest in software development, 
              problem-solving, and emerging technologies. I am continuously learning and improving my skills 
              in programming, web development, and artificial intelligence.
            </p>
            
            <div className="space-y-3 text-foreground/80">
              <div className="flex items-center">
                <School className="w-5 h-5 text-primary mr-3" />
                <span>B.Tech in Computer Engineering at MITAOE</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <span>Born in 2006</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span>India</span>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground/90">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Programming", "Web Development", "Problem Solving", 
                "Artificial Intelligence", "Data Structures", "Shell Scripting"
              ].map((skill, index) => (
                <div key={index} className="card-gradient rounded-lg p-4 text-center glow">
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
