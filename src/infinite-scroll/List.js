import React, { useState, useEffect } from "react";

import useInfiniteScroll from "./useInfinteScroll";

const List = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), n => n + 1)
  );
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => [
        ...prevState,
        ...Array.from(Array(20).keys(), n => n + 1)
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map((listItem, index) => (
          <li key={index} className="list-group-item">
            List Item {listItem}
          </li>
        ))}
      </ul>
      {isFetching && "Fecthing more lsit items..."}
    </>
  );
};

export default List;
