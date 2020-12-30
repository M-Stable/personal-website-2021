import React from "react";
import styled from "styled-components";
import PropagateLoader from "react-spinners/PropagateLoader";

const LoadingPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.black};
  z-index: 100;
  color: ${(props) => props.theme.white};
`;

function Loading(props) {
  return (
    <LoadingPage>
      <h1>Loading</h1>
      <PropagateLoader size={15} color={"#EE7B30"} />
    </LoadingPage>
  );
}

export default Loading;
