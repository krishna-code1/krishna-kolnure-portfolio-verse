
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-muted">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/70 mb-4 md:mb-0">
            © {currentYear} KRISHNAKANT KOLNURE. All rights reserved.
          </div>
          
          <div className="text-foreground/70">
            Made with 💜 and code
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
