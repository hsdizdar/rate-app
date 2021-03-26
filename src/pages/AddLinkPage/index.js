import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Toaster from "../../components/Toaster";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  margin: 20px 0px 30px 0px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const Label = styled.span`
  color: black;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  padding-left: 5px;
`;
const Input = styled.input`
  width: 500px;
  font-size: 21px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
  &::placeholder {
    color: #dadada;
    font-size: 21px;
  }
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  align-self: flex-end;
  background-color: black;
  color: white;
  font-size: 24px;
  font-weight: 600;
  width: 170px;
  padding: 5px;
  border-radius: 40px;
  &:focus {
    outline: none;
  }
`;

const AddLinkPage = () => {
  const [linkName, setLinkName] = useState("");
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);
  const [toasterLinkName, setToasterLinkName] = useState("");

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setShow(false);
      }, 1000);
    };
  }, [show]);

  const handleSetLinkName = (linkName) => {
    setLinkName(linkName.target.value);
    setToasterLinkName(linkName.target.value);
  };

  const handleSetLink = (link) => setLink(link.target.value);

  const addNewLink = () => {
    let linkInfo = JSON.parse(localStorage.getItem("linkInfo")) || [];

    const lastId =
      linkInfo.length && Math.max(...linkInfo.map((link) => link.id));

    if (linkName !== "" && link !== "") {
      linkInfo.push({
        id: lastId + 1,
        linkName: linkName,
        link: link,
        linkVote: 0,
      });

      localStorage.setItem("linkInfo", JSON.stringify(linkInfo));
      setShow(true);
      setLinkName("");
      setLink("");
    }
  };

  return (
    <Container>
      <Toaster
        linkName={toasterLinkName.toUpperCase()}
        message=" added."
        isShow={show}
      />
      <Link
        to="/"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 500,
          textAlign: "left",
          marginBottom: "10px",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 10 }} />
        Return to List
      </Link>
      <Title>Add New Link</Title>
      <Label>Link Name: </Label>
      <Input
        placeholder="e.g. Alphabet"
        type="text"
        value={linkName}
        onChange={(value) => handleSetLinkName(value)}
      />
      <Label>Link URL: </Label>
      <Input
        placeholder="e.g. http://abc.xyz"
        type="text"
        value={link}
        onChange={(value) => handleSetLink(value)}
      />
      <Button onClick={addNewLink}>ADD</Button>
    </Container>
  );
};

export default AddLinkPage;
