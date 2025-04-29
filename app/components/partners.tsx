'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';

const affiliations = [
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/abu-dhabi-police-logo.png", alt: 'Abu Dhabi police' },
  { src: "/assets/partners/arenco-logo.jpeg", alt: 'arenco logo' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
  { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai police' },
];

export default function AffiliationsSlider() {
  return (
    <section className="sponsor w-full py-10 sm:py-20">
      <div className="w-full px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 sm:mb-4">Our Partners</h2>
          <div className="w-16 sm:w-24 h-1 bg-green-900 mx-auto mb-4 sm:mb-6"></div>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="sponsor-swiper"
        >
          {affiliations.map((item, index) => (
            <SwiperSlide key={index} className="!w-[400px]">
              <div className="sponsor-slide h-[200px] flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={200}
                  className="object-contain max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
