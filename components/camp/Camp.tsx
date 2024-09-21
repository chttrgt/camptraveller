import React from "react";
import CampItem from "./CampItem";
import { ImQuotesLeft } from "react-icons/im";

const Camp = () => {
  return (
    <section className="container relative flex flex-col py-10">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[440px] xl:h-[540px]">
        <CampItem
          title="Bartın In Türkiye"
          backgroundImage="bg-bgimage"
          peoples="25 Joined"
          subtitle="Amasra is Loading"
        />
        <CampItem
          title="Bartın In Türkiye"
          backgroundImage="bg-bgimagetwo"
          peoples="25 Joined"
          subtitle="Amasra is Loading"
        />
      </div>
      <div
        className="mt-10 flex items-center justify-end px-6 lg:-mt-24"
        data-aos="fade-down"
        // data-aos-once="true" true kaldırırsak animasyon her seferinde yeniden çalışır.
        data-aos-delay="800"
      >
        <div className="relative overflow-hidden rounded-3xl bg-green-600 p-8 lg:max-w-[550px] xl:max-w-[720px]">
          <h2 className="text-5xl text-white">
            <span className="font-semibold">Lost Feel</span> And not Know
          </h2>
          <p className="mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            quae ea corporis repudiandae mollitia atque.
          </p>
          <ImQuotesLeft className="ml-auto size-16 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Camp;
