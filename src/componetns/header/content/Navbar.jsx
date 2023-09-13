import Link from "next/link";

function Navbar({ showMenuHandler, showMenu }) {
  return (
    <nav className={`text-gray-5 text-base whitespace-nowrap fixed right-0 top-0 w-full max-w-[280px] bg-white h-screen p-5 flex flex-col gap-5 shadow-xl z-50 duration-200 ${showMenu ? "translate-x-0" : "translate-x-96"} 
    lg:static lg:translate-x-0 lg:shadow-none lg:gap-0 lg:w-auto lg:max-w-none lg:h-auto`}>
      <div className="flex items-center justify-between text-gray-1 font-semibold lg:hidden">
        <p>CodePenta</p>
        <button onClick={showMenuHandler}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col divide-y lg:items-center lg:divide-none lg:flex-row lg:gap-5">
        <li>
          <Link href={"#"} className="py-2 flex items-center px-4 duration-200 hover:text-blue">
            خانه
          </Link>
        </li>
        <li>
          <Link href={"#"} className="py-2 flex items-center px-4 duration-200 hover:text-blue">
            درباره ما
          </Link>
        </li>
        <li>
          <Link href={"#"} className="py-2 flex items-center px-4 duration-200 hover:text-blue">
            خدمات ما
          </Link>
        </li>
        <li>
          <Link href={"#"} className="py-2 flex items-center px-4 duration-200 hover:text-blue">
            پروژه ها
          </Link>
        </li>
        <li>
          <Link href={"#"} className="py-2 flex items-center px-4 duration-200 hover:text-blue">
            ارتباط با ما
          </Link>
        </li>
        <li className="py-4 flex lg:inline-block">
          <Link
            href={"#"}
            className="py-1 px-5 bg-blue rounded-full text-white w-full text-center lg:w-auto"
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
