import { Code2 } from "lucide-react";

export default function Navbar() {

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Prevents the URL from changing to /#section
    const element = document.getElementById(id);
    if (element) {
      // 80px offset calculation for the fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo: Almeda */}
        {/* Clicking the logo scrolls to top (Hero) */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-blue-400 transition"
        >
          <Code2 className="h-6 w-6 text-blue-500" />
          <span>Almeda<span className="text-blue-500">.</span></span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')} 
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            HOME
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')} 
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            SERVICES
          </a>
           <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')} 
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            PROJECTS
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')} 
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            ABOUT
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}