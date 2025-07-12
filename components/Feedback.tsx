'use client';

import React from 'react';
import Image from 'next/image';

interface FeedbackProps {
  avatar: string;
  quote: string;
  name: string;
  company: string;
  companyLogo: string;
}

const Feedback: React.FC<FeedbackProps> = ({
  avatar,
  quote,
  name,
  company,
  companyLogo,
}) => {
  return (
    <section className="relative py-16 px-4 md:px-8 flex flex-col md:flex-row items-start justify-center gap-12 text-center md:text-left max-w-[1500px] mx-auto my-15  md:my-30">

      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={avatar}
          alt={`${name}'s photo`}
          width={200}
          height={200}
          className="rounded-md object-cover"
        />
      </div>

      {/* Quote Section */}
      <div className="max-w-3xl relative">
        {/* Floating Logos */}
        <img
          src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65eb2289ce65b2ceebcedef6_bubble-page-intercom.png"
          alt="Intercom"
          className="absolute w-28 h-28 top-0 md:block hidden  -left-0 md:top-60 md:-left-60 opacity-80"
        />
        <img
          src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65eb2179be7ad7c7192eb394_bubble-page-gong.png"
          alt="Gong"
          className="absolute w-28 h-28 hidden right-0 md:block md:-bottom-15 md:-right-6 opacity-80"
        />

        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl italic text-neutral-800 relative flex items-start gap-4">
          <p>{quote}</p>
          <img
            src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65e7b073da11fa06f1020a28_quote.svg"
            alt="Quote Icon"
            className="w-18 h-18 mt-1 flex-shrink-0"
          />
        </blockquote>

        {/* Author Info */}
        <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600 border-t pt-5">
          <span className="font-semibold text-lg">{name}</span>
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          <Image
            src={companyLogo}
            alt={company}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
