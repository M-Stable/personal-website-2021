import React from "react";
import styled from "styled-components";

const LevelContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  margin: 20px 0 20px 0;
  flex-basis: 45%;
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
  border-color: #423e37;
  background-color: #fff8f0;
  min-height: 50px;
  min-width: 50px;
  box-shadow: 3px 3px #ebe4d7;
`;

const FullBar = styled.div`
  background-color: #c4c4c4;
  height: 10px;
  width: 100%;
  margin-right: 10px;
  box-shadow: 3px 3px #ebe4d7;
`;

const PercentageBar = styled.div`
  border-radius: 0 5px 5px 0;
  background-color: #ee7b30;
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
  background-color: #423e37;
  color: #fff8f0;
  border-radius: 100px;
  opacity: 0;
`;

function SkillBar(props) {
  const { item } = props;

  return (
    <LevelContainer>
      <Icon img={item.image} />
      <Title id="title">{item.title}</Title>
      <FullBar>
        <PercentageBar percentage={item.percentage} />
      </FullBar>
      <p>{item.percentage}</p>
    </LevelContainer>
  );
}

export default SkillBar;
