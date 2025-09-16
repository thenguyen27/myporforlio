'use client';

export default function SkillsSection() {
  const sections = [
    {
      title: 'Backend',
      icon: 'ri-server-line',
      items: [
        {
          name: 'PHP',
          pillsClass: 'from-emerald-400 to-teal-400',
          points: [
            'Use Query Builder & Eloquent for CRUD, joins, and pagination',
            'Queues, Events/Listeners, Cronjobs, Scheduling, Artisan commands',
            'Build REST APIs and Blade-driven websites in Laravel',
            'Handle Cookies & Sessions, authentication and authorization',
            'Apply OOP/SOLID, MVC, and Service/Repository patterns',
          ],
        },
      ],
    },
    {
      title: 'Frontend',
      icon: 'ri-layout-line',
      items: [
        {
          name: 'VueJS',
          pillsClass: 'from-cyan-400 to-cyan-500',
          points: [
            'Composition API, components, props/emit, lifecycle',
            'Vue Router and Pinia for state management',
            'Form handling, API consumption, reusable UI patterns',
          ],
        },
        {
          name: 'JavaScript',
          pillsClass: 'from-teal-400 to-teal-500',
          points: [
            'ES6+ syntax, modules, async/await, Promises',
            'DOM manipulation, events, and Fetch API',
            'Performance and basic debugging techniques',
          ],
        },
        {
          name: 'HTML/CSS',
          pillsClass: 'from-sky-400 to-cyan-500',
          points: [
            'Semantic HTML, accessibility basics (a11y)',
            'Flexbox & Grid, responsive/mobile-first layouts',
            'Utility-first styling with Tailwind CSS',
          ],
        },
      ],
    },
    {
      title: 'Database',
      icon: 'ri-database-2-line',
      items: [
        {
          name: 'MySQL',
          pillsClass: 'from-teal-400 to-teal-500',
          points: [
            'Schema design, normalization, and indexing',
            'Complex JOINs, transactions, and locking basics',
            'Query optimization and EXPLAIN analysis',
          ],
        },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'ri-tools-line',
      items: [
        {
          name: 'Docker',
          pillsClass: 'from-sky-400 to-cyan-500',
          points: [
            'Write Dockerfiles and docker-compose for local dev',
            'Multi-stage builds and small image footprints',
            'Containerize Laravel/Node apps with volumes & networks',
          ],
        },
        {
          name: 'CI/CD',
          pillsClass: 'from-teal-400 to-sky-500',
          points: [
            'GitHub Actions/GitLab CI pipelines (build, test, lint)',
            'Automatic deploys to staging/production',
            'Versioning and environment secrets management',
          ],
        },
        {
          name: 'Git',
          pillsClass: 'from-sky-400 to-sky-500',
          points: [
            'Branching strategies (Git Flow, trunk-based)',
            'Code reviews and pull requests',
            'Rebase/squash for clean history',
          ],
        },
      ],
    },
    {
      title: 'Design & UX',
      icon: 'ri-palette-line',
      items: [
        {
          name: 'Figma',
          pillsClass: 'from-sky-400 to-cyan-500',
          points: [
            'Auto Layout, components, and variants',
            'Design tokens and consistent spacing/typography',
            'Developer handoff with specs and exports',
          ],
        },
        {
          name: 'UI/UX',
          pillsClass: 'from-cyan-400 to-sky-500',
          points: [
            'Wireframes, user flows, and low/high-fidelity prototypes',
            'Heuristic evaluation and usability feedback',
            'Color contrast and accessible interactions',
          ],
        },
        {
          name: 'Responsive',
          pillsClass: 'from-teal-400 to-cyan-500',
          points: [
            'Fluid grids and breakpoint strategy',
            'Mobile-first approach and touch targets',
            'Performance budgets for fast UX',
          ],
        },
      ],
    },
    {
      title: 'Soft Skills',
      icon: 'ri-team-line',
      items: [
        {
          name: 'Teamwork',
          pillsClass: 'from-cyan-400 to-teal-500',
          points: [
            'Agile/Scrum collaboration and sprint planning',
            'Pair programming and cross-functional work',
            'Knowledge sharing and constructive feedback',
          ],
        },
        {
          name: 'Communication',
          pillsClass: 'from-sky-400 to-cyan-500',
          points: [
            'Clear standups, async updates, and documentation',
            'Stakeholder alignment and expectation setting',
            'Write concise specs and PR descriptions',
          ],
        },
        {
          name: 'Leadership',
          pillsClass: 'from-teal-400 to-sky-500',
          points: [
            'Mentor juniors and foster code quality',
            'Break down tasks and set priorities',
            'Facilitate decisions and resolve conflicts',
          ],
        },
      ],
    },
  ] as const;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-cyan-300 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            A detailed, ever-growing snapshot of my technical toolkit and professional competencies.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.title} className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-200 to-cyan-200 text-sky-700">
                <i className={`${section.icon} text-xl`} />
              </span>
              <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-sky-100 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-br from-sky-50/40 via-cyan-50/30 to-teal-50/40 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`inline-flex items-center rounded-full bg-gradient-to-r ${item.pillsClass} text-white shadow-sm mb-4`}
                  >
                    <span className="px-3 py-1 text-sm font-semibold">{item.name}</span>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    {item.points.map((p, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400/80 shrink-0" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Core Values */}
        <div className="mt-4 bg-gradient-to-r from-sky-50/80 via-cyan-50/60 to-teal-50/80 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i className="ri-code-s-slash-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">Clean Code</h4>
              <p className="text-gray-600 text-sm">Maintainable, readable, and scalable code with tests and clear structure.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i className="ri-speed-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Performance</h4>
              <p className="text-gray-600 text-sm">Optimize for speed and efficiency while preserving an excellent user experience.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-300 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i className="ri-rocket-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">Innovation</h4>
              <p className="text-gray-600 text-sm">Explore new technologies and creative solutions to complex problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
