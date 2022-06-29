import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/home">🏠</NavLink>
      <NavLink to="/matchlist">❤️</NavLink>
      <NavLink to="/account">👤</NavLink>
    </nav>
  );
}
