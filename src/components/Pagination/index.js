import React, { useState } from "react";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  algin-content: flex-end;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0px 20px 0px 20px;

  &:focus {
    outline: none;
  }
`;
const Number = styled.span`
  color: black;
  font-size: 18px;
  font-weight: 700;
  padding: 2px 7px 2px 7px;
  margin-right: 5px;
  border: ${(props) => (props.active ? "#ff5050" : "#66ff99")};
`;

const Pagination = ({ children }) => {
  const perPage = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const pageCount = Math.ceil(children && children.length / perPage);

  const handleNextPage = () => {
    if (pageNumber === pageCount) return;
    setPageNumber((current) => current + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber === 1) return;
    setPageNumber((current) => current - 1);
  };

  const renderPageNumbers = () => {
    let numbers = [];

    for (let i = 1; i <= pageCount; i++) {
      numbers.push(i);
    }

    return numbers;
  };

  return (
    <Container>
      {children &&
        children.slice((pageNumber - 1) * perPage, pageNumber * perPage)}

      {renderPageNumbers().length > 1 && (
        <ButtonContainer>
          <Button onClick={handlePrevPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          {renderPageNumbers().map((number, index) => (
            <Number key={index} active={pageNumber === number}>
              {number}
            </Number>
          ))}
          <Button onClick={handleNextPage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Pagination;
