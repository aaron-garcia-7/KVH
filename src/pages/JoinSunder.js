import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import ScrollToTop from "../router/ScrollToTop";
import styled from "styled-components";

// Sections
import CaseHero from "./sections/CaseHero";
import Goal from "./sections/Goal";
import Design from "./sections/Design";
import Development from "./sections/Development";
import Contact from "./sections/Contact";

// Components
import ComingSoon from "../components/ComingSoon";
import PageSwiper from "../components/PageSwiper";
import ImageModule from "../components/ImageModule";

// Media
import mobile from "../images/photos/mobile3.webp";
import desktop from "../images/photos/desktop3.webp";
import video from "../videos/video1.mov";
import wireframe from "../images/photos/wireframe1.png";
import mockup from "../images/photos/mockup1.png";

function JoinSunder({ darkTheme, pageWidth }) {
  const [showModule, setShowModule] = useState(false);
  const [moduleImg, setModuleImg] = useState("");
  const [moduleName, setModuleName] = useState("");
  return (
    <div>
      <ScJoinSunder
        variants={pageAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ScrollToTop />
        <CaseHero
          id={2}
          title={"Join Sunder Energy"}
          title1={"Join"}
          title2={"Sunder Energy"}
          title3={""}
          role1={"Design + Development"}
          role2={""}
          date={"Feb. 2023"}
          url={"https://joinsunder.com/"}
          img1={mobile}
          img2={desktop}
          darkTheme={darkTheme}
          pageWidth={pageWidth}
        />
        <Goal
          id={2}
          video={video}
          subText={
            "The text that pans across the screen responds to the user scroll"
          }
          emoji={" 🫠"}
          // emoji={" 😮"}
          text1={
            "Honeysuckle Studios is a private/home eyelash studio located in West Jordan, UT. Bailey, the owner, offers a wide range of professional grade lash styles including classic, hybrid, and volume, at a competitive price."
          }
          text2={
            "Established in 2021, Bailey has grown her clientele and business to allow her to pursue the art of eyelash extensions full-time."
          }
          text3={
            "with this project was to update the original design, which I had previously made. Main pain points from the original site were: lack of call to action, dated look, and not the best color usage. There was also a lack of visual hierarchy with the navigation links."
          }
        />
        <Design
          id={2}
          title={"Honeysuckle Studios"}
          text1={
            "The design procress was motivating and encouraging. I would say that after many prior projects, this was the first website where I discovered my “style”, a more minimalistic look with a blend of modern and classic. This was where I began to feel confident in my work and proud to show it to the world."
          }
          text2={
            "The prior concept was definitely unique, however I wanted to provide a more natural user experience and reduce the amount of user clicks needed to navigate the page, which the previous site relied heavily on."
          }
          wireframe={wireframe}
          setShowModule={setShowModule}
          setModuleImg={setModuleImg}
          setModuleName={setModuleName}
          darkTheme={darkTheme}
        />
        <Development
          title={"Honeysuckle Studios"}
          mockup={mockup}
          text1={
            "The development process was a great learning experience. I have worked with honeysuckle studios since my earliest days of learning web development. I’ve built the site with vanilla html, css, and js and have rebuilt it with react and animation libraries such as framer motion."
          }
          text2={
            "Dependencies for this project include: framer motion, react-intersection-observer, react-scroll, and styled components. To view the source code, visit my "
          }
          setShowModule={setShowModule}
          setModuleImg={setModuleImg}
          setModuleName={setModuleName}
          darkTheme={darkTheme}
        />
        <Contact darkTheme={darkTheme} />
        <ImageModule
          showModule={showModule}
          setShowModule={setShowModule}
          moduleImg={moduleImg}
          setModuleImg={setModuleImg}
          moduleName={moduleName}
          title={"Honeysuckle Studios"}
        />
      </ScJoinSunder>
      <PageSwiper />
    </div>
  );
}

const ScJoinSunder = styled(motion.div)`
  #caseHeroText1 {
    top: 30%;
  }

  @media (max-width: 1024px) {
    #caseHeroText1 {
      top: 28%;
    }
  }

  @media (max-width: 768px) {
    #caseHeroText1 {
      top: 22%;
    }
    #imgContainer1 {
      top: 62%;
    }
  }

  @media (max-height: 640px) {
    #caseHeroText1 {
      top: 24%;
    }
  }
`;

export default JoinSunder;
