import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ProposalPage from './components/ProposalPage';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10">
        {currentPage === 'home' ? (
          <HomePage onBeginJourney={() => setCurrentPage('proposal')} />
        ) : (
          <ProposalPage onYes={() => setShowConfetti(true)} />
        )}
      </div>

      {showConfetti && <Confetti />}
    </div>
  );
}

function Confetti() {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 3 + Math.random() * 1,
      rotation: Math.random() * 360,
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 bg-pink-500 rounded-full falling"
          style={{
            left: `${piece.left}%`,
            top: '-10px',
            animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s forwards`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default App;
