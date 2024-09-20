"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div
      className="text-4xl"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay="500"
    >
      <h1 className="font-popins">Camp</h1>
      <h1 className="font-roboto">Camp</h1>
      <h1 className="font-pacifiko">Camp</h1>
    </div>
  );
}
