import logo from "../assets/logo-abside.png";

export default function Logo() {
  return (
    <picture className="flex justify-center mt-2">
      <img className="max-w-[40%]" src={logo} alt="Logo Abside" />
    </picture>
  );
}
