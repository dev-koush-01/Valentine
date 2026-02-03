import React from 'react';

function HomePage({ onBeginJourney }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        {/* Decorative hearts at top */}
        <div className="flex justify-center gap-6 mb-8 text-4xl md:text-5xl">
          <span className="float">💕</span>
          <span className="float" style={{ animationDelay: '0.3s' }}>❤️</span>
          <span className="float" style={{ animationDelay: '0.6s' }}>💕</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-4 slide-up">
          My Dearest Love
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-rose-500 italic mb-12 slide-up" style={{ animationDelay: '0.1s' }}>
          A Valentine's Journey 💘
        </p>

        {/* Description */}
        <div className="bg-white bg-opacity-80 backdrop-blur rounded-2xl p-8 md:p-10 mb-8 shadow-xl slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            I've prepared something special for you. Answer these questions and discover a message written from my heart to yours.
          </p>
        </div>

        {/* Decorative hearts before button */}
        <div className="flex justify-center gap-4 mb-8 text-3xl md:text-4xl">
          <span className="flutter-heart">✨</span>
          <span className="flutter-heart" style={{ animationDelay: '0.4s' }}>💖</span>
          <span className="flutter-heart" style={{ animationDelay: '0.8s' }}>✨</span>
        </div>

        {/* Begin Journey Button */}
        <button
          onClick={onBeginJourney}
          className="glow-button group relative px-10 md:px-16 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg md:text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer mb-12 slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="flex items-center justify-center gap-2">
            Begin Our Journey
            <span className="inline-block group-hover:animate-bounce">❤️</span>
          </span>
        </button>

        {/* Footer message */}
        <p className="text-sm md:text-base text-gray-600 italic slide-up" style={{ animationDelay: '0.4s' }}>
          With all my love, forever and always 💕
        </p>
      </div>
    </div>
  );
}

export default HomePage;
