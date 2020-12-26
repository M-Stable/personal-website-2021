import React, { useState, useEffect } from "react";
import { IntroSection } from "../CustomComponents/Sections";
import Francis from "../CustomComponents/Francis";
import styled from "styled-components";
import backgroundImage from "../images/background-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const OrangePage = styled(IntroSection)`
  background-image: url(${backgroundImage});
`;

const ScrollButton = styled.button`
  height: 50px;
  width: 50px;
  background: transparent;
  border: 2px solid #fff8f0;
  border-radius: 100px;
  color: #fff8f0;
  font-size: 20px;
  position: absolute;
  bottom: 20px;
  outline: none;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function Homepage(props) {
  const { executeScroll } = props;
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <OrangePage>
      <div
        style={{
          height: "40%",
          width: "40%",
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      >
        <Francis />
      </div>
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
