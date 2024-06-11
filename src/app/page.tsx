import HeroSection from "@/components/Home/HeroSection";
import FeaturedSection from "@/components/Home/FeaturedSection";
// import WhyChooseUs from "@/components/Home/WhyChooseUs";
import StickyScrollRevealDemo from "@/components/Home/WhyChooseUs";
import Testimonial from "@/components/Home/Testimonial";
import Webinar from "@/components/Home/Webinar";
import Instructor from "@/components/Home/Instructor";
import Footer from "@/components/Home/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/10 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <StickyScrollRevealDemo />
      <Testimonial />
      <Webinar />
      <Instructor />
      <Footer />
    </main>
  );
}
