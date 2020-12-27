import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 150px;
  left: calc(50% - 100px);
  z-index: 4;
`;

const SentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 50px;
  border-radius: 50px;
  background: #bb7e5d;
  color: #fff8f0;
`;

function Sending(props) {
  return (
    <Container>
      <SentContainer>
        <p>Sending...</p>
      </SentContainer>
    </Container>
  );
}

export default Sending;
