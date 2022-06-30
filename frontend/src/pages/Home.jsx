import { ToastContainer } from "react-toastify";
import Logo from "@components/Logo";
import "react-toastify/dist/ReactToastify.css";
import TinderCard from "@components/TinderCard";
import Keywords from "@components/Keywords";
import SwipeLogo from "@components/SwipeLogo";

export default function Home() {
  return (
    <div className="h-full flex flex-col place-content-around">
      <Logo />
      <TinderCard />
      <Keywords />
      <SwipeLogo />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
