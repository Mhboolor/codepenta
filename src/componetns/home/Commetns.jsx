"use client";
import Title from "../common/Title";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

function Commetns() {
  return (
    <div className="bg-blue-light py-12">
      <div className="flex flex-col items-center justify-center gap-9 container m-auto px-5 md:px-0">
        <Title
          text={"نظرات"}
          caption={
            "او برای به دست آوردن منافعی که می خواهد دنبال کند، زحمات زیادی می کشد"
          }
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full h-full comments-slider"
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-[#fff] shadow-lg drop-shadow-md rounded-sm p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="">
                  <Image
                    src="/image/testimonials-1.jpg"
                    width={90}
                    height={90}
                    alt="User_Image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-1 text-lg font-semibold">
                    محمدحسین بولوری
                  </p>
                  <p className="text-gray-8 text-sm">برنامه نویس</p>
                </div>
              </div>
              <div className="text-gray-4 text-base italic">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fff] shadow-lg drop-shadow-md rounded-sm p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="">
                  <Image
                    src="/image/testimonials-1.jpg"
                    width={90}
                    height={90}
                    alt="User_Image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-1 text-lg font-semibold">
                    محمدحسین بولوری
                  </p>
                  <p className="text-gray-8 text-sm">برنامه نویس</p>
                </div>
              </div>
              <div className="text-gray-4 text-base italic">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fff] shadow-lg drop-shadow-md rounded-sm p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="">
                  <Image
                    src="/image/testimonials-1.jpg"
                    width={90}
                    height={90}
                    alt="User_Image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-1 text-lg font-semibold">
                    محمدحسین بولوری
                  </p>
                  <p className="text-gray-8 text-sm">برنامه نویس</p>
                </div>
              </div>
              <div className="text-gray-4 text-base italic">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fff] shadow-lg drop-shadow-md rounded-sm p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="">
                  <Image
                    src="/image/testimonials-1.jpg"
                    width={90}
                    height={90}
                    alt="User_Image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-1 text-lg font-semibold">
                    محمدحسین بولوری
                  </p>
                  <p className="text-gray-8 text-sm">برنامه نویس</p>
                </div>
              </div>
              <div className="text-gray-4 text-base italic">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Commetns;
