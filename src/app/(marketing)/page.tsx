import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import HowItWorks from "@/components/marketing/how-it-works";
import Stats from "@/components/marketing/stats";
import Testimonials from "@/components/marketing/testimonials";

const HomePage = () => {
  return (
    <div className="w-full relative flex flex-col pt-16">
      <Hero />
      <Companies />
      <HowItWorks />
      <Features />
      <Faq />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
