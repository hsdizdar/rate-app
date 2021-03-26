import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.button`
  display: flex;
  flex-direction: row;
  width: 500px;
  background-color: #f7f7f7;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: #b3b3b3;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;
const TextPlus = styled.span`
  position: relative;
  bottom: 8px;
  font-size: 70px;
  font-weight: 700;
`;
const Text = styled.span`
  margin-left: 10px;
  align-self: center;
  text-align: center;
  font-size: 34px;
  font-weight: 600;
`;

const AddLinkButton = () => {
  return (
    <Link to="/pages/AddLinkPage" style={{ textDecoration: "none" }}>
      <Container>
        <TextContainer>
          <TextPlus>+</TextPlus>
        </TextContainer>
        <Text>SUBMIT A LINK</Text>
      </Container>
    </Link>
  );
};

export default AddLinkButton;
