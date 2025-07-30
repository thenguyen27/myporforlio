'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

const texts = [
  'Backend Developer',
  'Laravel Enthusiast',
  'Scalable System Builder',
  'Vue & Livewire Integrator',
  'Database Optimizer',
  'Clean Code Advocate'
];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typingText.length < currentText.length) {
          setTypingText(currentText.slice(0, typingText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typingText.length > 0) {
          setTypingText(currentText.slice(0, typingText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, currentIndex, isDeleting, texts]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'Nguyen_Tran_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-sky-50/40 overflow-hidden mt-[76px]">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-200/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200/30 rounded-lg rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-sky-300/20 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-60 left-1/2 w-8 h-8 bg-cyan-300/25 rounded-sm rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.8s'}}></div>

        {/* Code Snippet Floating Elements */}
        <div className="absolute top-32 right-40 bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-pulse" style={{animationDuration: '4s'}}>
          <div className="text-xs font-mono text-sky-600">&lt;code/&gt;</div>
        </div>
        <div className="absolute bottom-32 right-10 bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-pulse" style={{animationDuration: '5s'}}>
          <div className="text-xs font-mono text-cyan-600">{ }</div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Character with typing animation */}
          <div className="hidden lg:block order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-200/30 to-cyan-200/30 rounded-full blur-3xl scale-110"></div>

              {/* Developer Character with Typing Animation */}
              <div className="relative group">
                <img
                  src="https://readdy.ai/api/search-image?query=Animated%20cartoon%20developer%20character%20typing%20on%20laptop%20with%20pastel%20blue%20theme%2C%20friendly%20young%20programmer%20with%20focused%20expression%20while%20coding%2C%20modern%20flat%20design%20style%20with%20soft%20colors%2C%20minimalist%20workspace%20background%2C%20hands%20positioned%20on%20keyboard%20in%20typing%20pose%2C%20cheerful%20tech%20professional%20at%20work&width=500&height=600&seq=dev-typing-character&orientation=portrait"
                  alt="Developer Character"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover object-top hover:scale-105 transition-transform duration-500"
                />

                {/* Typing Indicator */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Coding...</span>
                  </div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute top-10 -right-8 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-lg p-2 shadow-md animate-float">
                  <code className="text-xs text-sky-700">console.log('Hello!');</code>
                </div>
                <div className="absolute top-32 -left-6 bg-gradient-to-r from-cyan-100 to-sky-100 rounded-lg p-2 shadow-md animate-float" style={{animationDelay: '1s'}}>
                  <code className="text-xs text-cyan-700">function() {}</code>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                <i className="ri-code-s-slash-line text-2xl"></i>
              </div>
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-300 to-sky-300 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{animationDuration: '2s'}}>
                <i className="ri-heart-3-fill text-lg"></i>
              </div>
            </div>
          </div>

          {/* Right side - Profile and text content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Profile Image Above Name */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-300/30 to-cyan-300/30 rounded-full blur-xl"></div>
                <img
                  src="/resources/images/avt.png"
                  alt="Nguyen Tran Profile"
                  className="relative w-[300px] h-[300px] rounded-full object-cover shadow-lg border-4 border-white/80 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-sky-400 to-cyan-400 text-white p-2 rounded-full shadow-lg animate-pulse">
                  <i className="ri-code-s-slash-line text-sm"></i>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                  Hi, I'm <span className="text-sky-400">Nguyen Tran</span>
                </h1>
                <span className="text-4xl animate-pulse">👋</span>
              </div>
              <div className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                <p className="mb-2">A Developer who codes <span className="px-3 py-1 bg-sky-100/80 text-sky-600 rounded-full font-semibold">clean</span> & <span className="px-3 py-1 bg-cyan-100/80 text-cyan-600 rounded-full font-semibold">scalable</span> systems</p>
                <div className="flex items-center space-x-2">
                  <span>I'm a </span>
                  <span className="text-sky-500 font-semibold min-w-[200px}">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer whitespace-nowrap relative overflow-hidden"
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button
                onClick={scrollToProjects}
                className="group border-2 border-sky-300 text-sky-600 hover:bg-gradient-to-r hover:from-sky-300 hover:to-cyan-300 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg cursor-pointer whitespace-nowrap relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}