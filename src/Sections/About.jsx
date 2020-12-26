import React, { useState } from "react";
import { AboutSection } from "../CustomComponents/Sections";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { aboutMe } from "../helpers/messages";
import education from "../images/illustrations/education.svg";
import { useMediaQuery } from "react-responsive";

const StyledHeading = styled.h1`
  margin: 10px 10px 10px 0;
`;

const StyledSubHeading = styled.h2`
  margin: 10px 10px 10px 0;
  font-size: 25px;
`;

const HeadingContainer = styled.div`
  margin-bottom: 10px;
`;

const ParagraphContainer = styled.div`
  margin-bottom: 5px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const AboutContainer = styled.div`
  width: 100%;
  min-width: 300px;
  border-radius: 20px 0 0 20px;
  border-left: 0.3rem solid #423e37;
  background: linear-gradient(to left, transparent 50%, #423e37 50%) right;
  background-size: 200%;
  padding: 0 10px 5px 30px;
  margin-bottom: 10px;
  margin-right: 20px;
  transition: all 1s ease;
  animation: 1s ${fadeIn} ease-out;
  color: #fff8f0;
  flex: 5;

  &:hover {
    background-position: left;
  }
`;

const StyledImage = styled.img`
  flex: 1;
  height: 100%;
  width: 240px;
  flex-wrap: wrap;
`;

const ExpandButton = styled.button`
  padding: 0;
  height: 40px;
  width: 40px;
  background: transparent;
  border: 2px solid #fff8f0;
  color: #fff8f0;
  font-size: 20px;
  position: absolute;
  bottom: 20px;
  outline: none;
  opacity: 0.6;
  transition: 0.3s;
  transform: rotate(-45deg);

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function About(props) {
  const { executeScroll } = props;
  const [expanded, setExpanded] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <AboutSection expand={expanded}>
      <ConditionalWrapper
        condition={!isTabletOrMobile && !expanded}
        wrapper={(children) => <Container>{children}</Container>}
      >
        <AboutContainer>
          <HeadingContainer>
            <StyledHeading>{aboutMe[0].title}</StyledHeading>
          </HeadingContainer>
          <ParagraphContainer>
            <p>{aboutMe[0].description}</p>
          </ParagraphContainer>
        </AboutContainer>

        {!isTabletOrMobile && !expanded && (
          <StyledImage src={education} alt="education" />
        )}

        {expanded && (
          <AboutContainer>
            <HeadingContainer>
              <StyledHeading>{aboutMe[1].title}</StyledHeading>
              <StyledSubHeading>{aboutMe[1].place}</StyledSubHeading>
            </HeadingContainer>
            <ParagraphContainer>
              <p>
                <ul>
                  {aboutMe[1].notable.map((course) => (
                    <li>{course}</li>
                  ))}
                </ul>
              </p>
            </ParagraphContainer>
          </AboutContainer>
        )}

        {expanded && (
          <AboutContainer>
            <HeadingContainer>
              <StyledHeading>{aboutMe[2].title}</StyledHeading>
            </HeadingContainer>
            <ParagraphContainer>
              <p>
                <ul>
                  {aboutMe[2].achievements.map((achievement) => (
                    <li>{achievement}</li>
                  ))}
                </ul>
              </p>
            </ParagraphContainer>
          </AboutContainer>
        )}
      </ConditionalWrapper>

      <ExpandButton
        onClick={() => {
          setExpanded(!expanded);
          executeScroll();
        }}
      >
        <FontAwesomeIcon icon={faExpandAlt} />
      </ExpandButton>
    </AboutSection>
  );
}

export default About;
