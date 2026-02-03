import React, { useEffect, useState } from 'react';

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
      size: 15 + Math.random() * 20,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingHearts;
