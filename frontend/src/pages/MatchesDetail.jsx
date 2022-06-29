import MatchCardZoom from "@components/MatchCardZoom";
import { useParams } from "react-router-dom";

function Matches() {
  const { id } = useParams();
  return <MatchCardZoom id={id} />;
}

export default Matches;
