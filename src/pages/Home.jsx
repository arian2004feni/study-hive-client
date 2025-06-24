import AboutUs from "../component/Home/AboutUs";
import Faq from "../component/Home/Faq";
import Features from "../component/Home/Features";
import Hero from "../component/Home/Hero";
import NewsLetter from "../component/Home/NewsLetter";
import Testimonials from "../component/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <NewsLetter />
      <Faq />
      <Testimonials />
    </div>
  );
};

export default Home;
