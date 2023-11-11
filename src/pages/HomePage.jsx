import Banner from "../components/homepage-component/Banner/Banner";
import Hero from "../components/homepage-component/Hero/Hero";
import OurService from "../components/homepage-component/OurService/OurService";
import Testimonial from "../components/homepage-component/Testimonial/Testimonial";
import WhyUs from "../components/homepage-component/WhyUs/WhyUs";
import Faq from "../components/homepage-component/Faq/Faq";

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
