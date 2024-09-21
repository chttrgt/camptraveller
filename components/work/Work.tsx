import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="mt-4 h-full w-full">
      <div className="flex items-center justify-center">
        <div className="container">
          <Image
            src="/pattern/camp.png"
            alt=""
            width={80}
            height={80}
            data-aos="fade-down"
            data-aos-delay="100"
          />
          <div className="flex flex-col justify-center">
            <h1 className="mb-5 font-pacifiko text-3xl font-semibold tracking-wider lg:text-5xl">
              Work
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae
              temporibus illo ipsum iste facere, quaerat tempora officia
              mollitia vel, eligendi magnam maxime fugit? Reprehenderit repellat
              nobis modi ratione tenetur.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae
              temporibus illo ipsum iste facere, quaerat tempora officia
              mollitia vel, eligendi magnam maxime fugit? Reprehenderit repellat
              nobis modi ratione tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
