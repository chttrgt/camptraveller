import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import FeaturesItem from "./FeaturesItem";

const Features = () => {
  return (
    <section className="bg-patterntwo flex flex-col items-center justify-center overflow-hidden bg-center bg-no-repeat">
      <div className="container relative flex w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            alt=""
            src="/camper/phone.png"
            width={440}
            height={1000}
            data-aos="fade-right"
            data-aos-delay="300"
          />
        </div>
        <div className="flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/pattern/camp.png"
              alt=""
              width={50}
              height={50}
              data-aos="fade-down"
              data-aos-delay="100"
            />
            <h1 className="mb-5 font-pacifiko text-3xl font-semibold tracking-wider lg:text-5xl">
              Our Features
            </h1>
            <ul className="mt-10 grid gap-10 md:grid-cols-2">
              {FEATURES.map((feature) => (
                <FeaturesItem
                  description={feature.description}
                  title={feature.title}
                  key={feature.title}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
