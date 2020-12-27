import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 20px;
  border-bottom-right-radius: 0px;
  min-height: 310px;
  margin: 20px;
  width: 250px;
  min-width: 250px;
  position: relative;
  background-color: #7798ab;
  transition: all 0.3s ease;
  transform: rotate(${(props) => props.rotation}deg);
  box-shadow: 10px 10px #ebe4d7;

  &:hover {
    box-shadow: 0px 0px #ebe4d7;
    transform: translateX(10px);
    transform: translateY(10px);
  }
`;

const BottomContainer = styled.div`
  border-bottom-left-radius: 19px;
  height: 50%;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  overflow-y: scroll;
  text-overflow: ellipsis;

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ee7b30;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const Image = styled.img`
  border-radius: 20px 20px 0 0;
  height: 100%;
  width: 100%;
`;

const CardTitle = styled.h2`
  color: #423e37;
  margin: 5px 0 0 0;
  font-size: 20px;
`;

const CardText = styled.p`
  color: #423e37;
  font-size: 15px;
  margin: 5px 5px 0 5px;
`;

function Card(props) {
  const { text, image, altText, rotation, link } = props;
  return (
    <CardContainer rotation={rotation}>
      <a href={link} target="_blank" rel="noreferrer">
        <ImageContainer>
          <Image src={image} alt={altText} />
        </ImageContainer>
      </a>
      <BottomContainer>
        <CardTitle>{text.title}</CardTitle>
        <CardText>{text.description}</CardText>
      </BottomContainer>
    </CardContainer>
  );
}

export default Card;
