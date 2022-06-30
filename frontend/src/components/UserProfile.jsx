import subsidiary from "../dummies/subsidiary";

export default function UserProfile() {
  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <form
      className="flex flex-col items-center justify-between"
      onSubmit={submitForm}
    >
      <h2 className="text-2xl m-6 font-bold">Mon compte</h2>
      <label htmlFor="lastname">Nom :</label>
      <input
        id="lastname"
        type="text"
        name="lastname"
        className="bg-gray-100 mb-2 p-1 w-[17rem]"
      />
      <label htmlFor="firstname">Prénom :</label>
      <input
        id="firstname"
        type="text"
        name="firstname"
        className="bg-gray-100 mb-2 p-1 w-[17rem]"
      />
      <label htmlFor="profession">Profession :</label>
      <input
        id="profession"
        type="text"
        name="profession"
        className="bg-gray-100 mb-2 p-1 w-[17rem]"
      />
      <label htmlFor="subsidiary">Filiale :</label>
      <select
        id="subsidiary"
        type="text"
        name="subsidiary"
        className="bg-gray-100 p-1.5 w-[17rem]"
      >
        <option value="">Sélectionnez votre filiale</option>
        {subsidiary.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="m-8 p-2 bg-gray-100 border-gray-400 border-2 rounded-lg"
      >
        Modifier mon profil
      </button>
    </form>
  );
}
