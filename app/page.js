import AboutUs from "@/src/componetns/home/AboutUs";
import Commetns from "@/src/componetns/home/Commetns";
import Fuatures from "@/src/componetns/home/Fuatures";
import HeroBanner from "@/src/componetns/home/HeroBanner";
import MoreServices from "@/src/componetns/home/MoreServices";
import Portfolio from "@/src/componetns/home/Portfolio";
import Rewards from "@/src/componetns/home/Rewards";
import Services from "@/src/componetns/home/Services";
import Team from "@/src/componetns/home/Team";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroBanner />
      <AboutUs />
      <Rewards />
      <Services />
      <MoreServices/>
      <Fuatures/>
      <Commetns/>
      <Portfolio/>
      <Team/>
    </div>
  );
}
