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
              Building Tomorrow's World Today
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Excellence in Construction and Development
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Delivering excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services-img1.png"
                  alt="Expert Team"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Expert Team</h3>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Years of experience in construction
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Our team of professionals brings years of experience and expertise to every project.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services-img5.jpg"
                  alt="Quality Assured"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Quality Assured</h3>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Premium materials and standards
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                We maintain the highest standards of quality in all our construction projects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services-img6.jpg"
                  alt="On-Time Delivery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">On-Time Delivery</h3>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Reliable project completion
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                We complete projects on schedule without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
