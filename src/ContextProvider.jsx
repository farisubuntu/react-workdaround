import MyConext from "./MyContext";

function ContextProvider({ children }) {
  return <MyConext.Provider>{children}</MyConext.Provider>;
}
export default ContextProvider;
