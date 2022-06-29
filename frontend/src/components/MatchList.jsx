import likedList from "../dummies/likedList";
import MatchCard from "./MatchCard";

function MatchList() {
  return likedList.map((match) => <MatchCard key={match.id} match={match} />);
}

export default MatchList;
