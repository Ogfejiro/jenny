"use-client";

import React from 'react';
import Image from 'next/image';
import teamData from '/team.json'; // Adjust path if needed

const Team = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-right">Meet Our Leadership Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <div
            key={member.id}
            className={`bg-#f0f0f8 rounded-lg shadow-md overflow-hidden ${
              index === 2 ? 'md:order-2' : index < 2 ? 'md:order-1' : 'md:order-3'
            }`}
          >
            <div className="relative w-full h-64" data-aos="fade-left">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/placeholder.png";
                }}
              />
            </div>
            <div className="p-6 text-center" data-aos="fade-up">
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-600 text-sm">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;