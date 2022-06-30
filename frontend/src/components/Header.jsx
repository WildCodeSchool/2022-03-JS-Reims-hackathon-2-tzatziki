import logo from "../assets/logo-matchstack-full.png";

export default function Header() {
  return (
    <picture className="flex justify-center my-6">
      <img src={logo} alt="logo-matchstack" className="h-20" />
    </picture>
  );
}
