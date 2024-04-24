import Image from "next/image";

// TO DO
// 사이즈 변경시 flex 및 레이아웃 사이즈 변경

const AboutSection = () => {
  return (
    <section className="relative text-white border-b-2 border-[#8B8B95] z-10 ">
      <div className="overlay z-10"></div>
      <div className="flex flex-col md:flex-row md:w-full justify-center items-center">
        <div className="flex flex-col mt-0 p-6 md:p-36 w-full z-20">
          <div className="w-[200px] md:w-[30rem] h-[2.5rem] mb-32 bg-slate-700">
            <h2 className="md:text-2xl pt-1.5 text-white font-bold">
              Ansan High Class Premium Karaoke
            </h2>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            안산 미르노래광장
          </h2>
          <div className="mb-5 text-pink">
            <h3 className="mb-1 text-lg font-bold md:text-2xl">
              안산 최고 모델급 도우미 다수
            </h3>
            <h3 className="mb-1 text-lg font-bold md:text-2xl">저렴한 주대</h3>
            <h3 className="mb-1 text-lg font-bold md:text-2xl">편안한 시설</h3>
          </div>
          <p className="w-full text-lg md:text-2xl">
            안산 고잔 신도시 프리미엄 노래광장
            <br />
            모델급 고정 도우미 다수 보유하여 최고의 <br /> 만족을 보장합니다.
            <br />
            고객님 취향에 맞춰 만족하실때까지 최선을 다해 <br /> 즐거운 시간을
            보내실 수 있도록 <br />
            노력하고 있습니다.
          </p>
        </div>
        <Image
          className="w-full p-2"
          src="/about.png"
          width={900}
          height={800}
          alt="미르노래광장 소개"
        />
      </div>
    </section>
  );
};

export default AboutSection;
