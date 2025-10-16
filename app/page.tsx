import Cselmain from "@/components/mainCsel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-between pt-4 gap-10 xl:gap-16">
        {/* Carousel */}
        <div className="h-10 sm:h-[100px] md:h-[300px] xl:h-[420px] w-20 sm:w-[100px] md:w-[700px] xl:w-[1000px] mt-20">
          <Cselmain />
        </div>
        <div>
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 pt-10 xl:pt-16 my-4 border-t border-gray-300">
            <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
              <h2 className="text-4xl font-bold lg:text-5xl">What can you find on this website?</h2>
              <p className="font-light text-md">This portal aims to be the one-stop repository of all the guidelines for handling of waste on the IIT Madras campus. There is extensive map provided for handling and disposing different wastes (including construction debris and lab waste).</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="flex flex-col items-center space-y-4 px-10 md:border-r border-gray-300">
                <div className="text-xl md:text-5xl font-bold">12K</div>
                <p className="text-sm md:text-md">Resident students</p>
              </div>
              <div className="flex flex-col items-center space-y-4 px-10 md:border-r border-gray-300">
                <div className="text-xl md:text-5xl font-bold">4K</div>
                <p className="text-sm md:text-md">Faculty, Staff & Family</p>
              </div>
              <div className="flex flex-col items-center space-y-4 px-10">
                <div className="text-xl md:text-5xl font-bold">4K</div>
                <p className="text-sm md:text-md">Academic staff</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-10 pt-10 xl:pt-16 my-6 border-t border-gray-300">
            <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
              <h2 className="text-4xl font-bold lg:text-5xl">Contact</h2>
              <p className="font-light text-md">If you have any issues accessing the contents in this website or have queries regarding handling/disposing a specific waste, feel free to reach out at waste at iitm.ac.in.</p>
            </div>
            <Link href={'emailto:waste@iitm.ac.in'} className="flex flex-col items-center justify-between">
              <button type="button" className="text-white bg-black hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Write to us</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
