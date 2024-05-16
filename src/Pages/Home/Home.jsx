import React from "react";
import Hero from "./Layouts/Hero/hero";
import Collaborations from "./Layouts/Collaborations/Collaborations";
import AboutPage from "./Layouts/AboutPage/AboutPage";
import Difference from "./Layouts/Difference/Difference";
import Portfolio from "./Layouts/Portfolio/Portfolio";
import Testimonials from "./Layouts/Testimonials/Testimonials";
import ContactPage from "./Layouts/ContactPage/ContactPage";
import CustomCarousel from "./Layouts/CustomCarousel/CustomCarousel";
import FAQs from "./Layouts/FAQ/Faq";
import Process from "./Layouts/Process/Process";
import Counter from "./Layouts/Counter/Counter";
const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Collaborations />
      <AboutPage />
      <Difference />
      <Process />
      <CustomCarousel />
      <Portfolio />
      <FAQs />
      <Testimonials />
      <ContactPage />
    </div>
  );
};

export default Home;
