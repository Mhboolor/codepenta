import Link from "next/link"

function Navbar() {
  return (
    <nav className="text-gray-5 text-base whitespace-nowrap">
      <ul className="flex items-center gap-2">
        <li><Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">خانه</Link></li>
        <li><Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">درباره ما</Link></li>
        <li><Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">خدمات ما</Link></li>
        <li><Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">پروژه ها</Link></li>
        <li><Link href={"#"} className="py-1 px-4 duration-200 hover:text-blue">ارتباط با ما</Link></li>
        <li><Link href={"#"} className="py-1 px-5 bg-blue rounded-full text-white">تماس با ما</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar