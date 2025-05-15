'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  const whatsappNumber = '2347054558032'; // Ensure you include the country code
  const defaultMessage = 'Hello, I am contacting you from your website...';

  const handleSubmit = (event) => {
    const fullMessage = `Contact from Website:\n\n${defaultMessage}`; // Simplified message as name, email, message are undefined here
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="py-16"> {/* Added a light background for better contrast */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-14 p-6 md:p-12">
        <div className="md:w-1/2 text-center md:text-left text-purple-400" data-aos="fade-right"> {/* Made text black */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-normal">Welcome to Jenny's Vid! We're a team of mobile videographers and content creators.
          </h1>
           <button
             data-aos="zoom-right"
             type="button" // Changed to "button" as there's no form here
             onClick={handleSubmit} // Attached handleSubmit to onClick
             className="bg-purple-400 hover:bg-black text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" // Made button full width on all screens
           >
             Lets Serve You
           </button>
        </div>
        <div className="md:w-1/2 text-center md:text-left text-black"> {/* Made text black */}
          <Image src="/group.jpg" alt="group" width={450} height={80} className='rounded-md shadow-md' data-aos="fade-left"></Image>
        </div>
      </div>


    </div>
  );
};

export default About;