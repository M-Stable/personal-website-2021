import React, { useState } from "react";
import { SkillsSection } from "../CustomComponents/Sections";
import SkillBar from "../CustomComponents/SkillsComponents/SkillBar";
import styled from "styled-components";
import { frontEnd, backEnd, tools } from "../helpers/skillsData";
import { useMediaQuery } from "react-responsive";
import resume from "../images/illustrations/resume.svg";
import BackgroundBlue from "../CustomComponents/BackgroundBlue";
import "aos/dist/aos.css";

const ResumeImage = styled.img`
  position: absolute;
  right: 100px;
  bottom: 30px;
  width: 300px;
  transform: rotate(-15deg);
`;

const SkillsContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 15px;
  padding: 10px;
  z-index: 2;
  margin-right: ${(props) => !props.isMobile && "400px"};
`;

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 19px;
`;

const HeadingContainer = styled.h1`
  text-align: center;
  text-shadow: 3px 3px #ebe4d7;

  ::before,
  ::after {
    background-color: ${props => props.theme.black};
    box-shadow: 3px 3px #ebe4d7;
    content: "";
    display: inline-block;
    height: 0.3rem;
    position: relative;
    vertical-align: middle;
    width: 35%;
  }

  ::before {
    right: 0.5em;
    margin-left: -50%;
  }

  ::after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

const Tabs = styled.div`
  height: 100px;
  display: flex;
  margin-bottom: 40px;
`;

const Tab = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  transition: opacity 0.5s;
  -webkit-transition: opacity 0.5s;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  font-size: 28px;
  overflow: hidden;
  white-space: nowrap;
  color: ${props => props.theme.black};

  ::after {
    transition: border-bottom 0.3s;
    -webkit-transition: border-bottom 0.3s;
    content: "";
    display: block;
    margin: 0 auto;
    width: 70%;
    border-bottom: ${(props) => (props.isActive ? "1px solid black" : "")};
  }

  &:hover {
    cursor: pointer;
  }
`;

const TabText = styled.h2`
  margin-bottom: 10px;
`;

const SkillBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Skills() {
  const [activeTab, setActiveTab] = useState(2);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <SkillsSection>
      <SkillsContainer isMobile={isTabletOrMobile}>
        <HeadingContainer data-aos="fade-right" data-aos-duration="1000">Skills</HeadingContainer>
        <TableContainer data-aos="fade-right" data-aos-duration="1500">
          <Tabs>
            <Tab onClick={() => setActiveTab(1)} isActive={activeTab === 1}>
              {isTabletOrMobile ? (
                <TabText>Tool</TabText>
              ) : (
                <TabText>Tools</TabText>
              )}
            </Tab>
            <Tab onClick={() => setActiveTab(2)} isActive={activeTab === 2}>
              {isTabletOrMobile ? (
                <TabText>FE</TabText>
              ) : (
                <TabText>Front End</TabText>
              )}
            </Tab>
            <Tab onClick={() => setActiveTab(3)} isActive={activeTab === 3}>
              {isTabletOrMobile ? (
                <TabText>BE</TabText>
              ) : (
                <TabText>Back End</TabText>
              )}
            </Tab>
          </Tabs>
          <SkillBarContainer isMobile={isTabletOrMobile}>
            {activeTab === 1 &&
              tools.map((item) => <SkillBar key={item.title} item={item} />)}
            {activeTab === 2 &&
              frontEnd.map((item) => <SkillBar key={item.title} item={item} />)}
            {activeTab === 3 &&
              backEnd.map((item) => <SkillBar key={item.title} item={item} />)}
          </SkillBarContainer>
        </TableContainer>
      </SkillsContainer>
      {!isTabletOrMobile && <ResumeImage src={resume} alt="resume" />}
      <BackgroundBlue />
    </SkillsSection>
  );
}

export default Skills;
