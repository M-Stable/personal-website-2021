import React from "react";
import { MusicSection } from "../CustomComponents/Sections";
import styled from "styled-components";
import music from "../images/illustrations/music.svg";
import { useMediaQuery } from "react-responsive";

const StyledImage = styled.img`
  position: absolute;
  top: 30px;
  right: 40px;
  z-index: 1;
  width: 200px;
  opacity: 0.8;
`;

const StyledHeading = styled.h1`
  color: #fff8f0;
`;

const SoundCloudContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-wrap: wrap;
`;

function Music(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  
  return (
    <MusicSection isMobile={isTabletOrMobile}>
      <StyledHeading>Music By Me</StyledHeading>
      <div style={{ zIndex: "2", marginTop: 30,}}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/DceUmgQ1syA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="christmas"
        ></iframe>

        <SoundCloudContainer>
          <iframe
            title="soundcloud1"
            width="32%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/796494487&color=%23ee7b30&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <iframe
            title="soundcloud1"
            width="32%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/799746802&color=%23ee7b30&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <iframe
            title="soundcloud1"
            width="32%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/784179349&color=%23ee7b30&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SoundCloudContainer>
      </div>
      <StyledImage src={music} alt="music" />
    </MusicSection>
  );
}

export default Music;
