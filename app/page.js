import AboutUs from "@/src/componetns/home/AboutUs";
import HeroBanner from "@/src/componetns/home/HeroBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <HeroBanner/>
      <AboutUs/>
    </div>
  )
}
