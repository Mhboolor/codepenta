import AboutUs from "@/src/componetns/home/AboutUs";
import HeroBanner from "@/src/componetns/home/HeroBanner";
import Rewards from "@/src/componetns/home/Rewards";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroBanner/>
      <AboutUs/>
      <Rewards/>
    </div>
  )
}
