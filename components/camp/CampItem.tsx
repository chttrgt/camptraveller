import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaMap } from "react-icons/fa";

interface ICampItemProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peoples: string;
}

const CampItem = ({
  backgroundImage,
  peoples,
  subtitle,
  title,
}: ICampItemProps) => {
  return (
    <div
      className={`${backgroundImage} h-full w-full min-w-[500px] rounded-3xl bg-cover bg-no-repeat lg:min-w-[800px]`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6">
        <div className="flex items-center gap-5">
          <div
            className="rounded-full bg-green-100 p-4"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <FaMap className="size-9 text-green-600" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-roboto text-xl font-semibold text-white">
              {title}
            </h4>
            <p className="font-popins text-sm text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image alt="" src={url} key={url} width={52} height={52} />
            ))}
          </span>
          <p className="font-popins font-semibold text-white">{peoples}</p>
        </div>
      </div>
    </div>
  );
};

export default CampItem;
