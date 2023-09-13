import Link from "next/link";

function Navbar() {
  return (
    <nav className="text-gray-5 text-sm whitespace-nowrap">
      <ul className="flex items-center gap-2">
        <li>
          <Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">
            خانه
          </Link>
        </li>
        <li>
          <Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">
            درباره ما
          </Link>
        </li>
        <li>
          <Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">
            حریم خصوصی
          </Link>
        </li>
        <li>
          <Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">
            شرایط استفاده
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
