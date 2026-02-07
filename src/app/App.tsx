import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'contact'>('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
  ] as const;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-[#2b2620] to-[#3a342a]">
      <div className="max-w-3xl w-full bg-[#1f1c18] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-12 border border-[#3a3528]">
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-center mb-8 sm:mb-12 text-[#ffb380] font-semibold font-['Montserrat']">
          Welcome to my Website!
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-6 border-b-2 border-[#3a3a3a]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-t-xl transition-all font-medium text-sm sm:text-base font-['Inter'] ${
                activeTab === tab.id
                  ? 'bg-[#d4874f] text-white'
                  : 'bg-[#2a2a2a] text-[#d4d4d4] hover:bg-[#3a3a3a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-inner border border-[#3a3a3a] min-h-[300px]">
          {activeTab === 'about' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed font-['Inter']">
                Hi! I'm Taxiarchis, a passionate developer...
              </p>
              <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed font-['Inter']">
                I'm particularly interested in server management and community building.
              </p>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl text-[#ffb380] font-semibold font-['Inter']">
                  Git Repository
                </h3>
                <a href="https://git.greenova.xyz" target="_blank" rel="noopener noreferrer" className="text-[#ffb380] hover:underline">
                  git.greenova.xyz
                </a>
                <p className="text-[#d4d4d4] text-sm">My personal Git repository with various projects.</p>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-lg sm:text-xl text-[#ffb380] font-semibold">Email</h3>
              <a href="mailto:greenova@greenova.xyz" className="text-[#ffb380] hover:underline">
                greenova@greenova.xyz
              </a>
            </div>
          )}
        </div>

        <p className="text-center mt-8 text-[#8a8a8a] text-xs sm:text-sm font-['Inter']">
          © {new Date().getFullYear()} Taxiarchis Tsairidis.
        </p>
      </div>
    </div>
  );
}
