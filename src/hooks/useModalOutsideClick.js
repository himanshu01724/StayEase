import { useRef, useEffect } from "react";

export function useModalOutsideClick(handler) {
  const outside = useRef();

  const hook = useEffect(() => {
    function handleClick(e) {
      if (outside.current && !outside.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [handler]);
  return { outside };
}
