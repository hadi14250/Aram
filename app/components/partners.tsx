'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const affiliations = [
  { src: "/images/services-img1.png", alt: 'Abercrombie' },
  { src: "/images/services-img1.png", alt: 'Bales' },
  { src: "/images/services-img1.png", alt: 'Canada Club' },
  { src: "/images/services-img1.png", alt: 'Gateway' },
  { src: "/images/services-img1.png", alt: 'Kuoni' },
  { src: "/images/services-img1.png", alt: 'Saga' },
  { src: "/images/services-img1.png", alt: 'SCO' },
  { src: "/images/services-img1.png", alt: 'Sweden Embassy' },
  { src: "/images/services-img1.png", alt: 'Thompsons' },
  { src: "/images/services-img1.png", alt: 'Unnamed' },
  { src: "/images/services-img1.png", alt: 'Wonders' }
];

export default function AffiliationsSlider() {
  return (
    <section className="sponsor py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <SwiperSlide key={index} className="!w-[200px]">
              <div className="sponsor-slide h-[100px] flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={100}
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