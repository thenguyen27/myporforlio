
'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Backend',
      icon: 'ri-server-line',
      skills: [
        { name: 'PHP', level: 5, color: 'from-sky-300 to-sky-400' },
        { name: 'Laravel', level: 5, color: 'from-sky-300 to-sky-400' },
        { name: 'NodeJS', level: 4, color: 'from-cyan-300 to-cyan-400' },
        { name: 'C#', level: 3, color: 'from-teal-300 to-teal-400' },
        { name: 'Python', level: 3, color: 'from-sky-300 to-cyan-400' }
      ],
      bgGradient: 'from-sky-100/60 to-sky-200/40',
      iconBg: 'from-sky-300 to-sky-400'
    },
    {
      title: 'Frontend',
      icon: 'ri-layout-line',
      skills: [
        { name: 'VueJS', level: 5, color: 'from-cyan-300 to-cyan-400' },
        { name: 'ReactJS', level: 4, color: 'from-sky-300 to-sky-400' },
        { name: 'JavaScript', level: 5, color: 'from-teal-300 to-teal-400' },
        { name: 'TypeScript', level: 4, color: 'from-cyan-300 to-sky-400' },
        { name: 'HTML/CSS', level: 5, color: 'from-sky-300 to-cyan-400' }
      ],
      bgGradient: 'from-cyan-100/60 to-cyan-200/40',
      iconBg: 'from-cyan-300 to-cyan-400'
    },
    {
      title: 'Database',
      icon: 'ri-database-2-line',
      skills: [
        { name: 'MySQL', level: 5, color: 'from-teal-300 to-teal-400' },
        { name: 'PostgreSQL', level: 4, color: 'from-sky-300 to-teal-400' },
        { name: 'MongoDB', level: 4, color: 'from-cyan-300 to-teal-400' },
        { name: 'Redis', level: 3, color: 'from-teal-300 to-sky-400' }
      ],
      bgGradient: 'from-teal-100/60 to-teal-200/40',
      iconBg: 'from-teal-300 to-teal-400'
    },
    {
      title: 'DevOps & Tools',
      icon: 'ri-tools-line',
      skills: [
        { name: 'Docker', level: 4, color: 'from-sky-300 to-cyan-400' },
        { name: 'AWS', level: 3, color: 'from-cyan-300 to-teal-400' },
        { name: 'CI/CD', level: 4, color: 'from-teal-300 to-sky-400' },
        { name: 'Git', level: 5, color: 'from-sky-300 to-sky-400' }
      ],
      bgGradient: 'from-emerald-100/60 to-teal-200/40',
      iconBg: 'from-emerald-300 to-teal-400'
    },
    {
      title: 'Design & UX',
      icon: 'ri-palette-line',
      skills: [
        { name: 'Figma', level: 4, color: 'from-sky-300 to-cyan-400' },
        { name: 'UI/UX', level: 4, color: 'from-cyan-300 to-sky-400' },
        { name: 'Responsive', level: 5, color: 'from-teal-300 to-cyan-400' }
      ],
      bgGradient: 'from-sky-100/60 to-cyan-200/40',
      iconBg: 'from-sky-300 to-cyan-400'
    },
    {
      title: 'Soft Skills',
      icon: 'ri-team-line',
      skills: [
        { name: 'Teamwork', level: 5, color: 'from-cyan-300 to-teal-400' },
        { name: 'Communication', level: 4, color: 'from-sky-300 to-cyan-400' },
        { name: 'Leadership', level: 4, color: 'from-teal-300 to-sky-400' }
      ],
      bgGradient: 'from-teal-100/60 to-cyan-200/40',
      iconBg: 'from-teal-300 to-cyan-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Skills & Expertise </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-cyan-300 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My technical toolkit and professional competencies, constantly growing and evolving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`group bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${category.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <i className={`${category.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-gray-800 text-center mb-6 group-hover:text-sky-600 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 text-sm font-medium group-hover/skill:text-sky-600 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < skill.level 
                                ? `bg-gradient-to-r ${skill.color} group-hover/skill:scale-125` 
                                : 'bg-gray-200 group-hover/skill:bg-gray-300'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover/skill:animate-pulse`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-50/80 via-cyan-50/60 to-teal-50/80 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Core Values </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i className="ri-code-s-slash-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">Clean Code</h4>
              <p className="text-gray-600 text-sm">Writing maintainable, readable, and scalable code that stands the test of time.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i className="ri-speed-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Performance</h4>
              <p className="text-gray-600 text-sm">Optimizing applications for speed, efficiency, and exceptional user experience.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-300 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i className="ri-rocket-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">Innovation</h4>
              <p className="text-gray-600 text-sm">Always exploring new technologies and creative solutions to complex problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
