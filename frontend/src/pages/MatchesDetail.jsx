import MatchCardZoom from "@components/MatchCardZoom";
import { useParams } from "react-router-dom";

function Matches() {
  const { id } = useParams();
  return <MatchCardZoom id={parseInt(id, 10)} />;
}

export default Matches;
