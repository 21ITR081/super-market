import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import logoImage from "../../components/navbar/Designer.png";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-blue-400"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl px-4 py-8 bg-white shadow-md rounded-lg"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-4 text-center text-gray-800"
        >
         <div className="logo flex items-center md:mb-0">
          <Link to={'/'}>
            <img src={logoImage} alt="Logo" className="h-12 md:h-14 w-auto md:w-auto mr-8" />
          </Link>
          Maruthi SuperMarket
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-700 mb-2 leading-relaxed"
        >
          Welcome to Maruthi Supermarket, your one-stop destination for all your household needs and culinary delights. Established five years ago, Maruthi Supermarket has been proudly serving the community with a wide range of products, from groceries to stationery, ensuring that every shopper finds what they need under one roof.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-600 mb-4"
        >
          Address : <span className="font-semibold">124-KOMARAPALAYAM MAIN ROAD ZONE A,
            PALLIPALAYAM AGRAHARAM,
            NAMMAKKAL-638 008.<br/>
            Phone :82204-15915<br/>Email :mrbody5667@gmail.com
            
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full h-72"
        >
          <iframe
            title="7mobiles Shop Location"
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1955.884224666696!2d77.72462064112196!3d11.351616215957256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f4963ea8525%3A0x4142a7870a3b4cda!2sMaruti%20Stores!5e0!3m2!1sen!2sin!4v1710895080399!5m2!1sen!2sin"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
