import "./Home.css";
import Hero from "../../components/public/Hero/Hero";
import Features from "../../components/public/Features/Features";
import Compare from "../../components/public/Compare/Compare";
import Plans from "../../components/public/Plans/Plans";
import CTA from "../../components/public/CTA/CTA";
import Footer from "../../components/public/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-48">
        <Hero />
        <Features />
        <Compare />
        <Plans />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
