"use client";

import { motion } from "framer-motion";


export default function Contact() {
  return (
    <section id='contact' className="py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto text-center shadow-md border-2 border-gray-200 rounded py-5 px-4 md:px-8 ">
        {/* Left: Contact Info */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-snug">
            Ready to start your next adventure? Contact our travel experts today.
          </p>
          <div className="flex flex-col md:flex-row justify-center place-items-center gap-8">
            {/* Phone */}
            <div className="flex items-center gap-5">
              <div className="bg-gray-200 rounded-xl w-14 h-14 flex items-center justify-center">
                <svg width="28" height="28" fill="none" stroke="#232a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-900">Phone</div>
                <div className="text-gray-500 text-base mt-1">+1 (555) 123-4567</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="bg-gray-200 rounded-xl w-14 h-14 flex items-center justify-center">
                <svg width="28" height="28" fill="none" stroke="#232a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6"/></svg>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-900">Email</div>
                <div className="text-gray-500 text-base mt-1">info@simpletravel.com</div>
              </div>
            </div>
            {/* Office */}
            <div className="flex items-center gap-5">
              <div className="bg-gray-200 rounded-xl w-14 h-14 flex items-center justify-center">
                <svg width="28" height="28" fill="none" stroke="#232a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-900">Office</div>
                <div className="text-gray-500 text-base mt-1">123 Travel Street, Suite 100<br/>New York, NY 10001</div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right: Contact Form */}
        {/* <motion.div
          className="flex-1.2 min-w-[340px] max-w-xl bg-white rounded-xl shadow-md border border-gray-200 p-8 md:p-10"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
        </motion.div> */}
      </div>
    </section>
  );
}
