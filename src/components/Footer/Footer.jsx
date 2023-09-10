import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import MeetTeam from "../Team/Components/MeetTeam";
import { Container } from "../features/container";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },

      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer
    className="mt-12 border-t border-transparent-white py-[3rem] text-sm"
    style={{
      position: "fixed",
      bottom: "0",
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      left: '0'
    }}
  >
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex items-start w-full h-full flex-row justify-start lg:flex-col">
          <div className="flex items-center text-grey">
            &copy; 2023: DoctorAi - Assistance for Your Questions
          </div>
          <div className="flex space-x-4 py-[1.5rem] text-grey">
            <AiFillGithub className="w-6 h-6" />
            <AiFillLinkedin className="w-6 h-6" />
            <AiFillTwitterCircle className="w-6 h-6" />
          </div>
        </div>
        <div className="flex lg:hidden">
          <MeetTeam />
        </div>
      </div>
      <div>
        <MeetTeam />
      </div>
    </Container>
  </footer>
);
export default Footer;
