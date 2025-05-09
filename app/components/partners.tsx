'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';

// First slider: scrolls left-to-right (default)
const affiliations = [
    { src: "/assets/partners/dubai-police-logo.png", alt: 'Dubai Police' },
    { src: "/assets/partners/dha-logo.avif", alt: 'DHA Logo' },
    { src: "/assets/partners/abu-dhabi-police-logo.png", alt: 'Abu Dhabi Police' },
    { src: "/assets/partners/sheraton-logo.png", alt: 'Sheraton Logo' },
    { src: "/assets/partners/arenco-logo.jpeg", alt: 'Arenco Logo' },
    { src: "/assets/partners/abu-dhabi-gov.png", alt: 'Abu Dhabi Government' },
    { src: "/assets/partners/dubai-government.png", alt: 'Dubai Government' },
    { src: "/assets/partners/abu-dhabi-municipality.png", alt: 'Abu Dhabi Municipality' },
    { src: "/assets/partners/hilton-logo.png", alt: 'Hilton Logo' },
    { src: "/assets/partners/dubai-municipality.svg", alt: 'Dubai Municipality' },
    { src: "/assets/partners/taj-logo.png", alt: 'Taj Logo' },
    { src: "/assets/partners/dubai-airports.png", alt: 'Dubai Airports' },
    { src: "/assets/partners/dcas.png", alt: 'DCAS Logo' },
    { src: "/assets/partners/rta-logo.png", alt: 'RTA Logo' },
];

// Second slider: scrolls right-to-left
const reverseAffiliations = [
    { src: "/assets/partners/emirates-palace.png", alt: 'emirates-palace' },
    { src: "/assets/partners/med-care.png", alt: 'med-care' },
    { src: "/assets/partners/american-hosp.png", alt: 'american-hosp' },
    { src: "/assets/partners/Dubai-Courts.png", alt: 'Dubai-Courts' },
    { src: "/assets/partners/public-prosecution.png", alt: 'public-prosecution' },
    { src: "/assets/partners/Al-Garhoud-Hospital.png", alt: 'Al-Garhoud-Hospital' },
    { src: "/assets/partners/rak-manucipality.jpg", alt: 'rak-manucipality' },
    { src: "/assets/partners/al-das-medical-clinic.png", alt: 'al-das-medical-clinic' },
    { src: "/assets/partners/unicef.png", alt: 'unicef' },
];

export default function AffiliationsSlider() {
    return (
        <section className="sponsor w-full py-10 sm:py-20">
            <div className="w-full px-0">
                {/* Section Title */}
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 sm:mb-4">
                        Our Clients
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-green-900 mx-auto mb-4 sm:mb-6"></div>
                </div>

                {/* First Swiper (Left to Right) */}
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
                        <SwiperSlide key={`top-${index}`} className="!w-[120px] sm:!w-[400px]">
                            <div className="sponsor-slide h-[100px] sm:h-[200px] flex items-center justify-center">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={200}
                                    height={100}
                                    className="object-contain max-h-full sm:w-[400px] sm:h-[200px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Spacer Between Sliders */}
                <div className="my-6 sm:my-10"></div>

                {/* Second Swiper (Right to Left) */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    loop={true}
                    dir="rtl"
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    className="sponsor-swiper"
                >
                    {reverseAffiliations.map((item, index) => (
                        <SwiperSlide key={`bottom-${index}`} className="!w-[120px] sm:!w-[400px]">
                            <div className="sponsor-slide h-[100px] sm:h-[200px] flex items-center justify-center">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={200}
                                    height={100}
                                    className="object-contain max-h-full sm:w-[400px] sm:h-[200px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
