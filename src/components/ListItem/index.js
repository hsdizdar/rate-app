import React, { useState } from "react";

import {
  orderByMostVote,
  orderByLessVote,
  orderByIndex,
  orderById,
} from "../../utils";

import Modal from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 500px;
  background-color: transparent;
  border: none;
  padding: 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-image: linear-gradient(to right, #f7f7f7 0%, #e9e9e9 100%);
    background-color: #f7f7f7;
    border: 1px solid #eeeeee;
    border-radius: 7px;
  }
`;
const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  fontsize: 24;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
const PointContainer = styled.div`
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
const Point = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const PointText = styled.span`
  font-size: 18px;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: space-between;
`;
const LinkTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  color: gray;
`;
const LinkName = styled.span`
  text-align: left;
  font-size: 21px;
  font-weight: 700;
  color: black;
`;
const Link = styled.span`
  font-size: 14px;
`;
const LinkButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const VoteButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  text-decoration: none;
  color: gray;
  font-size: 14px;
  font-weight: 600;

  &:focus {
    outline: none;
  }
`;

const ListItem = ({
  linkIndex,
  linkVote,
  linkName,
  link,
  linkId,
  parentUpdateVoteCallback,
  parentRemoveCallback,
}) => {
  const [isShowRemoveButton, setIsShowRemoveButton] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleVote = (vote) => {
    const orderType = localStorage.getItem("orderType");
    let newLinks = JSON.parse(localStorage.getItem("linkInfo"));
    let selectedLink = newLinks.find((item) => item.id === linkId);

    selectedLink.linkVote = selectedLink.linkVote + vote;

    if (orderType === "asc") {
      newLinks = orderByMostVote(orderById(newLinks));
    } else if (orderType === "desc") {
      newLinks = orderByLessVote(orderById(newLinks));
    } else {
      newLinks =
        vote === 1
          ? orderByIndex(orderById(newLinks), linkIndex)
          : orderByIndex(newLinks, linkIndex);
      newLinks = orderByMostVote(newLinks);
    }

    localStorage.setItem("linkInfo", JSON.stringify(newLinks));
    parentUpdateVoteCallback(true);
  };

  const removeLink = () => {
    const links = orderById(JSON.parse(localStorage.getItem("linkInfo")));
    const filteredLinks = links.filter((link) => link.id !== linkId);
    localStorage.setItem("linkInfo", JSON.stringify(filteredLinks));
    parentRemoveCallback(true, linkName.toUpperCase());
    setIsShowModal(false);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
    setIsShowRemoveButton(false);
  };
  const handleShowModal = () => setIsShowModal(true);

  const handleMouseOver = () => setIsShowRemoveButton(true);
  const handleMouseLeave = () => setIsShowRemoveButton(false);

  return (
    <Container onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      {isShowRemoveButton && (
        <RemoveButton onClick={handleShowModal}>
          <FontAwesomeIcon icon={faMinusCircle} color="red" size="2x" />
        </RemoveButton>
      )}
      <PointContainer>
        <Point>{linkVote}</Point>
        <PointText>POINTS</PointText>
      </PointContainer>
      <LinkContainer>
        <LinkTextContainer>
          <LinkName>{linkName}</LinkName>
          <Link>({link})</Link>
        </LinkTextContainer>
        <LinkButtonContainer>
          <VoteButton onClick={() => handleVote(1)}>
            <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: "5px" }} />
            Up Vote
          </VoteButton>
          <VoteButton onClick={() => handleVote(-1)}>
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ marginRight: "5px" }}
            />
            Down Vote
          </VoteButton>
        </LinkButtonContainer>
      </LinkContainer>

      <Modal
        isShowModal={isShowModal}
        linkName={linkName}
        onClose={handleCloseModal}
        onRemove={removeLink}
      />
    </Container>
  );
};

export default ListItem;
