import Image from "next/image";
import Hero from "../componets/Home";
import About from "../componets/About";
import Services from "../componets/Services";
import Testimonial from "../componets/Testimonial";
import Contact from "../componets/Contact";
import Navbar from "../componets/Navbar";
import Vision from "@/componets/Vision";
import Footer from "@/componets/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
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
