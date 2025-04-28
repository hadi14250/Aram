import Link from "next/link";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import Map from './components/Map';
import InfoBlocks from './components/InfoBlocks';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-green-900 hover:text-green-700 transition-colors duration-300 mb-4 sm:mb-0">
              Aram Group
            </Link>
            <nav className="hidden md:flex space-x-4 sm:space-x-8">
              <Link href="/" className="text-green-900 font-semibold border-b-2 border-green-900">
                Home
              </Link>
              <Link href="/summary" className="text-gray-600 hover:text-green-900 hover:border-b-2 hover:border-green-900 transition-all duration-300">
                Summary Information
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-900 hover:border-b-2 hover:border-green-900 transition-all duration-300">
                About Us
              </Link>
              <Link href="/business" className="text-gray-600 hover:text-green-900 hover:border-b-2 hover:border-green-900 transition-all duration-300">
                Business & Expertise
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-green-900 hover:border-b-2 hover:border-green-900 transition-all duration-300">
                Projects
              </Link>
              <Link href="/vision" className="text-gray-600 hover:text-green-900 hover:border-b-2 hover:border-green-900 transition-all duration-300">
                Vision & Mission
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <HeroSlider />
        </div>
      </section>

      {/* Summary Information */}
      <section className="relative -mt-16 sm:-mt-32 z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
      
      {/* Card 1 */}
      <div className="bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full overflow-hidden">
        <div className="w-full h-48 sm:h-64 relative">
          <Image
            src="/images/services-img1.png"
            alt="Aram Group"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="p-4 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">Civil & Structural Construction</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
            Specializing in building construction, repairs, maintenance, and renovations.
          </p>
          <div className="text-center mt-auto">
            <Link 
              href="/about" 
              className="inline-block bg-green-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full overflow-hidden">
        <div className="w-full h-48 sm:h-64 relative">
          <Image
            src="/images/general_trading_picture.jpeg"
            alt="General Trading"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="p-4 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">General Trading</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
            Delivering quality products and tailored solutions across diverse industries, building trusted connections and ensuring reliable service every step of the way.
          </p>
          <div className="text-center mt-auto">
            <Link 
              href="/business" 
              className="inline-block bg-green-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full overflow-hidden">
        <div className="w-full h-48 sm:h-64 relative">
          <Image
            src="/images/building_contracting_picture.jpeg"
            alt="Building Contracting"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="p-4 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">Building Contracting</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
            Expertly managing construction, renovation, and maintenance projects with a focus on quality, efficiency, and long-term value to ensure complete client satisfaction.
          </p>
          <div className="text-center mt-auto">
            <Link 
              href="/business" 
              className="inline-block bg-green-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white/90 backdrop-blur-sm p-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full overflow-hidden">
        <div className="w-full h-48 sm:h-64 relative">
          <Image
            src="/images/agircultural_services_picture.jpeg"
            alt="Agricultural Services"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="p-4 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">Agricultural Services</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
            Providing reliable support and innovative solutions for farming and agribusiness, focused on productivity, sustainability, and complete client satisfaction.
          </p>
          <div className="text-center mt-auto">
            <Link 
              href="/about" 
              className="inline-block bg-green-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-10 sm:py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 sm:mb-4">About Us</h2>
            <div className="w-16 sm:w-24 h-1 bg-green-900 mx-auto mb-4 sm:mb-6"></div>
          </div>
            <p className="text-sm sm:text-base text-gray-600">
              Founded in 2006 by Eng. Mohamad Alhalouch, Aram Group has grown from a small contracting company to a diversified business group.
            </p>
              <p className="text-sm sm:text-base text-gray-600">
                Our journey began with a vision to provide exceptional construction services. Today, we have expanded our expertise to include trading and agricultural services, becoming a trusted name in multiple industries.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                With a team of experienced professionals and a commitment to quality, we continue to deliver excellence in every project we undertake.
              </p>
              <div className="text-center">
              <Link 
                href="/about" 
                className="inline-block bg-green-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Learn More About Us
              </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/aram_transparent.png"
              alt="About Aram Group"
              fill
              className="object-contain transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
          </div>

          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section id="vision" className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 sm:mb-4">Vision & Mission</h2>
            <div className="w-16 sm:w-24 h-1 bg-green-900 mx-auto mb-4 sm:mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-900">
              <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-600">
                To be the leading provider of comprehensive solutions in construction, trading, and agricultural services, recognized for our commitment to excellence and innovation.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-900">
              <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-600">
                To deliver exceptional value to our clients through quality services, sustainable practices, and innovative solutions, while maintaining the highest standards of integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Expertise */}
      <section className="py-10 sm:py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 sm:mb-4">Our Business & Expertise</h2>
            <div className="w-16 sm:w-24 h-1 bg-green-900 mx-auto mb-4 sm:mb-6"></div>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">Aram Construction</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Specialized in construction and contracting services with a focus on quality and innovation.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">


                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">Aram Golden Line General Trading</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Providing comprehensive trading solutions with a wide range of products and services.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">Golden Aram Building Contracting</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Expert in building contracting with a focus on quality and client satisfaction.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                        <img src="/images/flower.png" alt="Icon" className="h-8 w-8" />
            </div>

              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 sm:mb-4 text-center">Aram Golden Line Agricultural Services</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Delivering innovative agricultural solutions and services to meet modern farming needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 sm:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 sm:mb-4">Projects</h2>
      <div className="w-16 sm:w-24 h-1 bg-green-900 mx-auto mb-4 sm:mb-6"></div>
      <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
        Explore our portfolio of successful projects
      </p>
    </div>

    {/* Masonry Layout */}
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {[
        {
          src: '/assets/porjects/aramprj1.png',
          title: 'Construction Project',
          description: 'Years of experience in construction',
        },
        {
          src: '/assets/porjects/aramprj8.png',
          title: 'Trading Project',
          description: 'Premium materials and standards',
        },
        {
          src: '/assets/porjects/aramprj9.png',
          title: 'Agricultural Project',
          description: 'Reliable project completion',
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl shadow-lg break-inside-avoid"
        >
          <div className="relative w-full">
            <Image
              src={item.src}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-lg sm:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <a 
        href="/projects" 
        className="inline-block bg-green-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        View All Projects
      </a>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-700 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-green-100">
            Contact us today to discuss your project requirements
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
