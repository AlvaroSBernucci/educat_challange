import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../api/users.api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    async function loadUser() {
      if (localStorage.getItem("token")) {
        try {
          const response = await getUser();
          setCurrentUser(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          setCurrentUser(null);
          localStorage.removeItem("token");
        }
      }
    }

    loadUser();
  }, []);

  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};
