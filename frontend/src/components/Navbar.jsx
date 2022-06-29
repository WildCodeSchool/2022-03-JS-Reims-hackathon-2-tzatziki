import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around text-center text-lg h-[8vh] items-center bg-slate-100">
      <NavLink to="/home">🏠</NavLink>
      <NavLink to="/matchlist">❤️</NavLink>
      <NavLink to="/account">👤</NavLink>
    </nav>
  );
}
