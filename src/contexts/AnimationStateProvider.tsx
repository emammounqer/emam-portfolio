import React, { createContext, useState } from "react";

// const reducer : React.Reducer<any, any> = (state, action) => {
//   switch (action.type) {

type ContactState = "side" | "land";

interface AnimationStateCtx {
  contactState: ContactState;
  setContactState: React.Dispatch<React.SetStateAction<ContactState>>;
}

export const AnimationStateCtx = createContext<AnimationStateCtx>(
  {} as AnimationStateCtx,
);

interface props {
  children: React.ReactNode;
}

export const AnimationStateProvider: React.FC<props> = (props) => {
  const [contactState, setContactState] = useState<ContactState>("land");

  const value: AnimationStateCtx = { contactState, setContactState };

  return (
    <AnimationStateCtx.Provider value={value}>
      {props.children}
    </AnimationStateCtx.Provider>
  );
};

export default AnimationStateProvider;
