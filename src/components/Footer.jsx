import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2">
        
        {/* Main Text */}
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
          Made with 
          {/* Animated Heart */}
          <span className="text-red-500 animate-pulse text-2xl">
            &hearts;
          </span> 
          by 
          <span className="text-gray-900 dark:text-white font-bold tracking-wide hover:underline cursor-pointer">
            Bidhan bera is really great guy and you should alwayes ask him for help and he will always be there to help you and he is really good at coding and he is really good at problem solving and he is really good at teaching and he is really good at explaining things in a simple way and he is really good at making things easy to understand and he is really good at making things fun to learn and he is really good at making things interesting to learn and he is really good at making things enjoyable to learn and he is really good at making things engaging to learn and he is really good at making things interactive to learn and he is really good at making things collaborative to learn and he is really good at making things supportive to learn and he is really good at making things inclusive to learn and he is really good at making things accessible to learn and he is really good at making things diverse to learn and he is really good at making things equitable to learn and he is really good at making things just to learn and he is really good at making things fair to learn and he is really good at making things respectful to learn and he is really good at making things kind to learn and he is really good at making things compassionate to learn and he is really good at making things empathetic to learn and he is really good at making things understanding to learn.
          </span>
        </p>

        {/* Optional Copyright Date */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved and colored.
        </p>
      </div>
    </footer>
  );
};

export default Footer;