
'use client';

export default function CareerSection() {
  const timeline = [
    {
      company: 'HOPEE SOLUTIONS',
      position: 'FRESHER WEB DEVELOPER',
      period: '02/2024 - 07/2025',
      description: 'Responsible for developing and maintaining web applications across various domains, including e-commerce, education, and service booking. Participated in both frontend and backend development using Laravel, VueJS, Livewire, and Bagisto.',
      skills: ['Laravel', 'Livewire', 'Vuejs', 'Docker', 'MySQL', 'Git', 'RESTful APIs', 'Figma', 'Tailwind CSS'],
      icon: 'ri-trophy-line',
      gradient: 'from-sky-300 to-cyan-300',
      bgGradient: 'from-sky-100/60 to-cyan-100/40'
    },
    {
      company: 'HOPEE SOLUTIONS',
      position: 'INTERN WEB DEVELOPER',
      period: '11/2023 - 01/2024',
      description: 'Researched and gained hands-on experience with the Laravel framework to build dynamic web applications. Developed a strong foundation in basic PHP programming and web development principles. Demonstrated effective communication by presenting individual ideas and collaborating efficiently in group settings. Proven ability to work under pressure, meeting deadlines and maintaining quality standards. Showcased a proactive attitude in exploring and learning new technologies to enhance technical skills.',
      skills: ['Laravel', 'Tailwind', 'VueJS', 'MySQL', 'Git', 'Coding conventions', 'Teamwork', 'Communication'],
      icon: 'ri-code-line',
      gradient: 'from-cyan-300 to-teal-300',
      bgGradient: 'from-cyan-100/60 to-teal-100/40'
    },
    {
      company: 'NGUYEN TAT THANH UNIVERSITY',
      position: 'INFORMATION TECHNOLOGY',
      period: '09/2019 - 04/2023',
      description: 'Completed coursework includes Data Structures and Algorithms, Web Development, Database Management.',
      skills: ['Laravel', 'PHP', 'HTML/CSS', 'JavaScript', 'MySQL', 'Jquery', 'Bootstrap'],
      icon: 'ri-seedling-line',
      gradient: 'from-teal-300 to-emerald-300',
      bgGradient: 'from-teal-100/60 to-emerald-100/40'
    }
  ];

  return (
    <section id="career" className="py-20 bg-gradient-to-br from-blue-50/40 to-cyan-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Career Timeline </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-cyan-300 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From curious intern to seasoned developer - a journey of continuous learning, growth, and passion for technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-sky-300 via-cyan-300 to-teal-300 rounded-full"></div>
          
          {timeline.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0 group">
              {/* Timeline Dot */}
              <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg z-10 border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <i className={`${item.icon} text-white text-xl`}></i>
              </div>
              
              {/* Content Card */}
              <div className="ml-8 bg-white backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group-hover:scale-105">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-sky-600 transition-colors duration-300">{item.position}</h3>
                    <h4 className="text-xl text-cyan-600 font-semibold">{item.company}</h4>
                  </div>
                  <div className="mt-2 lg:mt-0">
                    <span className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm`}>
                      {item.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => {
                    const colors = [
                      'bg-sky-100/80 text-sky-600 border-sky-200/50',
                      'bg-cyan-100/80 text-cyan-600 border-cyan-200/50', 
                      'bg-teal-100/80 text-teal-600 border-teal-200/50',
                      'bg-emerald-100/80 text-emerald-600 border-emerald-200/50'
                    ];
                    return (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-200 border ${colors[skillIndex % colors.length]}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <i className="ri-award-line text-white text-2xl"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">Teamwork</h4>
            <p className="text-gray-600 text-sm">Thrived in team-oriented settings by fostering open communication and mutual support</p>
          </div>
          
          <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <i className="ri-lightbulb-line text-white text-2xl"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Innovation</h4>
            <p className="text-gray-600 text-sm">Implemented cutting-edge solutions for complex technical challenges</p>
          </div>
          
          <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <i className="ri-growth-line text-white text-2xl"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">Continuous Growth</h4>
            <p className="text-gray-600 text-sm">Always learning new technologies and sharing knowledge</p>
          </div>
        </div>
      </div>
    </section>
  );
}
