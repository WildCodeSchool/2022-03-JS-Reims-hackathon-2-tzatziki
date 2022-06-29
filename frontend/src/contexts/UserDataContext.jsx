import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState();

  const value = useMemo(() => ({ userData, setUserData }), [userData]);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

UserDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useUserData = () => useContext(UserDataContext);
