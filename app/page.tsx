import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
// import TaskProgress from "@/components/TaskProgress";
import TaxSeason from "@/components/TaxSeason";
import ConnectEverything from "@/components/ConnectEverthing";
import PricingSection from "@/components/PricingSection";
import CtaFooter from "@/components/CtaFooter";
export default function Home() {
  return (
    <div className="h-screen">
      <div className="[--background-width:308.4%] lg:[--background-width:198.96%] [background:radial-gradient(var(--background-width)_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
        <Container>
          <Navbar />
          <Hero />
            
        </Container>
      </div>
      <Testimonials />
      {/* <TaskProgress /> */}
     <TaxSeason />
     <ConnectEverything />
     <PricingSection />
     <CtaFooter />
    </div>
  );
}
