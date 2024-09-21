import React from "react";
import { FaMap } from "react-icons/fa";

interface IFeatureItemProps {
  title: string;
  description: string;
}

const FeaturesItem = ({ description, title }: IFeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div
        className="rounded-full bg-green-100 p-4"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <FaMap className="size-9 text-green-600" />
      </div>
      <h2 className="mt-5 font-popins font-semibold">{title}</h2>
      <p className="mt-5 font-light">{description}</p>
    </li>
  );
};

export default FeaturesItem;
