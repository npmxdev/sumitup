import React from 'react';

const Footers = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-gray-600 py-6">
      {/* Main Text */}
      <p className="text-sm font-semibold text-gray-800">
        © 2025 <span className="text-orange-500">Let's Sum It Up</span>. All rights reserved.
      </p>

      {/* Subtext */}
      <p className="text-xs text-gray-500 mt-2 text-center">
        Powered by the <span className="font-medium text-blue-500">Rapid API</span> | Developed by <span className="font-medium text-orange-500">npmdev</span>
      </p>

      <span className="text-sm mt-4">Learn more about me:  
        <a
        href="https://npmdevx.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-md mt-0 ml-2 font-bold text-orange-500 hover:text-orange-600 transition duration-200"
      >
        npmdevx
      </a></span>

      <div className="h-1 w-24 bg-orange-500 rounded-full mt-4"></div>
    </footer>
  );
};

export default Footers;
