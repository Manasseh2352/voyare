
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonies = [
  {
    name: "Jane Doe",
    job: 'Adventure Traveler',
    image: "/team-1 tech-connect.jpg",
    text: "Amazing service! My trip was perfectly planned and exceeded all expectations."
  },
  {
    name: "Jane Doe",
    job: 'Business Traveler',
    image: "/team-2 tech connect.jpg",
    text: "Amazing service! My trip was perfectly planned and exceeded all expectations."
  },
  {
    name: "Jane Doe",
    job: 'Family Traveler',
    image: "/team-3 tech connect.jpg.jpg",
    text: "Amazing service! My trip was perfectly planned and exceeded all expectations."
  },

]
export default function Page() {
    return (
        <>
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >What Our Customers Say</motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {testimonies.map((testimony, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                 {/* User image placeholder */}
                 <div className="flex flex-row gap-3 place-items-center">
                  <Image
                 src={testimony.image}
                 width={100}
                 height={100}
                 alt="Testimonial Image"
                 className="h-20 w-20 rounded-full"
                 />
                 <div>
                  <h4 className="font-semibold text-black text-sm sm:text-base">{testimony.name}</h4>
                  <p className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base">{testimony.job}</p>
                 </div>
                 </div>
                <p className="text-gray-600 mb-3 mt-5 sm:mb-4 italic text-sm sm:text-base">{testimony.text}</p>
                
              </motion.div>
              ))}

            </motion.div>
          </div>
        </section>
        </>
    );
}
