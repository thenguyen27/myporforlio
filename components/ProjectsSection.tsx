
'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Laundry Service Booking System',
      description: 'A laundry service booking platform for company in Vietnam.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'VueJS', 'Bootstrap'],
      category: 'Web Development',
      image: 'https://readdy.ai/api/search-image?query=Modern%20logistics%20dashboard%20interface%20with%20soft%20pastel%20blue%20colors%2C%20job%20matching%20system%20visualization%2C%20cute%20flat%20design%20elements%2C%20rounded%20corners%20and%20glassmorphism%20effects%2C%20friendly%20UI%20with%20trucks%20and%20delivery%20illustrations&width=400&height=250&seq=logistics-pastel&orientation=landscape',
      gradient: 'from-sky-100/80 to-cyan-100/80'
    },
    {
      title: 'Cosmetic eCommerce Platform',
      description: 'A beauty product platform featuring influencer reviews and recommendations, built using Bagisto',
      techStack: ['Laravel', 'Lirewwire', 'Docker', 'MySQL', 'Elasticsearch', 'Bagisto - Open Source Laravel eCommerce'],
      category: 'Full Stack',
      image: 'https://readdy.ai/api/search-image?query=Digital%20business%20card%20interface%20with%20pastel%20design%2C%20soft%20rounded%20elements%2C%20modern%20minimalist%20layout%20with%20glassmorphism%20effects%2C%20contact%20sharing%20features%2C%20gentle%20blue%20and%20mint%20color%20scheme&width=400&height=250&seq=business-pastel&orientation=landscape',
      gradient: 'from-cyan-100/80 to-sky-100/80'
    },
    {
      title: 'A Learning Management System (LMS)',
      description: ' A learning and class management system for the Japanese language center. ',
      techStack: ['Laravel', 'VueJS', 'Tailwind', 'MySQL', 'RESTful APIs'],
      category: 'Healthcare',
      image: '/resources/images/learning-management.jpg',
      gradient: 'from-sky-100/80 to-teal-100/80'
    },
  ];

  const categories = ['All', 'Web Development', 'Full Stack', 'Healthcare', 'Real Estate', 'Mobile App', 'E-commerce'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50/40 to-cyan-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Featured Projects </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-cyan-300 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've crafted with love, showcasing clean code and beautiful user experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-sky-300 to-cyan-300 text-white shadow-lg scale-105'
                  : 'bg-white/60 text-gray-600 hover:bg-white/80 hover:text-sky-500 border border-sky-200/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.title}-${selectedFilter}`}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50 animate-[slideIn_0.6s_ease-out] opacity-0"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="aspect-video overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => {
                    const colors = [
                      'bg-sky-100/80 text-sky-600 border-sky-200',
                      'bg-cyan-100/80 text-cyan-600 border-cyan-200', 
                      'bg-teal-100/80 text-teal-600 border-teal-200',
                      'bg-blue-100/80 text-blue-600 border-blue-200'
                    ];
                    return (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm hover:scale-105 transition-transform duration-200 ${colors[techIndex % colors.length]}`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
