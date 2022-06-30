import logo from "../assets/logo-matchstack-full.png";

export default function Logo() {
  return (
    <picture className="flex justify-center p-4">
      <img
        src={logo}
        alt="logo-matchstack"
        className="w-full object-contain px-20"
      />
    </picture>
  );
}
