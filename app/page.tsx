import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/background.jpg"
            alt="Construction background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building Excellence Across Sectors
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Since 2006, delivering quality in construction, agriculture, and trading
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Aram Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to building long-term partnerships based on integrity, performance, value, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Since 2006, Aram Construction L.L.C has carried out numerous contracting projects across various fields, especially in construction infrastructure works, which have fostered strong relationships with clients through trust, satisfaction, and consistent quality.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, Aram Construction has become a trusted name in contracting, guided by its Founder & Owner, Engr. Mohamad Alhalouch, who brings long-term experience earned through dedication and hard work throughout the United Arab Emirates.
              </p>
              <p className="text-gray-700">
                With a solid foundation of success, Engr. Mohamad Alhalouch expanded his vision beyond construction, growing the company's reach into contracting, agricultural services, and general trading. This diversification reflects our commitment to delivering excellence, innovation, and value across all sectors we serve.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-aram.jpg"
                alt="Aram Group Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a benchmark in the construction and trading sectors by continuously delivering exceptional quality, fostering innovation, and driving sustainable development across the UAE and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide reliable and high-quality solutions in contracting, agriculture, and general trading, ensuring customer satisfaction through professionalism, integrity, and dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Business & Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Delivering excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Construction Service */}
            <div className="group relative p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services-img1.png"
                  alt="Aram Construction"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Aram Construction</h3>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Civil & Structural Construction
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Our civil and structural construction services cover a wide range of essential infrastructure and building solutions. We specialize in creating durable, safe, and efficient structures.
              </p>
            </div>

            {/* Trading Service */}
            <div className="group relative p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services-img5.jpg"
                  alt="Aram Golden Line General Trading"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Aram Golden Line</h3>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      General Trading
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Delivering quality products and tailored solutions across diverse industries, building trusted connections and ensuring reliable service every step of the way.
              </p>
            </div>

            {/* Agricultural Service */}
            <div className="group relative p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services-img6.jpg"
                  alt="Aram Golden Line Agricultural Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Agricultural Services</h3>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Sustainable landscaping solutions
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Our agricultural services division is dedicated to enhancing outdoor environments through sustainable landscaping, expert plant care, and creative floral solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise in construction, trading, and agricultural services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
