
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "User Management System",
      description: "A shell script project for managing users in Linux systems. Features include adding users, deleting users, and managing user permissions.",
      technologies: ["Shell Scripting", "Linux", "User Management"],
      github: "https://github.com/krishna-code1/project.sh/blob/main/user_management.sh",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      title: "To Do List Application",
      description: "A shell script based task management application that allows users to add, complete, and delete tasks.",
      technologies: ["Shell Scripting", "Task Management", "CLI"],
      github: "https://github.com/krishna-code1/newproject.sh/blob/main/project.sh",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text font-space">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-gradient rounded-lg overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-foreground/90">{project.title}</h3>
                
                <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-muted px-3 py-1 rounded-full text-xs text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-secondary transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
