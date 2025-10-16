"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import Img00 from "@/public/images/CoverMain.jpg";
import Img01 from "@/public/images/Cover1.jpg";
import Img02 from "@/public/images/Cover2.jpg";

export default function Cselmain() {
  return (
    <Carousel>
      <div className="flex flex-wrap items-center justify-center h-full bg-white ">
          <Image src={Img00} height={0} alt={"Welcome Cover"} objectFit="cover" />
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/general"}>
          <Image src={Img01} height={0} alt={"General Article"} objectFit="cover" />
          <div className="absolute rounded-full top-3 left-4 mt-4 xl:mt-6 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">
              Guidelines for disposing waste
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/hostel"}>
          <Image src={Img02} height={0} alt={"String Art"} objectFit="cover" />
          <div className="absolute rounded-full top-3 right-4 mt-4 xl:mt-6 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">
              Zone-specific guidelines
            </h1>
          </div>
        </Link>
      </div>
    </Carousel>
  );
}
