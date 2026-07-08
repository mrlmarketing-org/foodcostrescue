import { useEffect, useState } from "react";

const QUERY = "(max-width: 640px)";

function getMatch() {
  return typeof window !== "undefined" && window.matchMedia(QUERY).matches;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
