import React, { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  opt?: IntersectionObserverInit,
  once?: boolean,
) {
  const ref = useRef<T>(null);
  const [isInView, setIsItInView] = useState(true);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const callBack: IntersectionObserverCallback = (entry) => {
      setIsItInView(entry[0].isIntersecting);
      setEntry(entry[0]);
      if (entry[0].isIntersecting && once) {
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(callBack, opt);
    const elem = ref.current;
    if (!elem) return;
    observer.observe(elem);
    return () => {
      observer.unobserve(elem);
    };
  }, [ref, once]);

  return { ref, isInView, entry };
}
