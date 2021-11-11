import React, { createContext, useState } from 'react';

interface UserContextModel {
  token: string;
  setToken: (value: string) => void;
}

export const UserContext = createContext<UserContextModel>({ token: '', setToken: null });

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const data = {
    token: token,
    setToken: setToken
  };

  return <UserContext.Provider value={data}>
    {children}
  </UserContext.Provider>;
};