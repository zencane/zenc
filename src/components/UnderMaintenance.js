import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './UnderMaintenance.css'; // Import the CSS file for the slider
import "xp.css/dist/XP.css"; // Import the XP.css file

const word = "maintenance";
const uniqueLetters = word.split("");
const shortGifPath = `${process.env.PUBLIC_URL}/drainstoryshort.gif`;
const longGifPath = `${process.env.PUBLIC_URL}/drainstorylong.gif`;
const letterCount = uniqueLetters.length;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function UnderMaintenance() {
  const [completed, setCompleted] = useState(false);
  const [order, setOrder] = useState(shuffleArray([...uniqueLetters]));
  const [gifLength, setGifLength] = useState(1);

  useEffect(() => {
    if (order.join("") === word) {
      setCompleted(true);
    }
  }, [order]);

  const handleDragEnd = (event, info, index) => {
    const newOrder = [...order];
    newOrder[index] = uniqueLetters[index];
    setOrder(newOrder);
  };

  const handleSliderChange = (event) => {
    setGifLength(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <div className="header-container">
        <h1 className="text-2xl font-bold mb-4">This page is under</h1>
        <div className="slider-container">
          <label htmlFor="range26">Short</label>
          <input
            id="range26"
            type="range"
            min="1"
            max="2"
            value={gifLength}
            onChange={handleSliderChange}
          />
          <label htmlFor="range27">Long</label>
        </div>
      </div>
      <div className="relative w-full max-w-2xl h-64 flex flex-wrap gap-2 justify-center">
        {order.map((letter, index) => (
          <motion.div
            key={index}
            className="letter-container"
            style={{
              backgroundImage: `url(${gifLength === 1 ? shortGifPath : longGifPath})`,
              backgroundSize: `100% ${letterCount * 100}%`,
              backgroundPosition: `0 ${(uniqueLetters.indexOf(letter) / letterCount) * 100}%`
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 100 }} // Limit movement in the x-axis and prevent going below the placeholder
            onDragEnd={(event, info) => handleDragEnd(event, info, index)}
          >
            {letter}
          </motion.div>
        ))}
      </div>
      <div className="success-placeholder">
        {completed && (
          <Link to="/success" className="success-text">SUCCESS</Link>
        )}
      </div>
    </div>
  );
}