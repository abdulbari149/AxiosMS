import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";

const initialState = {
  user: {
    id: null,
    email: null,
    role: null,
  },
  authenticated: false,
  error: null,
};

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)