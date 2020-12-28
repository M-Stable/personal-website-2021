import React from "react";
import { ProjectSection } from "../CustomComponents/Sections";
import styled from "styled-components";
import Card from "../CustomComponents/Card";
import { project1, project2, project3 } from "../helpers/messages";
import chancery from "../images/projects/chancery.png";
import websiteImage from "../images/projects/websiteImage.PNG";
import varpedia from "../images/projects/varpedia.PNG";
import { useMediaQuery } from "react-responsive";
import wireframe from "../images/illustrations/wireframe.svg";
import "aos/dist/aos.css";

const StyledImage = styled.img`
  margin-top: 20px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  height: 100%;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? "100%" : "65% 30%")};
  grid-template-rows: ${(props) => (props.isMobile ? "10% 88%" : "100%")};
  gap: ${(props) => (props.isMobile ? "2%" : "5%")};
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  order: ${(props) => props.isMobile && "2"};
`;

const StyledHeading = styled.h1`
  color: ${props => props.theme.blue};
  order: ${(props) => props.isMobile && "1"};
`;

function Projects(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <ProjectSection>
      <ProjectContainer isMobile={isTabletOrMobile}>
        <CardsContainer isMobile={isTabletOrMobile}>
          <Card
            text={project1}
            image={chancery}
            altText={"Chancery"}
            rotation={2}
            link={"https://chancery.wdcc.co.nz/"}
          />
          <Card
            text={project2}
            image={websiteImage}
            altText={"Website"}
            rotation={-5}
            link={"https://github.com/M-Stable/personal-website-2021"}
          />
          <Card
            text={project3}
            image={varpedia}
            altText={"Varpedia"}
            rotation={3}
            link={"https://github.com/M-Stable/VARpedia"}
          />
        </CardsContainer>
        <ImageContainer>
          <StyledHeading data-aos="fade-down" isMobile={isTabletOrMobile}>Projects</StyledHeading>
          {!isTabletOrMobile && <StyledImage data-aos="fade-left" src={wireframe} alt="resume" />}
        </ImageContainer>
      </ProjectContainer>
    </ProjectSection>
  );
}

export default Projects;
