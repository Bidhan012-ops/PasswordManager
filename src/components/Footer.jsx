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
            Bidhan bera is really great guy and he loves a beautiful girl and he is a good programmer and the girl is his girlfriend and her name is Oishi tripathy and she is a beautiful
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