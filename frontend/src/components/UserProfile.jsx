import { useUserData } from "../contexts/UserDataContext";

export default function UserProfile() {
  const { userData } = useUserData();

  return (
    <div>
      <p>Mon compte</p>
      <ul>
        <li>Nom : {userData.lastname}</li>
        <li>Prénom : {userData.firstname}</li>
        <li>Profession : {userData.profession}</li>
        <li>Filiale : {userData.subsidiary}</li>
      </ul>
    </div>
  );
}
