"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";
import { CiMicrophoneOn } from "react-icons/ci";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="w-full relative border-b-2 border-[#8B8B95]">
      <div className="bg-[url('/background.png')] bg-cover bg-center pt-60 px-12 z-0">
        <div className="overlay z-10"></div>
        <div className="relative flex flex-col flex-wrap md:ml-20 mb-20 md:mb-60 z-30">
          <h2 className="text-white text-lg md:text-3xl mb-2 pl-2">
            안산 고잔 신도시
          </h2>
          <h1 className="flex flex-col lg:flex-row text-white mb-2 text-4xl md:text-6xl lg:text-6xl font-extrabold">
            안산 퍼블릭{" "}
            <span className="text-[var(--color-pink)]">미르노래광장</span>{" "}
            <span>
              <CiMicrophoneOn />
            </span>
          </h1>
          <TypeAnimation
            className="text-white text-2xl md:text-6xl pl-2"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "ANSAN PUBLIC KARAOKE",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

          {/* <p className="text-white pl-2">ANSAN PUBLIC KARAOKE</p> */}
        </div>
        <div className="flex flex-col lg:ml-20 z-20">
          <div className="flex relative justify-between mb-4 w-7">
            <p className="text-white text-3xl lg:text-4xl pr-2 hover:text-pink">
              <Link href="/">
                <FaInstagram />
              </Link>
            </p>
            <p className="text-white text-3xl lg:text-4xl pr-2 hover:text-pink">
              <Link href="/">
                <FaFacebook />
              </Link>
            </p>
            <p className="text-white text-3xl lg:text-4xl hover:text-pink">
              <Link href="/">
                <RiKakaoTalkLine />
              </Link>
            </p>
          </div>
          <div className="flex relative text-2xl pb-24">
            <p className="text-[var(--color-pink)] text-4xl lg:text-5xl mr-4 hover:text-white">
              <Link href="tel:010-0000-0000">
                <FiPhoneCall />
              </Link>
            </p>
            <div className="text-white font-bold">
              <p className="lg:text-2xl">예약문의</p>
              <p className="lg:text-2xl hover:text-pink ">
                <Link href="/">010-6285-5760</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
