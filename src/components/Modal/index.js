import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d8d8d8;
  margin: 15% auto;
  border: 1px solid #888;
  width: 30%;
  height: 250px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  background-color: black;
`;
const HeaderText = styled.span`
  color: white;
  margin-left: 15px;
  font-size: 21px;
  font-weight: 500;
  align-self: center;
`;
const CloseButton = styled.button`
  margin-right: 15px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  color: #595959;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
const LinkText = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: black;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
  margin-bottom: 20px;
`;
const Button = styled.button`
  align-self: flex-end;
  background-color: black;
  color: white;
  font-size: 24px;
  font-weight: 600;
  width: 170px;
  padding: 5px;
  margin-right: 20px;
  border-radius: 40px;
  &:focus {
    outline: none;
  }
`;

const Modal = ({ isShowModal, linkName, onRemove, onClose }) => {
  return (
    <Container
      style={{
        display: isShowModal ? "block" : "none",
      }}
      show={isShowModal}
    >
      <Content>
        <Header>
          <HeaderText>Remove Link</HeaderText>
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} color="white" size="2x" />
          </CloseButton>
        </Header>
        <TextContainer>
          <Text>Do you want to remove: </Text>
          <LinkText>{linkName}</LinkText>
        </TextContainer>
        <ButtonContainer>
          <Button onClick={onRemove}>OK</Button>
          <Button onClick={onClose}>CANCEL</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Modal;
