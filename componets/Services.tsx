
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    img:'/img (5).jfif',
    title:'Flight Booking',
    text:'Compare and book flights from major airlines worldwide'
  },
  {
    img:'/img (4).jfif',
    title:'Hotel Reservations',
    text:'Find and book accommodations that suit your budget and style'
  },
  {
    img:'/rental.jfif',
    title:'Car Rentals',
    text:'Find and rent cars that suit your budget and style'
  },
  {
    img:'/img (2).jfif',
    title:'Travel Insurance',
    text:'Comprehensive coverage to protect your travel investment'
  },
]

export default function Page() {
    return (
        <>
  <section id="services" className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold  text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >Our Services</motion.h2>
            <p className="text-base sm:text-lg "></p>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className=" rounded-lg shadow-md text-center border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                 {/* Icon placeholder */}
                 <Image src={service.img} 
                 alt={service.title} 
                 width={50} 
                 height={50} 
                 className="bg-gray-300 w-full rounded"/>
                <h3 className="text-lg mt-5 sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        </>
    );
}
