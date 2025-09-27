
"use client";

import { FaGlobe } from "react-icons/fa6";
import { FaHeart, FaShieldAlt } from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";

const mission = [
    {
        icon: <FaGlobe />,
        title: 'Global Reach',
        text:'Connect travelers with destinations worldwide through our extensive network of partners and local expertise.'
    },
    {
        icon: <FaHeart />,
        title: 'Personal Touch',
        
        text:'Deliver personalized travel experiences tailored to individual preferences and travel styles',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Safe Travel',
        text:'Ensure peace of mind with comprehensive safety measures and 24/7 support throughout your journey.'
    },
]

export default function Page() {
    return (
        <>
  <section id="about" className="py-12 border-t-2 md:h-screen sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-12"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className={`text-2xl sm:text-3xl font-bold  mb-4`}>Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-600">At VOYARE,we evaluate every journey from airport to arival,
                from getaway to grand escape delivering personalized, descreet, and luxurious experiences that redefines 
                what it means to move.
              </p>
              <p className="text-base sm:text-lg text-gray-600">We dont try to be Premium, We Are</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-1 lg:order-2"
            >
               {/* Placeholder image */}
               <Image
               src={'/img (1).jfif'}
               width={800}
               height={800}
               alt="Vision Image"
               className="rounded shadow-md"
               />
            </motion.div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl text-center mt-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-8 sm:gap-12"
          >
             {mission.map((missionItem, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className="p-5 shadow-md rounded border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
              >
                <p className="flex justify-center text-3xl text-red-500">{missionItem.icon}</p>
                <h1 className="text-xl font-bold mt-2">{missionItem.title}</h1>
                <p className="mt-2 ">{missionItem.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        </>
    );
}
