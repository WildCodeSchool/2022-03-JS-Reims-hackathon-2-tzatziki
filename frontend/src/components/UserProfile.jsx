export default function UserProfile() {
  const subsidiary = [
    { id: 1, name: "Aix-en-Provence" },
    { id: 2, name: "Aveiro" },
    { id: 3, name: "Bordeaux" },
    { id: 4, name: "Brest" },
    { id: 5, name: "Bruxelles" },
    { id: 6, name: "Canada" },
    { id: 7, name: "Casablanca" },
    { id: 8, name: "Clermont-Ferrand" },
    { id: 9, name: "Dijon" },
    { id: 10, name: "Genève" },
    { id: 11, name: "Le Mans" },
    { id: 12, name: "Lille" },
    { id: 13, name: "Lyon" },
    { id: 14, name: "Montpellier" },
    { id: 15, name: "Munich" },
    { id: 16, name: "Nice - Sophia Antipolis" },
    { id: 17, name: "Nantes" },
    { id: 18, name: "Niort" },
    { id: 19, name: "Orléans" },
    { id: 20, name: "Paris" },
    { id: 21, name: "Rennes" },
    { id: 22, name: "Strasbourg" },
    { id: 23, name: "Toulouse" },
    { id: 24, name: "Tours" },
    { id: 25, name: "Vernon" },
  ];

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
