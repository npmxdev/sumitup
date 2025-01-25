import React from 'react';

const Footers = () => {
  return (
    <div>
      <footer className="flex flex-col items-center justify-center text-orange-500 py-4">
        <p className="text-sm">© 2025 Let's Sum It Up. All rights reserved.</p>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Powered by the Rapid API | Developed by npmdev
        </p>
        <a
          href="https://github.com/npmdevx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-2"
        >
          To see more of my works visit: npmdevx
        </a>
      </footer>
    </div>
  );
};

export default Footers;
