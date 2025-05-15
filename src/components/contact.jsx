'use client'; // This component needs client-side functionality for the form submission

import React from 'react';

const Contact = () => {
  const whatsappNumber = '2347054558032'; // Ensure you include the country code
  const defaultMessage = 'Hello, I am contacting you from your website...';

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const fullMessage = `Contact from Website:\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\n${defaultMessage}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-24">
        {/* Left Div: Contact Us Text */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4" data-aos="fade-left">Contact Us</h1>
          <p className='text-purple-300 text-2xl font-bold' data-aos="fade-right">We are here to help you anytime anyday</p>
        </div>

        {/* Right Div: Contact Form */}
        <div className="bg-purple-200 shadow-md rounded-lg p-8 w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4" data-aos="zoom-right">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4" data-aos="zoom-left">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-6"data-aos="fade-up">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea id="message" name="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
            </div>
            <button
            data-aos="zoom-right"
              type="submit"
              className="bg-purple-400 hover:bg-black text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full" // Made button full width on all screens
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;