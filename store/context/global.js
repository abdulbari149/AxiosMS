import { createContext, useContext, useReducer } from "react";
const GlobalContext = createContext(null);
export const GlobaltProvider = ({ children }) => {
    const [slider, dispatch] = useReducer(sliderReducer)
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export const useAuth = () => useContext(GlobalContext);
