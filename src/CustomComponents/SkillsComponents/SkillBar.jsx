import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const LevelContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  margin: 20px 0 20px 0;
  flex-basis: ${(props) => (props.isMobile ? "100%" : "45%")};
  min-width: 250px;

  &:hover #title {
    width: calc(100% - 20px);
    opacity: 1;
    padding: 0 10px 0 10px;
  }
`;

const Icon = styled.div`
  background-image: url(${(props) => props.img});
  background-size: 50px 50px;
  margin-right: 10px;
  border-radius: 100px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  min-height: 50px;
  min-width: 50px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
`;

const FullBar = styled.div`
  background-color: #c4c4c4;
  height: 10px;
  width: 100%;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
`;

const PercentageBar = styled.div`
  border-radius: 0 5px 5px 0;
  background-color: ${props => props.theme.orange};
  height: 100%;
  width: ${(props) => props.percentage};
`;

const Title = styled.p`
  margin-right: 10px;
  text-align: center;
  width: 0px;
  overflow: hidden;
  transition: 0.5s;
  white-space: nowrap;
  font-style: italic;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  border-radius: 100px;
  opacity: 0;
`;

function SkillBar(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const { item } = props;

  return (
    <LevelContainer isMobile={isTabletOrMobile}>
      <Icon img={item.image} />
      <Title id="title">{item.title}</Title>
      <FullBar>
        <PercentageBar percentage={item.percentage} />
      </FullBar>
      <p style={{ color: "#423E37" }}>{item.percentage}</p>
    </LevelContainer>
  );
}

export default SkillBar;
