
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text font-space">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto card-gradient rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground/90">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <a href="mailto:krishnakolnure@gmail.com" className="hover:text-primary transition-colors">
                    krishnakolnure@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <a href="tel:+919391873887" className="hover:text-primary transition-colors">
                    +91 9391873887
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-foreground/90">Social Links</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/krishna-code1" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground/90">Send Message</h3>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 bg-muted/50 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-2 bg-muted/50 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full px-4 py-2 bg-muted/50 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
