import React from "react";
import { ContactSection } from "../CustomComponents/Sections";
import styled from "styled-components";
import contact from "../images/illustrations/contact.svg";
import { useMediaQuery } from "react-responsive";

const StyledImage = styled.img`
  position: absolute;
  bottom: 20px;
  z-index: 1;
  width: calc(100% - 80px);
  opacity: 0.5;
`;

const StyledHeading = styled.h1`
  color: #fff8f0;
`;

const StyledForm = styled.form`
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
  width: 100px;
  background: transparent;
  border: 2px solid #fff8f0;
  border-radius: 5px;
  color: #fff8f0;
  font-size: 20px;
  margin-top: 20px;
  float: right;
`;

function Contact(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <ContactSection isMobile={isTabletOrMobile}>
      <div style={{ zIndex: "2" }}>
        <StyledHeading>Contact</StyledHeading>
        <StyledForm>
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
        </StyledForm>
        <StyledForm>
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
        </StyledForm>
        <StyledForm>
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
        </StyledForm>
        <StyledForm>
          <StyledTextArea
            type="input"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <StyledLabel htmlFor="name" id="form__label">
            Message
          </StyledLabel>
        </StyledForm>
        <SendButton type="submit" value="Submit" />
      </div>

      <StyledImage src={contact} alt="contact" />
    </ContactSection>
  );
}

export default Contact;
