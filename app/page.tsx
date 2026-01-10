import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen relative overflow-clip [--background-width:308.4%] lg:[--background-width:198.96%] [background:radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
    <Container >
       <Navbar />
      <Hero />
    </Container>
    </div>
  );
}
