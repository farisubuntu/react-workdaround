import React from "react";

const StoreContext = React.createContext(null);

// In the same context file we will define a
//default function that the data are
// initialized and
// it's children will have data provided.

function StoreProvider({ children }) {
  const teamMembersNames = ["John", "Mary", "Jason", "David"];

  const [sharing, setSharing] = React.useState([]);
  const [help, setHelp] = React.useState([]);
  const [pairing, setPairing] = React.useState(teamMembersNames);

  const store = {
    sharing: [sharing, setSharing],
    help: [help, setHelp],
    pairing: [pairing, setPairing],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export {StoreProvider,StoreContext} 

