import MatchList from "@components/MatchList";
import Logo from "@components/Logo";

function Matches() {
  return (
    <>
      <Logo />
      <h2 className="text-2xl m-6 font-bold text-center">Mes matchs</h2>
      <MatchList />
    </>
  );
}

export default Matches;
