
"use client";

import Image from "next/image";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Tick = [
    {
        text:'Sustainable tourism practices that benefit local communities'
    },
    {
        text:'Technology-driven solutions for seamless travel experiences'
    },
    {
        text:'Building bridges between cultures through meaningful travel'
    },
]

export default function Page() {
    return (
        <section id='vision' className="py-12 sm:py-16 lg:py-20 bg-white">
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
                  className="lg:w-1/2"
                >
                  <Image 
                  src={"/img (5).jfif"}
                  height={400}
                  width={600}
                  alt="Vision Image"
                  className="w-full h-auto rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-black leading-tight">Our Vision</h2>
                    <p className="text-base text-gray-500 sm:text-lg md:text-xl mb-6 sm:mb-8">
                        At Voyare, our vision is to revolutionize the way people explore the world. We aspire to be the leading platform that simplifies travel planning, making it accessible and enjoyable for everyone. By leveraging cutting-edge technology and a customer-centric approach, we aim to create seamless travel experiences that inspire wanderlust and foster global connections.
                    </p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                        {Tick.map((tick, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-center mb-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                              viewport={{ once: true }}
                            >
                                <span className="text-black text-xl mr-2"><IoMdCheckmarkCircle /></span>
                                <p className="text-gray-600 text-lg">{tick.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
