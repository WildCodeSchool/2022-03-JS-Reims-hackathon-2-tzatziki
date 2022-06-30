import MatchCardZoom from "@components/MatchCardZoom";
import Logo from "@components/Logo";

import { useParams } from "react-router-dom";

function Matches() {
  const { id } = useParams();
  return (
    <>
      <Logo />
      <MatchCardZoom id={parseInt(id, 10)} />
    </>
  );
}

export default Matches;
