import classNames from "classnames";
// import OneTap from "../../components/Authentication/OneTap (Test)/OneTap";
import Contact from "../../components/Contact/Contact";
import { default as Faq } from "../../components/Faq/Faq";
import HeroSection from "../../components/Hero/HeroSection";
import Price from "../../components/Price/Price";
import Showcase from "../../components/Showcase/Showcase";
import { Container } from "../../components/features/container";
import { StarsIllustration } from "../../components/features/stars";

const Home = () => {
  return (
    <div style={{ height: "calc(100vh - 50px)" }}>
      {/* <OneTap /> */}
      <div className="">
        <Container className="pt-[6.4rem]">
          <HeroSection />
        </Container>
      </div>
    </div>
  );
};

export default Home;
