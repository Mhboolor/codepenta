import Image from "next/image";

function HeroBanner() {
  return (
    <div className="flex flex-col-reverse items-center justify-center container m-auto overflow-y-hidden lg:flex-row gap-10 my-10">
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="font-bold text-3xl lg:text-5xl">
          کسب و کار خود را با ما رشد دهید
        </h2>
        <h3 className="text-lg lg:text-2xl">
          ما یه تیم با استعدادیم تو طراحی وبسایت برای شما
        </h3>
        <div className="flex items-center justify-center lg:justify-normal">
          <button className="bg-transparent rounded-full text-blue border-2 text-base py-2 px-8 border-blue duration-200 hover:text-white hover:bg-blue">
            شروع کنید
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/image/hero-banner.png"
          width={570}
          height={430}
          alt="HeroBanner_Image"
          className="animate-up-down m-auto w-96 h-72 lg:h-[430px] lg:w-[570px]"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
