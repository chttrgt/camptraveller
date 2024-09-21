import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight, FaNetworkWired, FaStar } from "react-icons/fa";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex min-h-[550px] items-center justify-center md:min-h-[600px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center bg-pattern pt-10">
            <Image
              src="/pattern/camp.png"
              alt=""
              width={100}
              height={100}
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="100"
            />
            <h1
              className="font-popins text-6xl font-bold lg:text-8xl"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="200"
            >
              Traveller Love This
            </h1>
            <p
              className="mt-5 font-light"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              eveniet neque praesentium animi, cupiditate minima nobis earum
              voluptatibus sunt optio illo eius itaque vel enim?
            </p>
            <div
              className="mt-5 flex items-center gap-2 text-xl font-semibold"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="500"
            >
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <FaStar key={index} className="size-8 text-yellow-400" />
                ))}
              <span>256K</span> <span className="text-green-600">Views</span>
            </div>
            <div
              className="mt-5 flex flex-row gap-3"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <Button variant="login">
                <FaAngleDoubleRight className="mr-2" />
                Continue
              </Button>
              <Button>
                <FaNetworkWired className="mr-2" /> Work
              </Button>
            </div>
          </div>
          <div className="relative flex min-h-[450px] justify-center md:min-h-[550px] lg:min-h-[650px]">
            <Image src="/pattern/7.png" alt="" fill className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
