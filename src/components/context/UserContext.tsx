import React, { createContext, useEffect, useState } from 'react';
import { ApiEndpoints } from '../../configs/api/endpoints';
import apiService from '../../services/apiService';

interface UserContextModel {
  token: string
  setToken: (value: string) => void
  id: string
  setId: (value: string) => void
  type: string
  setType: (value: string) => void
}

export const UserContext = createContext<UserContextModel>({ token: '', setToken: null, id: '', setId: null, type: '', setType: null });

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [id, setId] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    if (token) {
      apiService.get(ApiEndpoints.user(token))
        .then(({ data: any }) => {
          setType(data.type);
          setId(data.id)
        })
        .catch(() => {
          localStorage.removeItem('token');
          setToken(null);
        })
    }
  }, [token])

  const data = {
    token: token,
    setToken: setToken,
    id: id,
    setId: setId,
    type: type,
    setType: setType
  };

  return <UserContext.Provider value={data}>
    {children}
  </UserContext.Provider>;
};