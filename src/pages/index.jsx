import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import FinancingInfo from '../components/sections/FinancingInfo';
import FeatureCards from '../components/sections/FeatureCards';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FinancingInfo />
      <FeatureCards />
    </div>
  );
}
