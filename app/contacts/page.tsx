"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';

export default function Contacts() {
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
        'your_service_id', // EmailJS service ID
        'your_template_id', // EmailJS template ID
        templateParams,
        'your_user_id' // EmailJS user ID
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
              <Link href="/contacts" className="text-blue-900 font-semibold">Contacts</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Form</h2>
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

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2822446084774!2d55.3189547!3d25.261089199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccdecbd2f6f%3A0x780ab4b5082c0c07!2sDamas%20Dubai%20Tower!5e0!3m2!1sen!2sae!4v1745659819971!5m2!1sen!2sae" width="600" height="450" loading="lazy"></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer  */}
      <Footer />
    </div>
  );
}
