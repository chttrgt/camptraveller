"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Camp from "@/components/camp/Camp";

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
    <>
      <Navbar />
      <Hero />
      <Camp />
    </>
  );
}
