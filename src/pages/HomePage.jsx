import Banner from "../components/homepage-component/Banner";
import Hero from "../components/homepage-component/Hero";
import OurService from "../components/homepage-component/OurService";
import Testimonial from "../components/homepage-component/Testimonial";
import WhyUs from "../components/homepage-component/WhyUs";
import Faq from "../components/homepage-component/Faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </>
  );
}
