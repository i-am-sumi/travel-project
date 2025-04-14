"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-shared h-[calc(100vh-80px)] flex items-center justify-center text-white h-screen max-h-screen relative grid place-items-center bg-cover bg-no-repeat bg-center">
      <div className="container text-center pb-12 ">
        <div data-aos="fade-up">
          <h1 className="font-bold text-3xl lg:text-5xl my-4 ">
            Lets Enjoy The Nature
          </h1>
          <p className="my-2 ">
            Get the best prices on 2,000+ properties, worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
