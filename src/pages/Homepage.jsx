import Home from "../components/Home";
import About from "../components/About";
import Works from "../components/Works";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (
        <>
            <Header />
            <section id="home" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
                <Home />
            </section>
            <section id="about" className="py-20 bg-gray-200">
                <About />
            </section>   
            <section id="works" className="py-20 bg-gradient-to-b from-purple-400 to-purple-600">
                <Works />
            </section> 
            <section className="py-20 bg-gray-900 text-white">
                <Testimonials />
            </section>
            <section id="courses" className="py-20 bg-gray-100">
                <Courses />
            </section> 
            <section id="contact" className="py-20 bg-white">
                <Contact />
            </section>     
        </>
    );
}

export default HomePage