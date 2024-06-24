import { RefObject, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollIntoView = (ref: RefObject<HTMLElement>) => {
  const location = useLocation();
  useEffect(() => {
    if (ref.current && location.hash === `#${ref.current.id}`) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [ref, location]);
};
