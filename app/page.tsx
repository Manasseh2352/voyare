'use client'
import Image from "next/image";
import Hero from "../componets/Home";
import About from "../componets/About";
import Services from "../componets/Services";
import Testimonial from "../componets/Testimonial";
import Contact from "../componets/Contact";
import Navbar from "../componets/Navbar";
import Vision from "@/componets/Vision";
import Footer from "@/componets/footer";
import { useTheme } from "../componets/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen bg-gray-50  text-black scroll-smooth ${theme === 'dark' ? 'bg-gray-900 text-white border-gray-200' : 'bg-white text-black border-gray-800'}`}>
      {/* Header */}
      <Navbar />

      {/* Main Content */}

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About/>

        {/* Services Section */}
        <Services />

        {/* Vision Section */}
        <Vision/>

        {/* Testimonials Section */}
        <Testimonial />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
