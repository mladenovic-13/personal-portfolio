import { MutableRefObject, useEffect, useState } from "react";

const useOnScreen = (ref: MutableRefObject<Element | undefined>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
export default useOnScreen;
