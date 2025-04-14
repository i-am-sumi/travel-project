import Destinations from "./components/Destinations";
import HeroSection from "./components/HeroSection";
import HotelsList from "./components/HotelsList";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Destinations />
      <HotelsList />
    </div>
  );
}
