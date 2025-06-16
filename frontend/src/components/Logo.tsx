import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ring */}
      <div className="absolute w-8 h-8 border-2 border-[#00f3ff] rounded-full animate-spin-slow"></div>
      
      {/* Inner ring */}
      <div className="absolute w-6 h-6 border-2 border-[#00b4d8] rounded-full animate-spin-reverse"></div>
      
      {/* Center dot */}
      <div className="absolute w-2 h-2 bg-[#00f5d4] rounded-full animate-pulse"></div>
      
      {/* Electric lines */}
      <div className="absolute w-8 h-8">
        <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-gradient-to-b from-[#00f3ff] to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-gradient-to-t from-[#00f3ff] to-transparent"></div>
        <div className="absolute left-0 top-1/2 w-2 h-0.5 bg-gradient-to-r from-[#00f3ff] to-transparent"></div>
        <div className="absolute right-0 top-1/2 w-2 h-0.5 bg-gradient-to-l from-[#00f3ff] to-transparent"></div>
      </div>
    </div>
  );
};

export default Logo; 