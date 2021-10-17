import { createContext, useContext, useReducer } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const GlobalContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS_FETCHING":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case "ERROR_FETCHING":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: null,
      };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ value, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
