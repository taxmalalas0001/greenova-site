import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'contact'>('about');

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8"
      style={{ 
        background: 'linear-gradient(to bottom right, #2b2620, #3a342a)'
      }}
    >
      <div className="max-w-3xl w-full bg-[#1f1c18] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-12 border border-[#3a3528]">
        {/* Welcome Header */}
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl text-center mb-8 sm:mb-12 text-[#ffb380]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          Welcome to my Website!
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-6 border-b-2 border-[#3a3a3a]">
          <button
            onMouseEnter={() => setActiveTab('about')}
            onClick={() => setActiveTab('about')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-t-xl transition-all font-medium text-sm sm:text-base ${
              activeTab === 'about'
                ? 'bg-[#d4874f] text-white'
                : 'bg-[#2a2a2a] text-[#d4d4d4] hover:bg-[#3a3a3a]'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            About Me
          </button>
          <button
            onMouseEnter={() => setActiveTab('projects')}
            onClick={() => setActiveTab('projects')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-t-xl transition-all font-medium text-sm sm:text-base ${
              activeTab === 'projects'
                ? 'bg-[#d4874f] text-white'
                : 'bg-[#2a2a2a] text-[#d4d4d4] hover:bg-[#3a3a3a]'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Projects
          </button>
          <button
            onMouseEnter={() => setActiveTab('contact')}
            onClick={() => setActiveTab('contact')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-t-xl transition-all font-medium text-sm sm:text-base ${
              activeTab === 'contact'
                ? 'bg-[#d4874f] text-white'
                : 'bg-[#2a2a2a] text-[#d4d4d4] hover:bg-[#3a3a3a]'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Contact Me
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-inner border border-[#3a3a3a]">
          {activeTab === 'about' ? (
            <div key="about" className="space-y-4 sm:space-y-6 animate-[fadeIn_0.3s_ease-in]">
              <p 
                className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Hi! I'm Taxiarchis (aka Greenova Mapper), a passionate developer and technology enthusiast. 
                I love building projects that bring communities together and exploring the endless 
                possibilities of open-source software. When I'm not gaming, you'll find me experimenting with linux OS'es,
                helping contribute to AlmaLinux or even manage game servers.
              </p>
              <p 
                className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I'm particularly interested in server management, community building, and creating 
                tools that make people's lives just a bit more enjoyable. Whether it's setting up servers, writing 
                code, or contributing to open-source projects, I'm always excited to learn and share 
                knowledge with others in the tech community.
              </p>
            </div>
          ) : activeTab === 'projects' ? (
            <div key="projects" className="space-y-6 animate-[fadeIn_0.3s_ease-in]">
              <div className="space-y-2">
                <h3 
                  className="text-lg sm:text-xl text-[#ffb380] font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Git Repository
                </h3>
                <a
                  href="https://git.greenova.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-[#ffb380] hover:text-[#ffc999] underline break-words inline-block"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  git.greenova.xyz
                </a>
                <p 
                  className="text-[#d4d4d4] text-sm sm:text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  My personal Git repository with various projects and contributions
                </p>
              </div>
            </div>
          ) : (
            <div key="contact" className="space-y-4 sm:space-y-6 animate-[fadeIn_0.3s_ease-in]">
              <p 
                className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Feel free to reach out to me! Whether you have a question
                or just want to say hi, I'd love to hear from you!
              </p>
              <div className="space-y-2">
                <h3 
                  className="text-lg sm:text-xl text-[#ffb380] font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:greenova@greenova.xyz"
                  className="text-sm sm:text-base text-[#ffb380] hover:text-[#ffc999] underline break-words inline-block"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  greenova@greenova.xyz
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <p 
          className="text-center mt-8 text-[#8a8a8a] text-xs sm:text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          © {new Date().getFullYear()} Taxiarchis Tsairidis. All rights reserved.
        </p>
      </div>
    </div>
  );
}
