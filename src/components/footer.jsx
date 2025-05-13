import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/jennydreo', icon: FaInstagram },
    { name: 'Twitter', url: 'https://twitter.com/jennys_vid', icon: FaTwitter },
    { name: 'Facebook', url: 'https://www.facebook.com/jennydreos_outlet', icon: FaFacebook },
    { name: 'TikTok', url: 'https://www.tiktok.com/@ojonekech', icon: null }, // No specific TikTok icon imported here
  ];

  const contactEmail = 'mailto:onojajennifer2002@gmail.com';

  return (
    <footer className="bg-black shadow-md py-8 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          {socials.map((social) => (
            <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              {social.icon ? <social.icon size={24} /> : social.name === 'TikTok' ? <FaInstagram size={24} /> : null /* Using Instagram icon as a placeholder for TikTok if no specific icon is desired */}
            </Link>
          ))}
        </div>
        <div>
          <Link href={contactEmail} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;