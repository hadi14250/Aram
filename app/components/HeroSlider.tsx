"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isButtonsVisible, setIsButtonsVisible] = useState(true);

  const slides = [
    {
      image: '/assets/arams_pages/aramprj5.png',
      title: 'At ARAM GROUP',
      description:
        'We are committed to integrity, performance, and value. Our success is built on long-term partnerships and client satisfaction.',
    },
    {
      image: '/assets/arams_pages/aramprj4.png',
      title: 'Highest Standards in Contracting & Construction',
      description:
        'We maintain the highest standards in contracting and construction, ensuring quality and excellence in every project.',
    },
    {
      image: '/assets/arams_pages/aramprj15.png',
      title: 'Not just a trading company',
      description:
        'We are more than just a trading company. We are a comprehensive solution provider across multiple sectors.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (newSlideIndex: number) => {
    setIsTextVisible(false);
    setIsButtonsVisible(false);

    setTimeout(() => {
      setCurrentSlide(newSlideIndex);
      setTimeout(() => {
        setIsTextVisible(true);
        setIsButtonsVisible(true);
      }, 300);
    }, 300);
  };

  return (
    <div className="relative h-[50vh] sm:h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover w-full h-full"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          <div
            className={`absolute bottom-40 sm:bottom-96 left-0 right-0 text-center transition-all duration-500 ease-in-out px-4 ${
              isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-xl text-green-100 max-w-2xl mx-auto">
              {slide.description}
            </p>
          </div>

          <div
            className={`absolute bottom-16 sm:bottom-64 left-0 right-0 transition-all duration-500 ease-in-out ${
              isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl mx-auto mt-6 sm:mt-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
                  <Link
                    href="/about"
                    className="bg-white text-green-900 inline-flex justify-center items-center px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
                  >
                    Read More
                  </Link>
                  <Link
                    href="/Contact"
                    className="bg-green-900 text-white inline-flex justify-center items-center px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 sm:p-2 rounded-full transition-all duration-300"
        onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 sm:p-2 rounded-full transition-all duration-300"
        onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className="sr-only"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
