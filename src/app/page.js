'use client'; // Ensure page.js is a Client Component

import React, { useEffect } from 'react';
import Nav from '@/components/nav';
import About from '@/components/about';
import Services from '@/components/services';
import Team from '@/components/team';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import styles from './page.module.css'; // Import the CSS module as 'styles'
import AOS from 'aos'; // Import the AOS library
import 'aos/dist/aos.css'; // Import the AOS styles

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS
  }, []);

  useEffect(() => {
    // Function to handle smooth scrolling
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    // Add click listeners to all anchor links within the nav
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen text-white relative ${styles['responsive-bg']}`}> {/* Use styles['responsive-bg'] */}
      <div
        className='absolute inset-0 bg-black opacity-0'
        style={{ zIndex: -1 }}
      ></div>
      <Nav />
      <About id="about" />
      <Services id="services" />
      <Team id="team" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Page;