import { React, createContext, useContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(
    {
        firstName: "First Name",
        lastName: "Last Name",
        position: "",
        avatar: null,
        email: "-",
        password: null,
        age: 0,
        gender: ""
    }
  );

  return (
    <AppContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };