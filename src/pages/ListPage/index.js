import React, { useState, useEffect } from "react";

import { orderById } from "../../utils";

import AddLinkButton from "../../components/AddLinkButton";
import OrderLinks from "../../components/OrderLinks";
import ListItem from "../../components/ListItem";
import Pagination from "../../components/Pagination";
import Toaster from "../../components/Toaster";

const ListPage = () => {
  const [links, setLinks] = useState([]);
  const [isShowToaster, setIsShowToaster] = useState(false);
  const [callbackLinkName, setCallbackLinkName] = useState("");

  useEffect(() => {
    localStorage.removeItem("orderType");
    let newLinks = JSON.parse(localStorage.getItem("linkInfo")) || [];
    setLinks(orderById(newLinks));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsShowToaster(false);
    }, 1000);
  }, [isShowToaster]);

  const handleAddCallback = (isUpdatePage) => {
    if (isUpdatePage) {
      setLinks(JSON.parse(localStorage.getItem("linkInfo")));
    }
  };

  const handleUpdateVoteCallback = (isUpdatePage) => {
    if (isUpdatePage) {
      setLinks(JSON.parse(localStorage.getItem("linkInfo")));
    }
  };

  const handleRemoveCallback = (isUpdatePage, linkName) => {
    if (isUpdatePage) {
      setCallbackLinkName(linkName);
      setIsShowToaster(true);
      setLinks(JSON.parse(localStorage.getItem("linkInfo")));
    }
  };

  return (
    <div>
      <Toaster
        linkName={callbackLinkName}
        message=" removed."
        isShow={isShowToaster}
      />
      <AddLinkButton />
      <hr />
      <OrderLinks parentAddCallback={handleAddCallback} />
      {links.length > 0 && (
        <Pagination>
          {links.map((item, index) => (
            <ListItem
              key={index}
              linkIndex={index}
              linkId={item.id}
              linkVote={item.linkVote}
              linkName={item.linkName}
              link={item.link}
              parentUpdateVoteCallback={handleUpdateVoteCallback}
              parentRemoveCallback={handleRemoveCallback}
            />
          ))}
        </Pagination>
      )}
    </div>
  );
};

export default ListPage;
