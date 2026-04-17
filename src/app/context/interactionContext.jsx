"use client";

import { createContext } from "react";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {
  const data = {
    name: "context",
  };

  return (
    <InteractionContext.Provider value={data}>
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;