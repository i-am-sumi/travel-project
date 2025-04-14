import HeroSection from "./components/HeroSection";
import HotelsList from "./components/HotelsList";
import Destinations from "./components/search/Destinations";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Destinations />
      <HotelsList />
    </div>
  );
}
