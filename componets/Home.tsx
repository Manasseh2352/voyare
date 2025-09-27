"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
 
  return (
        <>
             
  <section id="home" className="py-12 md:h-screen sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 mt-20 md:mt-10  sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 sm:gap-12"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">Discover Your Next Adventure</h1>
              <p className="text-base text-gray-500 lg:text-left sm:text-lg md:text-xl mb-6 sm:mb-8">Simple Travel makes exploring the world effortless. From breathtaking destinations to seamless booking experiences, 
                we're here to turn your travel dreams into reality.</p>
              <motion.a 
                href="#contact" 
                className="inline-block bg-gray-800 text-white px-6 sm:px-8 py-5 rounded-lg font-semibold hover:bg-gray-500 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Get Started</motion.a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              {/* Placeholder image */}
              <Image 
              src={"/LOGO.jpg"}
              height={800}
              width={800}
              alt="Travelers"
              className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </section>
        </>
    );
}
