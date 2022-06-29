import MatchCardZoom from "@components/MatchCardZoom";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";

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
