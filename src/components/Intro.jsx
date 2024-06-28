import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Intro = ({ onDone }) => {
  const greetings = [
    'Hello', 'नमस्ते', 'नमस्कार', 'ہیلو', 'Hola', 'Bonjour', 'こんにちは', '안녕하세요', 'Привет', 'Guten Tag',
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    if (currentGreetingIndex >= greetings.length) {
      onDone();
      return;
    }

    const timer = setTimeout(() => {
      setCurrentGreetingIndex(currentGreetingIndex + 1);
    }, 500); // Slightly increased for better readability

    return () => clearTimeout(timer);
  }, [currentGreetingIndex, greetings.length, onDone]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
      </div>
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentGreetingIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-white text-6xl font-bold z-10"
        >
          {greetings[currentGreetingIndex] || 'Welcome!'}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Intro;
