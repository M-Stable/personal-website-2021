import React from "react";

function BackgroundBlue(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "1",
      }}
    >
      <path
        fill="#7798AB"
        fill-opacity="1"
        d="M0,128L80,144C160,160,320,192,480,218.7C640,245,800,267,960,261.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  );
}

export default BackgroundBlue;
