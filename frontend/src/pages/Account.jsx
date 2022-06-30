import Logo from "@components/Logo";
import UserProfile from "../components/UserProfile";

export default function Account() {
  return (
    <>
      <Logo />
      <div className="h-[70vh] flex flex-col justify-center">
        <UserProfile />
      </div>
    </>
  );
}
