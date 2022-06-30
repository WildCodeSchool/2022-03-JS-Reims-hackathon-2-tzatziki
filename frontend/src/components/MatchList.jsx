import MatchCard from "./MatchCard";
import { useMatchesContext } from "../contexts/MatchesContext";

function MatchList() {
  const { matches } = useMatchesContext();
  return matches.map((match, index) => (
    <MatchCard key={match.title} match={match} id={parseInt(index, 10)} />
  ));
}

export default MatchList;
