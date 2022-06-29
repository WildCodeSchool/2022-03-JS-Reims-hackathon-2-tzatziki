import likedList from "../dummies/likedList";
import MatchCard from "./MatchCard";

function MatchList() {
  return likedList.map((match) => (
    <MatchCard key={match.id} match={match} id={match.id} />
  ));
}

export default MatchList;
