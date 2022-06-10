import React, { useEffect, useRef, forwardRef, MutableRefObject } from "react";
import { CSSTransition } from "react-transition-group";
import inStyles from "./StaticToFixed.module.scss";

interface props {
  inTransition: boolean;
  styles?: CSSModuleClasses;
  children: React.ReactNode;
  classes: string;
  height: string;
  width: string;
  right?: string;
  bottom?: string;
}

// TODO: add properties top, bottom, left and right to the component
export const StaticToFixed = forwardRef<HTMLDivElement, props>(
  (
    {
      styles = inStyles,
      inTransition,
      children,
      classes,
      height,
      width,
      bottom,
      right,
    },
    ref,
  ) => {
    const elemRef = useRef<HTMLDivElement>(null!);
    const elemContainerRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
      const container = elemContainerRef.current;
      const rect = container.getBoundingClientRect();

      /** this is offset of elem to the elem if it was bottom right */
      const xOffset = window.innerWidth - rect.x - rect.width;
      const yOffset = window.innerHeight - rect.y - rect.height;

      container.style.setProperty("--transformX-elem", `${-xOffset}px`);
      container.style.setProperty("--transformY-elem", `${yOffset}px`);
      if (right) container.style.setProperty("--right", `${right}`);
      if (bottom) container.style.setProperty("--bottom", `${bottom}`);
    }, [inTransition]);

    return (
      <div
        className={`${inStyles.staticToFixedContainer}`}
        style={{ height, width, position: "relative", zIndex: 1000 }}
        ref={(node) => {
          if (node === null) return;
          elemContainerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as MutableRefObject<HTMLDivElement>).current = node;
          }
        }}
      >
        <CSSTransition
          nodeRef={elemRef}
          in={inTransition}
          timeout={0}
          classNames={{
            enter: styles[`${classes}-enter`],
            enterDone: styles[`${classes}-enter-done`],
            exit: styles[`${classes}-exit`],
            exitDone: styles[`${classes}-exit-done`],
          }}
        >
          <div ref={elemRef}>{children}</div>
        </CSSTransition>
      </div>
    );
  },
);

export default StaticToFixed;
