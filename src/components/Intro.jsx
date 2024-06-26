import { useState, useEffect } from 'react';

const Intro = ({ onDone }) => { // Use onDone instead of setIsIntroDone
  const greetings = [
    'Hello', // English
    'नमस्ते', // Hindi
    'नमस्कार', // Marathi
    'ہیلو', // Urdu
    'Hola', // Spanish
    'Bonjour', // French
    'こんにちは', // Japanese
    '안녕하세요', // Korean
    'Привет', // Russian
    'Guten Tag', // German
    // Add more greetings as needed
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    if (currentGreetingIndex >= greetings.length) {
      onDone(); // Call onDone when the intro sequence is complete
      return;
    }

    const timer = setTimeout(() => {
      setCurrentGreetingIndex(currentGreetingIndex + 1);
    }, 300); // Adjusted time for quicker transitions

    return () => clearTimeout(timer);
  }, [currentGreetingIndex, greetings.length, onDone]); // Include onDone in the dependency array

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">
        {greetings[currentGreetingIndex] || 'Welcome!'}
      </h1>
    </div>
  );
};

export default Intro;