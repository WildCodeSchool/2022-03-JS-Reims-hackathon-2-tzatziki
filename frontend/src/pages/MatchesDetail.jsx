import MatchCardZoom from "@components/MatchCardZoom";
import Header from "@components/Header";

import { useParams } from "react-router-dom";

function Matches() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <MatchCardZoom id={parseInt(id, 10)} />
    </>
  );
}

export default Matches;
