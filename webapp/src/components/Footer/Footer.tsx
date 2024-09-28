import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 text-center bg-gray-800 text-white h-[200px] flex justify-center items-center flex-col">
      <p className='flex  gap-4 mb-3 '>@2024 . All rights reserved</p>
      <p>
        Made with <span className="text-red-500">&hearts;</span> by Web3 Wizards
      </p>
    </footer>
  );
}
