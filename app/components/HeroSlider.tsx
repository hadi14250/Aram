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
      id: 1, 
      image: '/assets/arams_pages/aramprj4.png', 
      alt: 'Aram Group Construction',
      title: (
        <>
          At <span style={{ color: '#171717' }}>Aram Group</span>
        </>
      ),
      description: 'Dedicated to integrity, performance, and value, we build lasting partnerships by providing tailored, high‑quality construction, agriculture, and trading solutions.'
    },
    { 
      id: 2, 
      image: '/assets/arams_pages/aramprj5.png', 
      alt: 'Aram Group Trading',
       title: 'Commitment to excellence',
      description: 'Highest Standards in Contracting & Construction: We turn client ideas into reality through precision, quality, and a commitment to excellence in every project.'
    },
    { 
      id: 3, 
      image: '/assets/arams_pages/aramprj15.png', 
      alt: 'Aram Group Agricultural',
      title: 'Aram3',
      description: 'Agricultural expertise'
    },
    { 
      id: 4, 
      image: '/assets/arams_pages/aramprj10.jpg', 
      alt: 'Aram Group Projects',
      title: 'Aram4',
      description: 'Comprehensive project management'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (newSlideIndex: number) => {
    // Hide text and buttons before changing slide
    setIsTextVisible(false);
    setIsButtonsVisible(false);
    
    // Wait for fade out animation
    setTimeout(() => {
      setCurrentSlide(newSlideIndex);
      
      // Show text and buttons after slide change
      setTimeout(() => {
        setIsTextVisible(true);
        setIsButtonsVisible(true);
      }, 300);
    }, 300);
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Slide text content */}
          <div className={`absolute bottom-32 left-0 right-0 text-center transition-all duration-500 ease-in-out ${
            isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">{slide.description}</p>
          </div>
          
          {/* Buttons */}
          <div className={`absolute bottom-16 left-0 right-0 transition-all duration-500 ease-in-out ${
            isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/about" 
                    className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Read More
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows - positioned on left and right sides */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
        onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
        onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 