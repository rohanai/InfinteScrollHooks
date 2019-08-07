import { useState, useEffect } from "react";

import debounce from "./debouncing";

const useInfiniteScoll = callback => {
  const [isFectching, setIsFetching] = useState(false);

  useEffect(() => {
    let debounceOnScrollListner = debounce(handleScroll, 500);
    window.addEventListener("scroll", debounceOnScrollListner);
    return () => window.removeEventListener("scroll", debounceOnScrollListner);
  }, []);

  useEffect(
    () => {
      if (!isFectching) return;
      callback(() => {
        console.log("callback");
      });
    },
    [isFectching]
  );

  function handleScroll() {
    console.log("scroll");
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFectching
    ) {
      return;
    }
    setIsFetching(true);
  }

  return [isFectching, setIsFetching];
};

export default useInfiniteScoll;
