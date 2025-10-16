import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl py-6 mt-10 backdrop-blur-2xl border-t border-gray-300">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row px-8">
        {/* <a
          href="https://waste.iitm.ac.in"
          className="group opacity-50 hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`text-center text-xs xl:text-sm font-light md:text-left`}>
            Waste Management Committee <br />
            Indian Institute of Technology Madras <br />
            Chennai, TN 600036.
          </p>
        </a> */}
        <p className="text-xs xl:text-sm font-light">© 2025 IIT Madras Waste Management Portal, All rights reserved.</p>
        <a
          href="https://www.iitm.ac.in"
          className="group opacity-50 hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="relative"
            src="/iitmlogo.svg"
            alt="IIT Madras logo"
            width={80}
            height={80}
            priority
          />
        </a>
      </div>
    </footer>
  );
}
