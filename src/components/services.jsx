"use-client";
import React from 'react';
import Link from 'next/link';

// Assuming services.json is in the public directory
import servicesData from '/services.json';

const Services = () => {
  const tiktokUrl = 'https://www.tiktok.com/@your_tiktok_username'; // Replace with your actual TikTok URL

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> {/* Added mb-8 for spacing below cards */}
        {servicesData.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {service.thumbnailUrl && (
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={service.thumbnailUrl}
                  alt={`${service.title} Thumbnail`}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="p-6" data-aos="fade-left">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700 text-base mb-4">{service.description}</p>
              {service.videoUrl && (
                <Link
                  href={service.videoUrl}
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center" data-aos="fade-right">
        <Link
          href={tiktokUrl}
          className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Us on TikTok
        </Link>
      </div>
    </div>
  );
};

export default Services;