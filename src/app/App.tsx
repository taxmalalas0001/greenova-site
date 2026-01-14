import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'minecraft' | 'git'>('minecraft');

  return (
    <div 
      className="size-full flex items-center justify-center p-4 sm:p-8"
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
            onMouseEnter={() => setActiveTab('minecraft')}
            onClick={() => setActiveTab('minecraft')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-t-xl transition-all font-medium text-sm sm:text-base ${
              activeTab === 'minecraft'
                ? 'bg-[#d4874f] text-white'
                : 'bg-[#2a2a2a] text-[#d4d4d4] hover:bg-[#3a3a3a]'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Minecraft Server
          </button>
          <button
            onMouseEnter={() => setActiveTab('git')}
            onClick={() => setActiveTab('git')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-t-xl transition-all font-medium text-sm sm:text-base ${
              activeTab === 'git'
                ? 'bg-[#d4874f] text-white'
                : 'bg-[#2a2a2a] text-[#d4d4d4] hover:bg-[#3a3a3a]'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Git Repository
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-inner border border-[#3a3a3a]">
          {activeTab === 'minecraft' ? (
            <div key="minecraft" className="space-y-3 sm:space-y-4 animate-[fadeIn_0.3s_ease-in]">
              <a
                href="https://www.oreonmc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-xl text-[#ffb380] hover:text-[#ffc999] underline break-words"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                https://www.oreonmc.org
              </a>
              <p 
                className="text-[#d4d4d4] text-sm sm:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                is the official mc server for the oreon linux community
              </p>
            </div>
          ) : (
            <div key="git" className="space-y-3 sm:space-y-4 animate-[fadeIn_0.3s_ease-in]">
              <a
                href="https://git.greenova.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-xl text-[#ffb380] hover:text-[#ffc999] underline break-words"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                git.greenova.xyz
              </a>
              <p 
                className="text-[#d4d4d4] text-sm sm:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                my git repo
              </p>
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