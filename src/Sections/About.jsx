import React, { useState } from "react";
import { AboutSection } from "../CustomComponents/Sections";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { aboutMe } from "../helpers/messages";
import education from "../images/illustrations/education.svg";
import { useMediaQuery } from "react-responsive";
import "aos/dist/aos.css";

const StyledHeading = styled.h1`
  margin: 10px 10px 10px 0;
`;

const StyledSubHeading = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const ParagraphContainer = styled.p`
  margin-bottom: 5px;
  white-space: pre-wrap;
`;

const fadeIn = keyframes`
  0% {
    transform: 0;
  }
  100% {
    opacity: 1;
  }
`;

const alternate = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const AboutContainer = styled.div`
  width: ${(props) => (props.isMobile ? "90%" : "65%")};
  min-width: 300px;
  border-left: ${(props) => !props.isMobile && "0.3rem solid #423e37"};
  padding: ${(props) => !props.isMobile && "0 30px 0 30px"};
  margin: ${(props) => !props.isMobile && "0 50px 0 350px"};
  transition: all 1s ease;
  animation: 1s ${fadeIn} ease-out;
  color: ${props => props.theme.white};
  z-index: 2;

  &:hover {
    background-position: left;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  left: 100px;
  top: calc(50% - 120px);
  width: 350px;
  z-index: 1;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.isMobile ? "flex-start" : "space-between"};
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 8px;
  height: 40px;
  width: auto;
  background: transparent;
  border: 2px solid ${props => props.theme.white};
  border-radius: 5px;
  color: ${props => props.theme.white};
  font-size: 20px;
  outline: none;
  opacity: 0.6;
  transition: 0.3s;
  z-index: 5;

  #icon {
    animation: ${alternate} 1s infinite alternate;
    margin-right: 20px;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function About(props) {
  const [counter, setCounter] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });



  return (
    <AboutSection>
      {!isTabletOrMobile && (
        <StyledImage data-aos="fade-right" src={education} alt="education" />
      )}

      <AboutContainer isMobile={isTabletOrMobile} data-aos="fade-up">
        <HeadingContainer>
          <StyledHeading>{aboutMe[counter].title}</StyledHeading>
          <NextButton
            onClick={() => {
              setCounter((prevState) => (prevState + 1) % aboutMe.length);
            }}
          >
            <p style={{ margin: "0 12px" }}>
              {aboutMe[(counter + 1) % aboutMe.length].title}
            </p>
            <FontAwesomeIcon id="icon" icon={faArrowRight} />
          </NextButton>
        </HeadingContainer>

        <StyledSubHeading>{aboutMe[counter].subTitle}</StyledSubHeading>

        <ParagraphContainer>{aboutMe[counter].description}</ParagraphContainer>
        <ListContainer isMobile={isTabletOrMobile}>
          {aboutMe[counter].list &&
            aboutMe[counter].list.map((course) => (
              <li style={{ minWidth: "calc(50% - 20px)", marginRight: "20px" }}>
                <ParagraphContainer>{course}</ParagraphContainer>
              </li>
            ))}
        </ListContainer>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
