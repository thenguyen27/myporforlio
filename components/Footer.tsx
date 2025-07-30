
'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-sky-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-teal-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center">
                <i className="ri-code-s-slash-line text-white"></i>
              </div>
              <div className="text-2xl font-bold" style={{fontFamily: 'var(--font-pacifico)'}}>
                Nguyen Tran
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Passionate developer focused on creating efficient, scalable solutions 
              and delivering exceptional user experiences with clean, beautiful code. 
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center space-x-2">
              <i className="ri-links-line text-sky-300"></i>
              <span>Quick Links</span>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'about', label: 'About', icon: 'ri-user-line' },
                { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
                { id: 'skills', label: 'Skills', icon: 'ri-tools-line' },
                { id: 'contact', label: 'Contact', icon: 'ri-mail-line' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center space-x-2 text-gray-400 hover:text-sky-300 transition-all duration-300 cursor-pointer whitespace-nowrap text-left hover:bg-gray-800/50 px-2 py-1 rounded-lg"
                >
                  <i className={`${item.icon} text-sm group-hover:scale-110 transition-transform duration-200`}></i>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center space-x-2">
              <i className="ri-heart-line text-cyan-300"></i>
              <span>Connect with Me</span>
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/nguyen-tran"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-400 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
              >
                <i className="ri-linkedin-fill group-hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a
                href="https://github.com/nguyen-tran"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
              >
                <i className="ri-github-fill group-hover:scale-110 transition-transform duration-200"></i>
              </a>
              <a
                href="mailto:t.thenguyen27@gmail.com"
                className="group w-12 h-12 bg-gradient-to-r from-cyan-300 to-teal-300 hover:from-cyan-400 hover:to-teal-400 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
              >
                <i className="ri-mail-line group-hover:scale-110 transition-transform duration-200"></i>
              </a>
            </div>
            
            <div className="mt-4 p-4 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <p className="text-gray-400 text-sm">
                <i className="ri-time-line text-sky-300 mr-2"></i>
                Usually responds within 24 hours
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center space-x-2">
            <span>© {currentYear} Nguyen Tran — Crafted with</span>
            <i className="ri-heart-fill text-red-400 animate-pulse"></i>
            <span>in Laravel & TailwindCSS</span>
          </p>
          
          <button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-400 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          >
            <i className="ri-arrow-up-line group-hover:scale-110 transition-transform duration-200"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
