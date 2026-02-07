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
                : 'bg-[#2a2a
