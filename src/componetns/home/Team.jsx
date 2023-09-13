import React from "react";
import Title from "../common/Title";
import Image from "next/image";

function Team() {
  return (
    <div className="bg-blue-light py-12">
      <div className="flex flex-col items-center justify-center gap-9 container m-auto px-5 md:px-0">
        <Title
          text={"تیم"}
          caption={"نیازهای او ناشی از چیزی است که در واقع او را می راند"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-lg shadow flex flex-col group">
            <div className="w-full h-full relative">
              <Image
                src={"/image/team-1.jpg"}
                width={500}
                height={500}
                alt="Team_Image"
                className="w-full h-full"
              />
              <div className="bg-white/80 text-black absolute -bottom-20 left-0 w-full flex items-center justify-center gap-1 duration-300 py-2 group-hover:bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-blue duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 bg-white py-6 px-4 z-10">
              <p className="text-gray-2 text-lg">Walter White</p>
              <p className="text-sm text-gray-10">Chief Executive Officer</p>
            </div>
          </div>
          <div className="rounded-lg shadow flex flex-col group">
            <div className="w-full h-full relative">
              <Image
                src={"/image/team-2.jpg"}
                width={500}
                height={500}
                alt="Team_Image"
                className="w-full h-full"
              />
              <div className="bg-white/80 text-black absolute -bottom-20 left-0 w-full flex items-center justify-center gap-1 duration-300 py-2 group-hover:bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-blue duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 bg-white py-6 px-4 z-10">
              <p className="text-gray-2 text-lg">Walter White</p>
              <p className="text-sm text-gray-10">Chief Executive Officer</p>
            </div>
          </div>
          <div className="rounded-lg shadow flex flex-col group">
            <div className="w-full h-full relative">
              <Image
                src={"/image/team-3.jpg"}
                width={500}
                height={500}
                alt="Team_Image"
                className="w-full h-full"
              />
              <div className="bg-white/80 text-black absolute -bottom-20 left-0 w-full flex items-center justify-center gap-1 duration-300 py-2 group-hover:bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-blue duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 bg-white py-6 px-4 z-10">
              <p className="text-gray-2 text-lg">Walter White</p>
              <p className="text-sm text-gray-10">Chief Executive Officer</p>
            </div>
          </div>
          <div className="rounded-lg shadow flex flex-col group">
            <div className="w-full h-full relative">
              <Image
                src={"/image/team-4.jpg"}
                width={500}
                height={500}
                alt="Team_Image"
                className="w-full h-full"
              />
              <div className="bg-white/80 text-black absolute -bottom-20 left-0 w-full flex items-center justify-center gap-1 duration-300 py-2 group-hover:bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-blue duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 bg-white py-6 px-4 z-10">
              <p className="text-gray-2 text-lg">Walter White</p>
              <p className="text-sm text-gray-10">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
