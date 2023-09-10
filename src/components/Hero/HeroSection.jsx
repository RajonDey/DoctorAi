import { Link } from "react-router-dom";
import { Button, Highlight } from "../features/Button";
import HeroBtn from "./HeroBtn/HeroBtn";
import { Hero, HeroSubtitle, HeroTitle } from "./hero";

const HeroSection = () => {
  return (
    <div style={{ paddingTop: "15rem" }}>
      <Hero>
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0"
          href="/"
          variant="secondary"
          size="small"
        >
          <Link to="/docs" className="pr-2 flex flex-row gap-1">
            {" "}
            <span>DoctorAi 2023 Release </span>{" "}
            <span className="hidden md:block">– Documentation</span>
          </Link>
          <Highlight>→</Highlight>
        </Button>
        <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          DoctorAi: the easy
          <br className="hidden md:block" /> way to get Informed
        </HeroTitle>
        <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Assistance for Your Questions
        </HeroSubtitle>
        <div className="flex justify-center w-full">
          <HeroBtn />
        </div>
      </Hero>
    </div>
  );
};

export default HeroSection;
