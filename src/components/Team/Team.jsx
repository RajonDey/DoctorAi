import { useState } from "react";

const Team = () => {
  const people = [
    {
      firstname: "Shahriar",
      lastname: "Hasan",
      role: "Project Lead, Developer",
      picture:
        "https://media.licdn.com/dms/image/C4D03AQGQ5Ea1MQ1XHw/profile-displayphoto-shrink_800_800/0/1630823098356?e=2147483647&v=beta&t=wSIG5g0V1ddOzDRArQEEuJg2T5clxXXbMbqnHlivGJs",
      description:
        "A full-stack developer who focuses on writing clean, standard code that adheres to best practices, and who is also a lifelong learner who is continually investigating new technologies and solutions to different programming challenges in order to advance.",
      facebookURL: "https://facebook.com/H4549",
      githubURL: "https://github.com/hasanshahriar32",
      linkedinURL: "https://www.linkedin.com/in/hasanshahriar32",
      youtubeURL: "https://www.youtube.com/channel/UCHehUx9eSXXKl3xAMXm0mbQ",
    },
    {
      firstname: "Md",
      lastname: "Shakeeb",
      role: "Web Developer",
      picture: "https://i.ibb.co/NyN02PD/20220525121312-IMG-1526.jpg",
      description:
        "As a highly skilled and experienced front-end developer with over a year of professional expertise, my passion lies in coding, programming, continuous learning, and troubleshooting complex coding problems. I have a proven track record of successfully utilizing cutting-edge technologies",
      facebookURL: "https://www.facebook.com/info.mdshakeeb/",
      githubURL: "https://github.com/info-mdshakeeb",
      linkedinURL: "https://www.linkedin.com/in/mdshakeeb/",
      youtubeURL: "",
    },
    {
      firstname: "Md",
      lastname: "Musabbir ",
      role: "Web Developer",
      picture: "https://i.ibb.co/bJ5pLqK/20230613-191326.jpg",
      description:
        "A skilled front-end developer who loves to build feature-rich and user-friendly web apps. I'm passionate about learning new programming tools and techniques, and solve complex problems. My core skills are JavaScript, React, Node, Express, and MongoDB. While not coding, I play chess, guitar, read a book, and often take a walk",
      facebookURL: "https://m.facebook.com/musabbir.me",
      githubURL: "https://github.com/musabbir-m",
      linkedinURL: "https://www.linkedin.com/in/mdmusabbir/",
      youtubeURL: "",
    },
    {
      firstname: "MD",
      lastname: "Hasan ",
      role: "Web Developer",
      picture:
        "https://i.ibb.co/hCnL0Q0/341741865-179599705014866-6842605451422987767-n.jpg",
      description:
        "A skilled front-end developer who loves to build feature-rich and user-friendly web apps. I'm passionate about learning new programming tools and techniques, and solve complex problems. My core skills are JavaScript, React, Node, Express, and MongoDB. While not coding, I play chess, guitar, read a book, and often take a walk",
      facebookURL: "https://www.facebook.com/ornilhasan0467/",
      githubURL: "https://github.com/MdHasan0467",
      linkedinURL: "https://www.linkedin.com/in/md-hasan149357/",
      youtubeURL: "",
    },
  ];

  const [member, setMember] = useState(0);

  return (
    <div className="relative mx-auto py-[15rem] w-full max-w-7xl bg-gray-50 text-gray-700">
      {/* :TITLE CONTAINER */}
      <div className="mb-8 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-xl lg:text-3xl font-semibold uppercase">
          Our passionate team
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>

      <div className="flex flex-col items-center justify-center px-4 w-full max-w-5xl sm:grid grid-cols-1 lg:grid-cols-2 gap-y-4 sm:gap-y-10">
        <img
          src="https://i.ibb.co/7Q181N7/SJ-Innovation-AI-Hack-Fest-2023-Internal-Team-Announcement-Code-Brewers.png"
          alt="Team"
          className="object-cover"
          style={{ minWidth: "800px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Team;
