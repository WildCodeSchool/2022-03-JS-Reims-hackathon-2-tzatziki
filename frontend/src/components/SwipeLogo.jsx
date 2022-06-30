import swipeLogo from "../assets/swipe.png";

export default function SwipeLogo() {
  return (
    <picture className="flex justify-center">
      <img src={swipeLogo} alt="Swipe logo" className="w-[5rem] blue" />
    </picture>
  );
}
