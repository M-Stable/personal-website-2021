import React, { useRef } from "react";
import "./App.css";
import styled from "styled-components";
import Homepage from "./Sections/Homepage";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Work from "./Sections/Work";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Music from "./Sections/Music";
import { useMediaQuery } from "react-responsive";

const MusicContactContainer = styled.div`
  display: flex;
`;

function App() {
  const ref = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const executeScroll = () => ref.current.scrollIntoView();

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <div>
      <Homepage executeScroll={executeScroll} />
      <div ref={ref}>
        <About executeScroll={executeScroll} />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Projects />
      </div>
      <ConditionalWrapper
        condition={!isTabletOrMobile}
        wrapper={(children) => (
          <MusicContactContainer>{children}</MusicContactContainer>
        )}
      >
        <div>
          <Music />
        </div>
        <div>
          <Contact />
        </div>
      </ConditionalWrapper>
    </div>
  );
}

export default App;
