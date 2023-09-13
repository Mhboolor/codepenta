import Image from "next/image";
import React from "react";

function Rewards() {
  return (
    <div className="container m-auto flex items-center justify-center flex-col px-5 gap-10 md:px-0 lg:flex-row-reverse">
      <div className="flex-1">
        <Image
          src="/image/reward.svg"
          width={526}
          height={300}
          alt="Reward_Image"
          className="m-auto"
        />
      </div>
      <div className="flex-1 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex items-start gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1 text-gray-7">
            <p className="text-gray-2 font-bold text-4xl">65</p>
            <p className="text-sm">
              <strong>جوایز</strong> نتیجه‌گیری می‌کنند.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1 text-gray-7">
            <p className="text-gray-2 font-bold text-4xl">18</p>
            <p className="text-sm">
              <strong>پروژه‌های</strong> آتی‌پیس‌چی‌هایی که به‌خوبی تمام می‌شوند
              و همه‌ی آن‌ها می‌آیند
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1 text-gray-7">
            <p className="text-gray-2 font-bold text-4xl">15</p>
            <p className="text-sm">
              <strong>سالها تجربه</strong>aut commodi quaerat modi aliquam nam
              ducimus aut voluptate non vel
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1 text-gray-7">
            <p className="text-gray-2 font-bold text-4xl">85</p>
            <p className="text-sm">
              <strong>مشتریان خوشحال</strong> نتیجه‌گیری می‌کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
