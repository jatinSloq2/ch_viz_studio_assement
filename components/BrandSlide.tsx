'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { brands } from '@/constants/image';

const BrandSlide = () => {

  return (
    <section className="mx-auto px-4">
      <p className="text-gray-500 text-lg mb-8 text-center">
        Loved by product folks at
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={68}
        slidesPerView="auto"
        loop={true}
        allowTouchMove={false}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="!w-auto flex items-center">
            <div className="rounded-xl border p-5">
              <img
                src={brand.src}
                alt={brand.name}
                className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandSlide;
