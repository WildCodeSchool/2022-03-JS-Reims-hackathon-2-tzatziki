import { Link } from "react-router-dom";
import logo from "../assets/logo-matchstack-full.png";

export default function Logo() {
  return (
    <Link to="/admin">
      <picture className="flex justify-center mb-4 p-4">
        <img
          src={logo}
          alt="logo-matchstack"
          className="w-full object-contain px-20"
        />
      </picture>
    </Link>
  );
}
