"use client";

import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "A SET",
    id: "aset",
    content: (
      <div className="flex flex-col justify-center">
        <div className="w-full">
          <h2 className="w-96 text-center pt-2 font-semibold text-3xl mb-10 rounded-full bg-white text-slate-800">
            소주, 맥주 무제한 세트
          </h2>
          <h3 className="text-2xl font-semibold mb-3 text-pink">시간: 90분</h3>
          <h4 className="text-2xl font-semibold mb-3 text-white">
            가격: 전화문의
          </h4>
          <p className="text-xl text-white ">
            소주, 맥주, 안주, 음료, 봉사료 포함
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-9">
          <Image
            className="m-1"
            src={"/beer.png"}
            width={600}
            height={600}
            alt="소주 맥주 무제한"
          />
          <Image
            className="m-1"
            src={"/beer.png"}
            width={600}
            height={600}
            alt="소주 맥주 무제한"
          />
          <Image
            className="m-1"
            src={"/beer.png"}
            width={600}
            height={600}
            alt="소주 맥주 무제한"
          />
        </div>
      </div>
    ),
  },
  {
    title: "B SET",
    id: "bset",
    content: (
      <div className="flex flex-col justify-center">
        <div className="w-full">
          <h2 className="w-96 text-center pt-2 font-semibold text-3xl mb-10 rounded-full bg-white text-slate-800">
            소주, 맥주 무제한 세트
          </h2>
          <h3 className="text-2xl font-semibold mb-3 text-pink">시간: 120분</h3>
          <h4 className="text-2xl font-semibold mb-3 text-white">
            가격: 전화문의
          </h4>
          <p className="text-xl text-white ">양주, 안주, 음료, 봉사료 포함</p>
        </div>
        <div className="flex flex-col md:flex-row mt-9">
          <Image
            className="m-1"
            src={"/beer.png"}
            width={600}
            height={600}
            alt="양주 무제한"
          />
          <Image
            className="m-1"
            src={"/beer.png"}
            width={600}
            height={600}
            alt="양주 무제한"
          />
          <Image
            className="m-1"
            src={"/beer.png"}
            width={600}
            height={600}
            alt="양주 무제한"
          />
        </div>
      </div>
    ),
  },
];

const Pricing = () => {
  const [tab, setTab] = useState("aset");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="w-full flex justify-center border-b-2 border-[#8B8B95]">
      <div className=" p-10">
        <h1
          className="w-40 p-2 mt-10 text-4xl text-white font-bold border-b-4 border-pink"
          id="price"
        >
          가격안내
        </h1>
        <div className="flex flex-row mt-8">
          <TabButton
            selectTab={() => handleTabChange("aset")}
            active={tab === "aset"}
          >
            A 세트
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("bset")}
            active={tab === "bset"}
          >
            B 세트
          </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        <div className="animate-bounce text-center mt-20">
          <h1 className="text-4xl font-bold mb-4 text-white">
            9시 이전 방문시 EVENT !
          </h1>
          <p className="text-3xl font-bold text-pink">A SET -1만</p>
          <p className="text-3xl font-bold text-pink">B SET -2만</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
