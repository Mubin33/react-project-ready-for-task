import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const ContextHook = ({ children }) => {
  const [login, setLogin] = useState("");
  const value = {
    user: "mubin",
    login,
    setLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default ContextHook;
