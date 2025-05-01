"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import Footer from '../components/footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    phone: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.inquiry,
      phone: formData.phone,
    };

    emailjs
      .send(
        'your_service_id',
        'your_template_id',
        templateParams,
        'your_user_id'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', inquiry: '', phone: '' });
        },
        () => {
          setStatus('An error occurred, please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Aram Group
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-900">Home</Link>
              <Link href="/summary" className="text-gray-600 hover:text-blue-900">Summary Information</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-900">About Us</Link>
              <Link href="/business" className="text-gray-600 hover:text-blue-900">Business & Expertise</Link>
              <Link href="/projects" className="text-gray-600 hover:text-blue-900">Projects</Link>
              <Link href="/Contact" className="text-blue-900 font-semibold">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-16 bg-green-900 text-white">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for any inquiries or collaboration opportunities
          </p>
        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:info@aramgroup.com"
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                      info@aramgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600">Eng. Mahfouz Alhalouch:</p>
                        <a
                          href="tel:+971508824660"
                          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                          +971 50 882 4660
                        </a>
                      </div>

                      <hr className="border-gray-300" />

                      <div>
                        <p className="text-gray-600">Eng. Muhammad Alzuabi:</p>
                        <a
                          href="tel:+971555471511"
                          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                          +971 55 547 1511
                        </a>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Deira, Al Rigga, Al Maktoum rd</p>
                    <p className="text-gray-600">Damas Dubai Tower</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Send An Inquiry</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-900">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold text-gray-900">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="inquiry" className="block text-lg font-semibold text-gray-900">Inquiry</label>
                  <textarea
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-900 text-white font-semibold rounded-md hover:bg-green-800 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {status && (
                <p className="text-center mt-4 text-lg text-gray-800">{status}</p>
              )}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2822446084774!2d55.3189547!3d25.261089199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccdecbd2f6f%3A0x780ab4b5082c0c07!2sDamas%20Dubai%20Tower!5e0!3m2!1sen!2sae!4v1745659819971!5m2!1sen!2sae"
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
