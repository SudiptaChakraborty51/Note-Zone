import { useEffect, useRef } from "react";

export const useOutsideClick = (handler) => {
  let domNode = useRef();
  let handleOutsideClick = (e) => {
    if (domNode && !domNode?.current?.contains(e.target)) handler();
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return domNode;
};
