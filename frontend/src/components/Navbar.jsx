import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around w-screen text-center text-lg items-center bg-slate-100">
      <NavLink to="/" className="p-4">
        🏠
      </NavLink>
      <NavLink to="/match" className="p-4">
        ❤️
      </NavLink>
      <NavLink to="/account" className="p-4">
        👤
      </NavLink>
    </nav>
  );
}
