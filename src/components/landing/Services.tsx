import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Globe, 
  Smartphone, 
  LineChart 
} from 'lucide-react';

const services = [
  {
    name: 'Custom Web Development',
    description: 'Tailored websites built with modern technologies to meet your unique business needs.',
    icon: Code2,
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and enhance brand identity.',
    icon: Palette,
  },
  {
    name: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for speed, SEO, and conversion rates.',
    icon: Zap,
  },
  {
    name: 'E-Commerce Solutions',
    description: 'Full-featured online stores that drive sales and grow your business.',
    icon: Globe,
  },
  {
    name: 'Responsive Design',
    description: 'Websites that look perfect on any device, from desktop to mobile.',
    icon: Smartphone,
  },
  {
    name: 'Analytics & Insights',
    description: 'Data-driven solutions to track performance and make informed decisions.',
    icon: LineChart,
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-50" 
      id="services"
    >
      <style>{`
        @keyframes move-grid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }

        .moving-grid {
          background-size: 40px 40px;
          /* Darker grid lines (Slate-400: #94a3b8) for better visibility */
          background-image: 
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px);
          animation: move-grid 4s linear infinite;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .opacity-0 {
          opacity: 0;
        }
      `}</style>

      {/* Moving Grid Background Layer 
          Increased opacity from 0.3 to 0.5 to make it pop more
      */}
      <div className="absolute inset-0 moving-grid opacity-50 pointer-events-none" />
      
      {/* Radial mask to fade grid out at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_95%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div 
          className={`mx-auto max-w-3xl text-center mb-20 ${
            isVisible ? 'animate-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
           Guaranteed Services
          </h2>
          <p className="text-lg leading-8 text-slate-700 font-medium">
            Comprehensive web solutions to help your business thrive in the digital world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.name} 
              style={{ animationDelay: `${index * 150 + 200}ms` }}
              className={`group relative flex flex-col items-start p-8 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out ${
                isVisible ? 'animate-in' : 'opacity-0'
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                <service.icon 
                  className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" 
                  aria-hidden="true" 
                />
              </div>

              <h3 className="text-xl font-bold leading-7 text-slate-900 mb-3">
                {service.name}
              </h3>
              
              <p className="text-base leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}