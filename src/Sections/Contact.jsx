import React, { useState } from "react";
import { ContactSection } from "../CustomComponents/Sections";
import styled from "styled-components";
import contact from "../images/illustrations/contact.svg";
import { useMediaQuery } from "react-responsive";
import emailjs from "emailjs-com";
import Sent from "../CustomComponents/Sent";
import Sending from "../CustomComponents/Sending";
import Error from "../CustomComponents/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";

const StyledImage = styled.img`
  position: absolute;
  bottom: 20px;
  z-index: 1;
  width: calc(100% - 80px);
  opacity: 0.5;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactButton = styled.button`
  height: 50px;
  width: 50px;
  margin: 0 5px;
  background: transparent;
  border: 2px solid #fff8f0;
  border-radius: 100px;
  color: #fff8f0;
  font-size: 25px;
  outline: none;
  transition: 0.3s;
  z-index: 20;

  &:hover {
    opacity: 1;
    cursor: pointer;
    background: #fff8f0;
    color: #423e37;
  }
`;

const StyledHeading = styled.h1`
  color: #fff8f0;
`;

const StyledDiv = styled.div`
  position: relative;
  padding: 30px 0 0;
  margin-top: 10px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: calc(100% - 20px);
  border: 0;
  border-bottom: 2px solid #fff8f0;
  outline: 0;
  font-size: 1.1rem;
  color: #fff8f0;
  padding: 8px 10px;
  background: #5c574f;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ #form__label {
    font-size: 1.1rem;
    cursor: text;
    top: 35px;
  }

  :focus {
    ~ #form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #ee7b30;
      margin-left: 0px;
    }
    padding-bottom: 6px;
    border-width: 3px;
    border-image: linear-gradient(to right, #ee7b30, #fff8f0);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #ded8d1;
  margin-left: 10px;
`;

const StyledTextArea = styled.textarea`
  font: inherit;
  width: calc(100% - 20px);
  height: 200px;
  border: 0;
  border-bottom: 2px solid #fff8f0;
  outline: 0;
  font-size: 1.1rem;
  color: #fff8f0;
  padding: 8px 10px;
  background: #5c574f;
  transition: border-color 0.2s;
  opacity: 0.8;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ #form__label {
    font-size: 1.1rem;
    cursor: text;
    top: 40px;
  }

  :focus {
    ~ #form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #ee7b30;
      margin-left: 0px;
    }
    padding-bottom: 6px;
  }
`;

const SendButton = styled.input`
  height: 40px;
  padding: 0 30px;
  background: transparent;
  border: 2px solid #fff8f0;
  border-radius: 5px;
  color: #fff8f0;
  font-size: 20px;
  margin-top: 20px;
  float: right;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    cursor: pointer;
    border-color: #ee7b30;
    color: #ee7b30;
  }
`;

function Contact(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    console.log(e)
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_v0cuwk9",
        "template_lw3i9cr",
        e.target,
        "user_up2NHhQg4SgpZj2Ur4zbT"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        },
        (error) => {
          setLoading(false);
          setSuccess(false);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      );
    e.target.reset();
  };

  return (
    <ContactSection isMobile={isTabletOrMobile}>
      <div style={{ zIndex: "2" }}>
        <HeadingContainer>
          <StyledHeading>Contact</StyledHeading>
          <IconContainer>
            <a
              href={"https://www.linkedin.com/in/francis-lee-889377191/"}
              target="_blank"
              rel="noreferrer"
            >
              <ContactButton>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </ContactButton>
            </a>
            <a
              href={"https://github.com/M-Stable"}
              target="_blank"
              rel="noreferrer"
            >
              <ContactButton>
                <FontAwesomeIcon icon={faGithub} />
              </ContactButton>
            </a>
            <a
              href={"https://www.instagram.com/franc_hoon/"}
              target="_blank"
              rel="noreferrer"
            >
              <ContactButton>
                <FontAwesomeIcon icon={faInstagram} />
              </ContactButton>
            </a>
          </IconContainer>
        </HeadingContainer>

        <form
          onSubmit={sendEmail}
          style={{ minHeight: !isTabletOrMobile && "714px", marginTop: !isTabletOrMobile && "30px" }}
        >
          <StyledDiv data-aos="fade-left">
            <StyledInput
              type="input"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <StyledLabel htmlFor="name" id="form__label">
              Full Name *
            </StyledLabel>
          </StyledDiv>
          <StyledDiv data-aos="fade-left" data-aos-delay="100">
            <StyledInput
              type="input"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <StyledLabel htmlFor="email" id="form__label">
              Your Email *
            </StyledLabel>
          </StyledDiv>
          <StyledDiv data-aos="fade-left" data-aos-delay="200">
            <StyledInput
              type="input"
              placeholder="Subject"
              name="subject"
              id="subject"
              required
            />
            <StyledLabel htmlFor="subject" id="form__label">
              Subject Line *
            </StyledLabel>
          </StyledDiv>
          <StyledDiv data-aos="fade-left" data-aos-delay="300">
            <StyledTextArea
              type="input"
              placeholder="Name"
              name="message"
              id="name"
              required
            />
            <StyledLabel htmlFor="name" id="form__label">
              Message *
            </StyledLabel>
          </StyledDiv>
          <SendButton type="submit" value="Send" />
        </form>
      </div>

      {loading && <Sending />}
      {success && <Sent />}
      {error && <Error />}

      <StyledImage src={contact} alt="contact" />
    </ContactSection>
  );
}

export default Contact;
