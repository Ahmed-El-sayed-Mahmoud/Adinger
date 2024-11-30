"use client";

import React, { useState } from 'react';
import TreeChart from "./TreeViewComponent";
import { data } from "../../constants/data";
export default function Page() {
  const [mode, setMode] = useState('dark');


  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-center mb-8">
        <button 
          onClick={toggleMode}
          className={`
            flex items-center justify-between w-24 h-12 rounded-full p-2 transition-colors duration-300
            ${mode === 'light' 
              ? 'bg-gray-200 text-gray-800' 
              : 'bg-gray-700 text-white'}
          `}
        >
          <div className={`
            w-8 h-8 rounded-full transition-transform duration-300
            ${mode === 'light' 
              ? 'translate-x-0 bg-yellow-500' 
              : 'translate-x-full bg-blue-500'}
          `}>
            {mode === 'light' ? '☀️' : '🌙'}
          </div>
        </button>
      </div>

      <TreeChart 
        data={data}
        height="600px"
        width="100%"
        mode={mode}
      />
    </div>
  );
}