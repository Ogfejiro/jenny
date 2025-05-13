'use client';
import React from 'react';

const About = () => {
  return (
    <div className="py-16"> {/* Added a light background for better contrast */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-14 p-6 md:p-12">
        <div className="md:w-1/2 text-center md:text-left text-black" data-aos="fade-right"> {/* Made text black */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We are a team in law practice</h1>
          <p className="text-lg">Call JennyVideos</p>
        </div>
        <div className="md:w-1/2 text-center md:text-left text-black"> {/* Made text black */}
          
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-14 p-6 md:p-12 mt-16">
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 text-black"> {/* Made text black */}
          </div>
        <div className="md:w-1/2 text-center md:text-left order-1 md:order-2 text-black" data-aos="fade-left"> {/* Made text black */}
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <p className="text-lg">Integrity, Excellence, Client Focus.</p>
        </div>
      </div>

      {/* You can continue adding more sections with this alternating pattern */}
    </div>
  );
};

export default About;