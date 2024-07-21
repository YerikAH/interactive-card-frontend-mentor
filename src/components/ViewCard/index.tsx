"use client";

import Image from "next/image";
import bannerMobile from "@/assets/bg-main-mobile.png";
import bannerDesktop from "@/assets/bg-main-desktop.png";
import cardBack from "@/assets/bg-card-back.png";
import cardFront from "@/assets/bg-card-front.png";
import { useWindowSize } from "@/hook";

export const ViewCard = () => {
  const windowSize = useWindowSize();
  return (
    <div
      className="w-full relative h-60 lg:h-screen grid place-items-center px-4"
    >
      <Image
        className="w-full h-full absolute"
        src={windowSize.width > 768 ? bannerDesktop : bannerMobile}
        loading="lazy"
        alt="banner"
      />

      <div className="w-auto absolute z-10 h-[65%] lg:h-fit lg:w-96 ml-12 mb-6 overflow-hidden">
        <Image
          className="w-full h-full object-cover relative z-10 "
          src={cardBack}
          loading="lazy"
          alt="banner"
        />
        <p className="text-white text-xs absolute  top-[69px]  z-20 right-10">
          000
        </p>
      </div>

      <div className="w-auto absolute z-20 h-[65%] mt-[152px] lg:w-96 lg:h-fit mr-24 shadow-2xl overflow-hidden">
        <Image
          className="w-full h-full object-cover relative z-10"
          src={cardFront}
          loading="lazy"
          alt="banner"
        />
        <div className="flex absolute z-20 top-4 left-4 items-center gap-3">
          <div className="size-8 bg-white rounded-full " />
          <div className="size-4 border border-white rounded-full " />
        </div>
        <div className="absolute z-20 top-20 px-4">
          <p className="text-white text-lg tracking-[0.15em]">
            0000 0000 0000 0000
          </p>
        </div>
        <div className="flex items-center justify-between bottom-4 absolute z-20 px-4 w-full">
          <p className="text-white text-xs">Jane Applessed</p>
          <p className="text-white text-xs">00 / 00</p>
        </div>
      </div>
    </div>
  );
};
