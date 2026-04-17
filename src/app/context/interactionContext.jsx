"use client";

import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {

const [interactions, setInteractions] = useState([])
const handleInteraction = (id, name, protocol) => {
    const currentDate = new Date();

    const date = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    });

    const interact = {
        id,
        name,
        protocol,
        date,
        
    }
    setInteractions([...interactions, interact])

}
const data = {
    interactions,
    setInteractions,
    handleInteraction,
  };

  return (
    <InteractionContext.Provider value={data}>
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;