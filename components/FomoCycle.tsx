'use client';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ChevronRightCircle } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { slides } from '@/constants/image';


const FomoCycle = () => {
  const [animations, setAnimations] = useState<any[]>([]);
  const lottieRefs = useRef<(LottieRefCurrentProps | null)[]>([]);

  useEffect(() => {
    const fetchAnimations = async () => {
      const results = await Promise.all(
        slides.map((slide) =>
          fetch(slide.animationUrl)
            .then((res) => res.json())
            .catch(() => null)
        )
      );
      setAnimations(results);
    };

    fetchAnimations();
  }, []);

  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 leading-tight">
        You&apos;ll hate Cycle if...
      </h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5 },
        }}
        pagination={{ clickable: true }}
        className="!pb-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="group relative bg-white border border-blue-200 rounded-2xl transition-shadow h-full md:h-[600px] w-full overflow-hidden flex flex-col justify-between">
              <p className="text-xl md:text-3xl font-medium text-black py-6 px-6 leading-snug">
                {slide.title}
              </p>

              {animations[index] && (
                <div className="overflow-hidden">
                  <Lottie
                    lottieRef={(ref) => (lottieRefs.current[index] = ref)}
                    animationData={animations[index]}
                    autoplay
                    loop
                    className="w-full aspect-[1/1] md:aspect-[3/3]"
                  />
                </div>
              )}

              <a href={"/"} className="absolute bottom-9 right-8 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-out flex items-center text-neutral-900 text-xl gap-1">
                <span>Read</span>
                <ChevronRightCircle className="w-7 h-7" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FomoCycle;
