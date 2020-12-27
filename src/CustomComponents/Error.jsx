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

  width: auto;
  padding: 0 15px;
  height: 50px;
  border-radius: 50px;
  background: #b12222;
  color: #fff8f0;
`;

function Error(props) {
  return (
    <Container>
      <SentContainer>
        <p><i>Error sending email</i></p>
      </SentContainer>
    </Container>
  );
}

export default Error;
