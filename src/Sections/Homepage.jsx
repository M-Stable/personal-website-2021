import React, { useState, useEffect } from "react";
import { IntroSection } from "../CustomComponents/Sections";
import Francis from "../CustomComponents/Francis";
import styled from "styled-components";
import backgroundImage from "../images/background-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import sky from "../images/landing-page/sky.png";
import mountain from "../images/landing-page/mountain.png";
import hill1 from "../images/landing-page/hill1.png";
import hill2 from "../images/landing-page/hill2.png";
import rocks from "../images/landing-page/rocks.png";
import Loading from "../CustomComponents/Loading";

const OrangePage = styled(IntroSection)`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
`;

const ScrollButton = styled.button`
  height: 50px;
  width: 50px;
  background: transparent;
  border: 2px solid ${(props) => props.theme.white};
  border-radius: 100px;
  color: ${(props) => props.theme.white};
  font-size: 20px;
  position: absolute;
  bottom: 20px;
  outline: none;
  opacity: 0.6;
  transition: 0.3s;
  z-index: 20;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const SkyImage = styled.img`
  position: absolute;
  top: 0;
  width: 2100px;
  height: 1000px;
  z-index: 1;
`;

const MountainImage = styled.img`
  position: absolute;
  bottom: 100px;
  left: 100px;
  width: 50%;
  z-index: 4;
`;

const Hill1Image = styled.img`
  position: absolute;
  bottom: 0;
  right: -100px;
  width: 1600px;
  height: 900px;
  z-index: 10;
`;

const Hill2Image = styled.img`
  position: absolute;
  bottom: 0;
  left: -200px;
  width: 1500px;
  z-index: 8;
`;

const RockImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2000px;
  z-index: 20;
`;

function Homepage(props) {
  const { executeScroll } = props;
  const [offsetY, setOffsetY] = useState(0);

  const {numImages, setNumImages} = props;
  
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <OrangePage>
      {numImages !== 5 && <Loading />}
      <SkyImage
        src={sky}
        alt="sky"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        onLoad={() => setNumImages((prevState) => prevState + 1)}
      />
      <MountainImage
        src={mountain}
        alt="mountain"
        style={{ transform: `translateX(${offsetY * 0.7}px)` }}
        onLoad={() => setNumImages((prevState) => prevState + 1)}
      />
      <Hill1Image
        src={hill1}
        alt="hill1"
        style={{ transform: `translateX(-${offsetY * 0.1}px)` }}
        onLoad={() => setNumImages((prevState) => prevState + 1)}
      />
      <Hill2Image
        src={hill2}
        alt="hill2"
        style={{ transform: `translateX(${offsetY * 0.2}px)` }}
        onLoad={() => setNumImages((prevState) => prevState + 1)}
      />
      <RockImage
        src={rocks}
        alt="rocks"
        onLoad={() => setNumImages((prevState) => prevState + 1)}
      />

      {numImages === 5 && (
        <div
          style={{
            height: "40%",
            width: "40%",
            transform: `translateY(${offsetY * 0.3}px)`,
            zIndex: "20",
          }}
        >
          <Francis />
        </div>
      )}
      <ScrollButton
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        onClick={executeScroll}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </ScrollButton>
    </OrangePage>
  );
}

export default Homepage;
