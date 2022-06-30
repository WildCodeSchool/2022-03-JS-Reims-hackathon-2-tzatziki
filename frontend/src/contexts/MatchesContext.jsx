import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const MatchesContext = createContext();

export function MatchesContextProvider({ children }) {
  const [matches, setMatches] = useState([]);

  const value = useMemo(() => ({ matches, setMatches }), [matches]);

  return (
    <MatchesContext.Provider value={value}>{children}</MatchesContext.Provider>
  );
}

MatchesContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useMatchesContext = () => useContext(MatchesContext);
