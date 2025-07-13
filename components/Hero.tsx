import React from 'react';

const ICONS = [
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee24d0e6e8f19d66230c49_bulle-video-min.svg', style: 'top-[10%] left-[10%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2d3390a45f05abab603e_bulle-gong-min.svg', style: 'top-[10%] left-[35%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2d08a60e12fc73031dbc_bulle-doc-min.svg', style: 'top-[5%] right-[10%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f0905f0598c5d524e19953_intercom-svg-55.svg', style: 'top-[35%] left-[12%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f08e264e6e45eebe501634_bubble-notion-55.svg', style: 'top-[50%] left-[20%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2cda6ef1975f6b380e4d_bulle-voice-min.svg', style: 'bottom-[20%] left-[10%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65e8688d7b960748d82c3385_bubble-hubspot-06.svg', style: 'bottom-[15%] left-[40%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee28c91b05646be25768a0_bubble-slack-min.svg', style: 'bottom-[15%] right-[35%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2cc18df7cc2fd832f541_bulle-img-min.svg', style: 'bottom-[25%] right-[10%]' },
  { src: 'https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f0939a58818934b3af490d_tally-55-5.svg', style: 'bottom-[10%] right-[20%]' },
];

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4">
      
      {/* ICONS LAYER - behind content */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {ICONS.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={`icon-${i}`}
            className={`hidden md:block w-20 h-20 absolute ${icon.style}`}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Your feedback hub, <br /> on autopilot
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg mb-10">
          Cycle is the fastest way for your team to capture product feedback and share customer insights — without the busywork.
        </p>

        {/* Drop Zone Box */}
        <div className="border border-dashed border-gray-300 p-10 rounded-3xl w-full max-w-xl bg-white shadow-sm">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-tr from-purple-400 to-blue-300 rounded-full shadow-xl" />
            <p className="text-blue-600 font-medium text-sm">Drop anything to capture feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
