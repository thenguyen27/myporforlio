
'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    teamProjects: 0
  });

useEffect(() => {
  const duration = 2000;

  const targets: Record<string, number> = {
    experience: 1.5,
    projects: 3,
    teamProjects: 3
  };

  const intervals: Record<string, NodeJS.Timeout> = {};

  Object.keys(targets).forEach(key => {
    const increment = targets[key] / (duration / 50);
    let current = 0;

    intervals[key] = setInterval(() => {
      current += increment;
      if (current >= targets[key]) {
        setCounters(prev => ({ ...prev, [key]: targets[key] }));
        clearInterval(intervals[key]);
      } else {
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 50);
  });

  return () => {
    Object.values(intervals).forEach(clearInterval);
  };
}, []);


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full mb-8"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate developer who believes that great software is not just about functionality - 
                it's about creating <span className="px-2 py-1 bg-sky-100/80 text-sky-600 rounded-lg font-semibold">beautiful experiences</span> that users love.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I enjoy enhancing <span className="px-2 py-1 bg-cyan-100/80 text-cyan-600 rounded-lg font-semibold">Code Efficiency</span> and 
                <span className="px-2 py-1 bg-teal-100/80 text-teal-600 rounded-lg font-semibold ml-1">System Scalability</span>. 
                I value <strong>Teamwork</strong>, <strong>Clear Communication</strong>, and <strong>Professional Growth</strong> above all else.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group text-center bg-gradient-to-br from-sky-100/60 to-sky-200/40 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/50">
                <div className="text-3xl font-bold text-sky-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.experience}+
                </div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
              
              <div className="group text-center bg-gradient-to-br from-cyan-100/60 to-cyan-200/40 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/50">
                <div className="text-3xl font-bold text-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.projects}
                </div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              
              <div className="group text-center bg-gradient-to-br from-teal-100/60 to-teal-200/40 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/50">
                <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.teamProjects}
                </div>
                <div className="text-gray-700 font-medium">Clients Worked With</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-sky-50/80 via-cyan-50/60 to-teal-50/80 rounded-3xl p-6 backdrop-blur-sm border border-white/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-graduation-cap-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Engineer at Nguyen Tat Thanh University</h4>
                  <p className="text-gray-600 text-sm">Graduate in Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-200/30 via-cyan-200/30 to-teal-200/30 rounded-full blur-3xl scale-110 animate-pulse" style={{animationDuration: '4s'}}></div>
            
            <div className="relative bg-gradient-to-br from-sky-100/60 to-cyan-100/40 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20developer%20workspace%20illustration%20with%20pastel%20colors%2C%20coding%20setup%20with%20multiple%20monitors%2C%20modern%20desk%20with%20plants%20and%20coffee%2C%20soft%20blue%20and%20mint%20color%20scheme%2C%20minimalist%20design%2C%20flat%20style%20illustration%20with%20glassmorphism%20elements&width=500&height=400&seq=about-workspace&orientation=landscape"
                alt="Developer Workspace"
                className="w-full h-full object-cover object-top rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-sky-300 to-cyan-300 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                <i className="ri-code-line text-lg"></i>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                <i className="ri-palette-line text-lg"></i>
              </div>
              <div className="absolute top-4 -right-4 bg-gradient-to-r from-teal-300 to-sky-300 text-white p-2 rounded-lg shadow-lg animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
                <i className="ri-heart-fill text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
