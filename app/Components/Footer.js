import React from 'react';

const Footer = () => {
  return (
    <div className="relative w-full bg-black " aria-hidden="true">
      <div className=" z-50 pb-10 bg-black w-full pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[96px]  sm:text-[170px] md:text-[200px] lg:text-[280px] xl:text-[348px] font-bold leading-none">
        <span className="bg-gradient-to-b from-gray-500 via-gray-900 to-black bg-clip-text text-transparent">Waitlist</span>
      </div>
      {/* Glow */}
    </div>
  );
};

export default Footer;
