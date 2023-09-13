import Image from "next/image";
import Title from "../common/Title";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-9 container m-auto px-5 md:px-0">
      <Title
        text={"پورتفولیو"}
        caption={"نیازهای او ناشی از چیزی است که در واقع او را می راند"}
      />
      <div className="flex flex-col items-center justify-center gap-9">
        <div className="flex items-center justify-center gap-4">
          <button className="bg-blue text-white duration-200 rounded py-1.5 px-3">
            همه
          </button>
          <button className="hover:bg-blue hover:text-white duration-200 rounded py-1.5 px-3">
            برنامه
          </button>
          <button className="hover:bg-blue hover:text-white duration-200 rounded py-1.5 px-3">
            وبسایت
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-1.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-2.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-3.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-4.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-5.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-6.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-7.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-8.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative group">
            <Image
              src={"/image/portfolio-9.jpg"}
              width={500}
              height={500}
              alt="Project_Image"
              className="w-full h-full rounded-sm duration-300 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/50 flex items-end justify-end flex-col gap-2 p-5 text-white duration-300 scale-0 group-hover:scale-100">
              <p className="text-xl font-semibold">Web 3</p>
              <p className="text-sm text-[#ffffffb3]">TAG</p>
              <div className="flex items-center justify-end gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
