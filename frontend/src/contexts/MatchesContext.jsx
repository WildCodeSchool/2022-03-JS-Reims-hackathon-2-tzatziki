import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const MatchesContext = createContext();

export function MatchesProvider({ children }) {
  const [Matches, setMatches] = useState();

  const value = useMemo(() => ({ Matches, setMatches }), [Matches]);

  return (
    <MatchesContext.Provider value={value}>{children}</MatchesContext.Provider>
  );
}

MatchesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useMatches = () => useContext(MatchesContext);
