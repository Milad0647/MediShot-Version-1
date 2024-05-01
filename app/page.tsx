import Features from "@/components/Layout/Pages/Features";
import GettingStarted from "@/components/Layout/Pages/GettingStarted";
import Hero from "@/components/Layout/Pages/Hero";
import Pricing from "@/components/Layout/Pages/Pricing";
import Testimonials from "@/components/Layout/Pages/Testimonials";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <GettingStarted />
      <Pricing />
      <Testimonials />
    </div>
  );
}
