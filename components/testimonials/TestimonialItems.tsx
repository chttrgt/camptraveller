import Image from "next/image";
import React from "react";

interface ITestimonialItemProps {
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

const TestimonialItems = ({
  aosDelay,
  description,
  img,
  name,
}: ITestimonialItemProps) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay={aosDelay}
      className="group relative w-full rounded-2xl bg-green-600 text-white shadow-xl"
    >
      <div className="h-52">
        <Image
          className="mx-auto transform rounded-full p-6 transition-all duration-500 group-hover:scale-105"
          alt=""
          src={img}
          width={200}
          height={200}
        />
      </div>
      <div className="p-4 text-center">
        <div className="w-full">
          <h1 className="mb-2 font-popins text-xl font-bold">{name}</h1>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItems;
