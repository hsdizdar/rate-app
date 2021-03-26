import React from "react";
import styled from "styled-components";

const ToastContainer = styled.div`
  position: absolute;
  top: 10px;
  z-index: 9999;
  height: 60px;
  width: 550px;
  background-color: #ddf9d3;
  border: 1px solid #3ca420;
  border-radius: 5px;
  opacity: 0.9;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ToastImportantText = styled.span`
  color: #5aad5a;
  text-align: center;
  font-size: 21px;
  font-weight: 600;
  padding: 5px;
`;
const ToastText = styled.span`
  color: #5aad5a;
  text-align: center;
  font-size: 21px;
  padding: 5px;
`;

const Toaster = ({ isShow, linkName, message }) => {
  return (
    <ToastContainer
      style={{ display: isShow ? "flex" : "none" }}
      isShow={isShow}
    >
      <ToastImportantText>{linkName}</ToastImportantText>
      <ToastText>{message}</ToastText>
    </ToastContainer>
  );
};

export default Toaster;
