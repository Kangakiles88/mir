import Image from "next/image";

// TO DO
// 사이즈 변경시 flex 및 레이아웃 사이즈 변경

const Feature = () => {
  return (
    <section
      className="relative text-white border-b-2 border-[#8B8B95] z-10"
      id="feature"
    >
      <div className="flex flex-col items-center mt-7">
        <h1 className="text-4xl font-bold mb-5">FEATURE</h1>
        <h2 className="text-3xl">안산 미르노래광장</h2>
        <h3 className="text-2xl">서비스 안내</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-3/4 mx-auto p-5">
        <div className="flex flex-col items-center text-center m-4">
          <Image
            src="/images/feature/feature1.jpg"
            width={300}
            height={300}
            alt="안산노래광장"
            className="mb-5 rounded-full"
          />

          <h2 className="text-pink text-3xl font-bold mb-3">맞춤형 초이스</h2>
          <h3 className="mb-3 text-xl md:text-2xl">
            고객님의 스타일에 맞는 <br /> 파트너 매칭
          </h3>
          <ul className="text-[0.9rem] md:text-xl text-slate-400">
            <li className="mb-2">내성적이신 분 - 리더쉽있는 파트너</li>
            <li className="mb-2">놀아보자 - 아이돌급 끼있는 파트너</li>
            <li className="mb-2">오붓한 대화 - 대화를 즐기는 파트너</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center m-4">
          <Image
            src="/images/feature/feature2.png"
            width={300}
            height={300}
            alt="안산노래광장 생일"
            className="mb-5 rounded-full"
          />

          <h2 className="text-pink text-3xl font-bold mb-3">기념일 축하</h2>
          <h3 className="mb-3 text-xl md:text-2xl">
            각종 기념일, 축하 행사 <br /> 케잌 제공
          </h3>
          <ul className="text-[0.9rem] md:text-xl text-slate-400">
            <li className="mb-2">생일, 승진, 망년회, 송년회 등</li>
            <li className="mb-2">각종 행사일에 말씀해주시면</li>
            <li className="mb-2">축하하실 수 있도록 케잌 제공</li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center m-4">
          <Image
            src="/images/feature/feature3.png"
            width={300}
            height={300}
            alt="안산노래광장"
            className="mb-5 rounded-full"
          />

          <h2 className="text-pink text-3xl font-bold mb-3">차량 픽업</h2>
          <h3 className="mb-3 text-xl md:text-2xl">
            안산 전지역 <br /> 무료 픽업 서비스
          </h3>
          <ul className="text-[0.9rem] md:text-xl text-slate-400">
            <li className="mb-2">안산 전지역 어디에 계시든</li>
            <li className="mb-2">고급 세단으로 편안하게</li>
            <li className="mb-2">모시겠습니다</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
