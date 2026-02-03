import React, { useState } from 'react';

function ProposalPage({ onYes }) {
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleNoHover = () => {
    if (!yesClicked) {
      setIsHovering(true);
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 150 - 75;
      setNoButtonPos({ x: randomX, y: randomY });
    }
  };

  const handleYesClick = () => {
    setYesClicked(true);
    onYes();
  };

  if (yesClicked) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="text-center bounce-in max-w-2xl mx-auto">
          <div className="text-6xl md:text-7xl mb-8 pulse-heart inline-block">
            💕
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-6">
            You've Made Me The Happiest! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            I can't wait to spend every moment with you. You are my greatest adventure, my sweetest dream, and my forever valentine.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="text-5xl animate-bounce">💝</div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>💖</div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>💗</div>
          </div>
          <p className="text-lg text-rose-500 mt-8 italic">
            Forever and always... ❤️
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Letter */}
        <div className="slide-up bg-white bg-opacity-90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="inline-block text-4xl md:text-5xl mb-4 float">💌</div>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">
              You Complete Me
            </h2>
            <p className="text-gray-500 italic">A Message For You</p>
          </div>

          <div className="border-t-2 border-b-2 border-rose-200 py-8 mb-8">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              <span className="font-semibold text-rose-600">My Dearest Love,</span>
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Every answer you chose reminded me of why I fell in love with you. Your kindness, your laughter, the way you light up every room you walk into – you are my everything.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              This Valentine's Day, I want you to know that my love for you grows stronger with each passing day. You are my best friend, my soulmate, and the greatest gift life has given me.
            </p>

            <p className="text-xl md:text-2xl font-italic text-rose-500 text-center mb-6">
              I love you more than words could ever express.
            </p>

            <p className="text-right text-gray-700 text-lg">
              <span className="block">Forever Yours,</span>
              <span className="block font-bold text-rose-600 mt-2">Megha 💕</span>
            </p>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 text-2xl mb-4">
            <span className="float">💕</span>
            <span className="float" style={{ animationDelay: '0.5s' }}>💖</span>
            <span className="float" style={{ animationDelay: '1s' }}>💗</span>
          </div>
        </div>

        {/* Proposal Question */}
        <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl md:text-5xl font-bold text-rose-600 mb-8">
            Will you be my Valentine? 💘
          </h3>

          {/* Decorative hearts above buttons */}
          <div className="flex justify-center gap-2 mb-8 text-2xl md:text-3xl">
            <span className="flutter-heart">❤️</span>
            <span className="flutter-heart" style={{ animationDelay: '0.3s' }}>❤️</span>
            <span className="flutter-heart" style={{ animationDelay: '0.6s' }}>❤️</span>
            <span className="flutter-heart" style={{ animationDelay: '0.9s' }}>❤️</span>
            <span className="flutter-heart" style={{ animationDelay: '1.2s' }}>❤️</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap relative h-20">
            <button
              onClick={handleYesClick}
              className="glow-button px-8 md:px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Yes! 💕
            </button>

            <div
              onMouseEnter={handleNoHover}
              style={{
                transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                transition: isHovering ? 'none' : 'all 0.3s ease',
              }}
            >
              <button
                disabled={isHovering}
                className="px-8 md:px-12 py-4 bg-gray-300 text-gray-700 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-lg cursor-pointer disabled:cursor-default transition-all duration-300"
              >
                No
              </button>
            </div>
          </div>

          <p className="mt-8 text-sm md:text-base text-gray-600 italic">
            (Hint: The no button won't let you choose that option 😉)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProposalPage;
