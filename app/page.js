import AboutUs from "@/src/componetns/home/AboutUs";
import HeroBanner from "@/src/componetns/home/HeroBanner";
import Rewards from "@/src/componetns/home/Rewards";
import Services from "@/src/componetns/home/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroBanner />
      <AboutUs />
      <Rewards />
      <Services />
    </div>
  );
}
