import React, { useState, useEffect } from "react";
import { WorkSection } from "../CustomComponents/Sections";
import styled from "styled-components";
import { workExperience } from "../helpers/messages";
import quantifulImage from "../images/work/quantiful.jfif";
import woorkImage from "../images/work/woork.jpg";
import fcl from "../images/work/fcl.jpeg";
import { useMediaQuery } from "react-responsive";
import working from "../images/illustrations/working.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledImage = styled.img`
  width: 70%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

const StyledHeading = styled.h1`
  color: #fff8f0;
`;

const WorkContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? "100%" : "30% 70%")};
  grid-template-rows: ${(props) => (props.isMobile ? "10% 90%" : "100%")};
  gap: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 85% 10%;
  grid-template-columns: ${(props) => (props.isMobile ? "100%" : "85% 10%")};
  grid-template-rows: ${(props) => (props.isMobile ? "80% 20%" : "100%")};
  grid-template-rows: 300px;
  gap: 5%;
`;

const InformationContainer = styled.div`
  background-color: #fff8f0;
  border-radius: 20px 0 0 20px;
  padding: 30px;
  overflow: hidden;
  overflow-y: scroll;
  text-overflow: ellipsis;
  box-shadow: 10px 10px #728b9a;
  min-width: 250px;

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ee7b30;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Icon = styled.div`
  background-image: url(${(props) => props.image});
  background-size: 80px 80px;
  height: 80px;
  width: 80px;
  min-height: 80px;
  min-width: 80px;
  margin: 10px;
  border-radius: 999px;
  background-color: white;
  opacity: ${(props) => (props.active ? 1 : 0.2)};
  transition: all 0.3s ease;
  box-shadow: ${(props) => props.active && "5px 5px #728B9A"};

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: ${(props) => !props.active && "5px 5px #728B9A"};
    opacity: ${(props) => !props.active && 0.8};
    transform: translateY(-5px);
  }
`;

const StyledWorkHeading = styled.h1`
  color: #ee7b30;
  font-size: 40px;
  margin: 0 0 10px 0;
`;

const StyledWorkSubHeading = styled.h2`
  color: #423e37;
  font-size: 20px;
`;

const StyledWorkText = styled.p`
  color: #423e37;
  font-size: 15px;
`;

function Work(props) {
  const [active, setActive] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <WorkSection>
      <WorkContainer isMobile={isTabletOrMobile}>
        <ImageContainer>
          {!isTabletOrMobile && <StyledImage data-aos="fade-right" src={working} alt="resume" />}
          <StyledHeading data-aos="slide-up">Work Experience</StyledHeading>
        </ImageContainer>

        <GridContainer isMobile={isTabletOrMobile}>
          <InformationContainer data-aos="flip-up">
            <StyledWorkHeading>
              {workExperience[active].title}
            </StyledWorkHeading>
            <StyledWorkSubHeading>
              {workExperience[active].subHeading}
            </StyledWorkSubHeading>

            <ul>
              {workExperience[active].description.map((desc) => (
                <StyledWorkText key={desc}>
                  <li>{desc}</li>
                </StyledWorkText>
              ))}
            </ul>
          </InformationContainer>
          <IconContainer>
            <Icon
              active={active === 0}
              onClick={() => setActive(0)}
              image={quantifulImage}
            />
            <Icon
              active={active === 1}
              onClick={() => setActive(1)}
              image={woorkImage}
            />
            <Icon
              active={active === 2}
              onClick={() => setActive(2)}
              image={fcl}
            />
          </IconContainer>
        </GridContainer>
      </WorkContainer>
    </WorkSection>
  );
}

export default Work;
