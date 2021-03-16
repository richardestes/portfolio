import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import uiuxdesign from "../img/uiuxdesign.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"Technical Skills"} span={"Technical Skills"} />
      <div className="skillContainer">
        <SkillsSection skill={"Javascript"} progress={"75%"} />
        <SkillsSection skill={"C"} progress={"30%"} />
        <SkillsSection skill={"Java"} progress={"40%"} />
        <SkillsSection skill={"C#"} progress={"50%"} />
        <SkillsSection skill={"React"} progress={"60%"} />
        <SkillsSection skill={"AWS"} progress={"50%"} />
        <SkillsSection skill={"Web Design"} progress={"30%"} />
        <SkillsSection skill={"UI/UX Design"} progress={"60%"} />
        <SkillsSection skill={"React Native"} progress={"75%"} />
      </div>
      <Title title={"Interests"} span={"Interests"} />
      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Web Design"}
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
        />
        <ServicesSection
          image={uiuxdesign}
          title={"UI/UX Design"}
          text={"Adobe XD, Illustrator, Photoshop, Figma"}
        />
        <ServicesSection image={gamedev} title={"Raspberry Pi Projects"} text={"How are you"} />
      </div>
    </div>
  );
}

export default AboutPage;
