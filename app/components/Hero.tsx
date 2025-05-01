"use client";

import { useEffect, useState } from 'react';
import { Code, DollarSign, BookOpen, Rocket } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-white via-white to-orange-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mb-6">
              Build Your <span className="text-[#f57d56]">Future</span> <br />
              Code Your <span className="text-[#f57d56]">Success</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Empowering young entrepreneurs with the technical skills and business acumen to turn their ideas into successful startups.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#f57d56] hover:bg-[#e06a47] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                Explore Courses
              </button>
              <button className="border-2 border-black hover:bg-black hover:text-white text-black px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Get Startup Guidance
              </button>
            </div>
          </div>
          
          <div 
            className={`md:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 relative overflow-hidden border-t-4 border-[#f57d56]">
              <div className="absolute -right-16 -top-16 bg-orange-100 w-32 h-32 rounded-full opacity-60"></div>
              <div className="absolute -left-8 -bottom-8 bg-orange-100 w-24 h-24 rounded-full opacity-60"></div>
              
              <h2 className="text-2xl font-bold mb-6 text-black">Why Choose YoungFounder?</h2>
              
              <div className="space-y-4 relative">
                {[
                  { 
                    icon: <Code className="text-[#f57d56]" />, 
                    title: "Technical Excellence", 
                    description: "Learn coding from industry experts" 
                  },
                  { 
                    icon: <DollarSign className="text-[#f57d56]" />, 
                    title: "Funding Guidance", 
                    description: "Navigate the complex world of startup funding" 
                  },
                  { 
                    icon: <BookOpen className="text-[#f57d56]" />, 
                    title: "Practical Curriculum", 
                    description: "Real-world projects and case studies" 
                  },
                  { 
                    icon: <Rocket className="text-[#f57d56]" />, 
                    title: "Networking Opportunities", 
                    description: "Connect with peers and industry leaders" 
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-black">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;