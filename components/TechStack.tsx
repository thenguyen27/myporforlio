import React from 'react';
import { TECH_STACK } from '../constants';
import { Server, Layout, Database, Terminal, Settings } from 'lucide-react';

interface TechStackProps {
  currentTheme?: string;
}

const TechStack: React.FC<TechStackProps> = ({ currentTheme = 'festival' }) => {
  
  const getConfig = () => {
    switch(currentTheme) {
      case 'dead-cells':
        return {
          title: 'ARSENAL',
          iconColor: '#00d0ff',
          categoryBg: 'bg-[#180b2a] border-2 border-[#4d3e75]',
          chipBg: 'bg-[#222] border border-[#bd6eff] text-[#bd6eff]',
          font: 'font-pixel'
        };
      case 'valorant':
        return {
          title: 'BUY MENU',
          iconColor: '#FF4655',
          categoryBg: 'bg-[#0F1923] border border-white/20 hover:border-[#FF4655]',
          chipBg: 'bg-[#364954] text-[#ECE8E1] hover:bg-[#FF4655] font-valo uppercase',
          font: 'font-valo tracking-wide'
        };
      case 'club':
        return {
          title: 'TACTICS',
          iconColor: '#eebb54',
          categoryBg: 'bg-[#141b33]/60 border border-[#32ff7e]/20',
          chipBg: 'bg-[#141b33] border border-[#32ff7e] text-white',
          font: 'font-display'
        };
      case 'professional':
        return {
          title: 'Technical Arsenal',
          iconColor: '#ffffff',
          categoryBg: 'bg-[#111] border border-[#2a2a2a] rounded-[16px] hover:border-[#555] transition-all',
          chipBg: 'bg-transparent border border-[#333] text-[#a1a1aa] font-mono hover:border-[#3b82f6] hover:text-white transition-colors rounded-[4px]',
          font: 'font-display tracking-tight not-italic'
        };
      default:
        return {
          title: 'UNDER THE HOOD',
          iconColor: 'var(--color-horizon-pink)',
          categoryBg: 'bg-white shadow-sm border-l-4 border-horizon-cyan',
          chipBg: 'bg-gray-100 text-gray-800 font-bold',
          font: 'font-display italic'
        };
    }
  };

  const config = getConfig();

  const categories = [
    { id: 'backend', label: 'Backend', icon: Server, skills: TECH_STACK.backend },
    { id: 'frontend', label: 'Frontend', icon: Layout, skills: TECH_STACK.frontend },
    { id: 'database', label: 'Database', icon: Database, skills: TECH_STACK.database },
    { id: 'devops', label: 'DevOps', icon: Terminal, skills: TECH_STACK.devops },
    { id: 'tools', label: 'Tools', icon: Settings, skills: TECH_STACK.tools },
  ];

  return (
    <section className="py-20 px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <h2 className={`text-5xl md:text-7xl font-bold uppercase ${currentTheme === 'festival' ? 'text-horizon-dark' : 'text-white'} ${config.font}`}>
                {config.title}
            </h2>
            {currentTheme !== 'professional' && <div className={`h-2 flex-1 ${currentTheme === 'dead-cells' ? 'bg-[#ff2a2a]' : 'bg-horizon-pink skew-x-[-20deg]'}`} />}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
                <div key={cat.id} className={`p-6 transition-all hover:-translate-y-2 ${config.categoryBg}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <div style={{ color: config.iconColor }}>
                            <cat.icon size={32} />
                        </div>
                        <h3 className={`text-2xl font-bold uppercase ${currentTheme === 'festival' ? 'text-black' : 'text-white'} ${config.font}`}>
                            {cat.label}
                        </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {cat.skills.map(skill => (
                            <span key={skill} className={`px-3 py-1.5 text-sm ${config.chipBg} ${currentTheme === 'festival' ? 'skew-x-[-10deg]' : ''}`}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;