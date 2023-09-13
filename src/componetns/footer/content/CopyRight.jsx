import Link from "next/link"

function CopyRight() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-1">
        <p className="text-sm">© تمام حقوق برای <Link href={"#"} className="font-bold hover:text-blue duration-200">CodePenta</Link> محفوظ است</p>
        <p className="text-xs">ساخته شده توسط تیم <Link href={"#"} className="text-blue">CodePenta</Link></p>
    </div>
  )
}

export default CopyRight