import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around w-screen text-center text-lg h-[8vh] items-center bg-slate-100 fixed bottom-0">
      <NavLink to="/home">🏠</NavLink>
      <NavLink to="/matchlist">❤️</NavLink>
      <NavLink to="/account">👤</NavLink>
    </nav>
  );
}
