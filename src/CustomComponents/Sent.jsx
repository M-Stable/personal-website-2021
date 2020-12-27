import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const expand = keyframes`
  0% {
    width: 50px;
    transform: translateX(50px);
  }
  100% {
    width: 150px;
    transform: translateX(0);
  }
`;

const move = keyframes`
  0% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 200px;
  left: calc(50% - 100px);
`;

const TickContainer = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #79bc4f;
  z-index: 5;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  position: absolute;
  top: 0;
  left: 0;

  animation: 0.5s ${move} ease-out;

  #icon {
    width: 30px;
    height: 30px;
  }
`;

const SentContainer = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 50px;
  background: #ee7b30;
  z-index: 4;

  position: absolute;
  top: 0;
  left: 0;

  animation: 0.5s ${expand} ease-out;
`;

const Text = styled.p`
  position: absolute;
  top: 5px;
  left: 70px;
  z-index: 7;
  color: #fff8f0;
`;

function Sent(props) {
  return (
    <Container>
      <TickContainer>
        <FontAwesomeIcon id="icon" color={"white"} icon={faCheck} />
      </TickContainer>
      <SentContainer>
        <Text>Sent!</Text>
      </SentContainer>
    </Container>
  );
}

export default Sent;
