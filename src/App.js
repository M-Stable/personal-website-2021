import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Homepage from "./Sections/Homepage";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Work from "./Sections/Work";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Music from "./Sections/Music";
import { useMediaQuery } from "react-responsive";
import Aos from "aos";

const MusicContactContainer = styled.div`
  display: flex;
`;

function App() {
  const [numImages, setNumImages] = useState(0);

  const ref = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const executeScroll = () => ref.current.scrollIntoView();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  const theme = {
    orange: "#EE7B30",
    white: "#FFF8F0",
    blue: "#7798AB",
    brown: "#BB7E5D",
    black: "#423E37",
  };

  return (
    <ThemeProvider theme={theme}>
      <Homepage
        executeScroll={executeScroll}
        numImages={numImages}
        setNumImages={setNumImages}
      />
      {numImages === 5 && (
        <>
          <div ref={ref}>
            <About executeScroll={executeScroll} />
          </div>
          <Skills />
          <Work />
          <Projects />
          <ConditionalWrapper
            condition={!isTabletOrMobile}
            wrapper={(children) => (
              <MusicContactContainer>{children}</MusicContactContainer>
            )}
          >
            <Music />
            <Contact />
          </ConditionalWrapper>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
