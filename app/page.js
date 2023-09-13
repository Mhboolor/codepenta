import AboutUs from "@/src/componetns/home/AboutUs";
import Fuatures from "@/src/componetns/home/Fuatures";
import HeroBanner from "@/src/componetns/home/HeroBanner";
import MoreServices from "@/src/componetns/home/MoreServices";
import Rewards from "@/src/componetns/home/Rewards";
import Services from "@/src/componetns/home/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroBanner />
      <AboutUs />
      <Rewards />
      <Services />
      <MoreServices/>
      <Fuatures/>
    </div>
  );
}
