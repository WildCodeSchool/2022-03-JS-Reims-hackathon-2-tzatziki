import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around w-screen text-center text-lg h-[8vh] items-center bg-slate-100 sticky bottom-0">
      <NavLink to="/">🏠</NavLink>
      <NavLink to="/match">❤️</NavLink>
      <NavLink to="/account">👤</NavLink>
    </nav>
  );
}
