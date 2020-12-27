import styled from "styled-components";

const IntroSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutSection = styled.div`
  min-height: calc(35vh - 60px);
  padding: 30px 5vw 30px 10vw;
  background-color: #ee7b30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: all 0.5s ease;
  overflow: hidden;
`;

const SkillsSection = styled.div`
  min-height: calc(65vh - 60px);
  padding: 40px 10vw 20px 10vw;
  background-color: #fff8f0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const WorkSection = styled.div`
  min-height: calc(50vh - 80px);
  padding: 40px 10vw 40px 10vw;
  background-color: #7798ab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const ProjectSection = styled.div`
  min-height: calc(50vh - 80px);
  padding: 40px 10vw 40px 10vw;
  background-color: #fff8f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MusicSection = styled.div`
  min-height: calc(100vh - 80px);
  min-width: ${props => props.isMobile ? "calc(100vw - 100px)" : "calc(50vw - 80px)"};
  padding: 40px;
  background-color: #bb7e5d;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContactSection = styled.div`
  min-height: calc(100vh - 80px);
  min-width: ${props => props.isMobile ? "calc(100vw - 100px)" : "calc(50vw - 100px)"};
  padding: 40px;
  background-color: #423e37;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export {
  IntroSection,
  AboutSection,
  SkillsSection,
  WorkSection,
  ProjectSection,
  MusicSection,
  ContactSection,
};
