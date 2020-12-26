import React from "react";

function BackgroundBlue(props) {
  return (
    <svg
      width="100%"
      height="159"
      // viewBox="0 0 100vw 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "1",
      }}
      preserveAspectRatio="xMaxYMin meet"
    >
      <path
        d="M0 0.5C0 0.5 457 16.5 1065.5 102.5C1674 188.5 1920 0.5 1920 0.5V159H0V0.5Z"
        fill="#7798AB"
      />
    </svg>
  );
}

export default BackgroundBlue;
