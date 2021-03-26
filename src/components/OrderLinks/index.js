import React, { useState } from "react";
import { orderByMostVote, orderByLessVote } from "../../utils";

const OrderLinks = ({ parentAddCallback }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    let sortedLinks = [];
    const links = JSON.parse(localStorage.getItem("linkInfo"));
    const orderType = e.target.value;

    localStorage.setItem("orderType", orderType);
    setValue(orderType);

    if (orderType === "asc") {
      sortedLinks = orderByMostVote(links);
    } else if (orderType === "desc") {
      sortedLinks = orderByLessVote(links);
    }

    localStorage.setItem("linkInfo", JSON.stringify(sortedLinks));

    parentAddCallback(true);
  };

  return (
    <div className="form-group">
      <select value={value} onChange={onChange} className="form-control">
        <option hidden>Order By</option>
        <option value="asc">Most Voted (Z - A)</option>
        <option value="desc">Less Voted (A - Z)</option>
      </select>
    </div>
  );
};

export default OrderLinks;
