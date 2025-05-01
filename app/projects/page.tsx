'use client';

import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';
import Footer from '../components/footer';

const projects = [
  {
    title: 'Modern Office Complex',
    category: 'commercial',
    location: 'Downtown Business District',
    year: '2023',
    description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
    color: 'bg-green-100',
    image: '/images/projects/project-1.png',
  },
  {
    title: 'Shopping Mall Complex',
    category: 'commercial',
    location: 'Suburban Area',
    year: '2022',
    description: 'Modern retail space with entertainment facilities and parking agricultural.',
    color: 'bg-green-100',
    image: '/images/projects/project-2.png',
  },
  {
    title: 'Luxury Residential Tower',
    category: 'residential',
    location: 'Waterfront District',
    year: '2023',
    description: 'Premium residential apartments with panoramic views and world-class amenities.',
    color: 'bg-green-100',
    image: '/images/projects/project-3.png',
  },
  {
    title: 'City Bridge Project',
    category: 'residential',
    location: 'River City',
    year: '2022',
    description: 'A modern bridge connecting two major districts, improving urban mobility.',
    color: 'bg-green-100',
    image: '/images/projects/project-4.png',
  },
  {
    title: 'Eco-Friendly Housing',
    category: 'residential',
    location: 'Green Valley',
    year: '2022',
    description: 'Sustainable residential community with solar power and water recycling systems.',
    color: 'bg-green-100',
    image: '/images/projects/project-5.png',
  },
  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-6.png',
  },
  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-7.png',
  },
  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-8.png',
  },
  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-9.png',
  },
  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-10.png',
  },
  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-11.png',
  },

  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-13.png',
  },
  {
    title: 'Metro Station Development',
    category: 'residential',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/project-14.png',
  },
  {
    title: 'Metro Station Development',
    category: 'agricultural',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/agri-project-1.jpeg',
  },
  {
    title: 'Metro Station Development',
    category: 'agricultural',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/agri-project-2.jpeg',
  },
  {
    title: 'Metro Station Development',
    category: 'agricultural',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/agri-project-3.jpeg',
  },
  {
    title: 'Metro Station Development',
    category: 'agricultural',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/agri-project-4.jpeg',
  },
  {
    title: 'Metro Station Development',
    category: 'agricultural',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/agri-project-5.jpeg',
  },
  {
    title: 'Metro Station Development',
    category: 'agricultural',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/agri-project-6.jpeg',
  },
  {
    title: 'Metro Station Development',
    category: 'agricultural',
    location: 'City Center',
    year: '2021',
    description: 'Modern metro station with integrated commercial spaces and accessibility features.',
    color: 'bg-green-100',
    image: '/images/projects/agri-project-7.jpeg',
  },
];


export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="relative bg-[#13492E] text-white py-16 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-green-100">
            Showcasing our finest work in construction and development
          </p>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full ${filter === 'all'
              ? 'bg-[#13492E] text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`px-6 py-2 rounded-full ${filter === 'commercial'
              ? 'bg-[#13492E] text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            Commercial
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`px-6 py-2 rounded-full ${filter === 'residential'
              ? 'bg-[#13492E] text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            Residential
          </button>
          <button
            onClick={() => setFilter('agricultural')}
            className={`px-6 py-2 rounded-full ${filter === 'agricultural'
              ? 'bg-[#13492E] text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            Agricultural
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredProjects.map((project, index) => (
            <div key={index} className="break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#0F492B]">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{project.location}</span>
                  <span className="capitalize">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
  <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-700 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
    <p className="text-xl mb-10 max-w-3xl mx-auto text-green-100">
      Let's discuss how we can bring your vision to life
    </p>
    <Link
      href="/Contact"
      className="inline-block bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Start Your Project
    </Link>
  </div>
</section>


      <Footer />
    </div>
  );
}
