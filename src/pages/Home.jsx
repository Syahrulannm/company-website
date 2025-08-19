import Hero from "../components/hero/Hero";
import Services from "../components/Services";
import Cta from "../components/Cta";
import Testimonials from "../components/Testimonials";
import ShowCase from "../components/ShowCase";
import WhyChoiceMe from "../components/WhyChoiseMe";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Services />
      <ShowCase />
      <WhyChoiceMe />
      <ScrollToTop />
      <Testimonials />
      <Contact />
      <Cta />
    </div>
  );
}
