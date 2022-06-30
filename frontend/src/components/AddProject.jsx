import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import subsidiary from "../dummies/subsidiary";
import tags from "../dummies/tags";

export default function AddProject() {
  function submitForm(event) {
    event.preventDefault();
    toast.success("Projet ajouté avec succès ✅");
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-between"
        onSubmit={submitForm}
      >
        <h2 className="text-2xl m-6 font-bold">Ajouter un projet</h2>

        <label htmlFor="title">Nom du projet :</label>
        <input
          id="title"
          type="text"
          name="title"
          className="bg-gray-100 mb-2 p-1 w-[17rem]"
        />
        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          name="description"
          className="bg-gray-100 mb-2 p-1 w-[17rem] h-[10rem]"
        />
        <label htmlFor="client_name">Nom du Client :</label>
        <input
          id="client_name"
          type="text"
          name="client_name"
          className="bg-gray-100 mb-2 p-1 w-[17rem]"
        />
        <label htmlFor="staff">Staff :</label>
        <input
          id="staff"
          type="text"
          name="staff"
          className="bg-gray-100 mb-2 p-1 w-[17rem]"
        />
        <label htmlFor="subsidiary">Filliale :</label>
        <Select
          options={subsidiary}
          className="bg-gray-100 mb-2 p-1 w-[17rem]"
        />
        <label htmlFor="slack">Slack :</label>
        <input
          id="slack"
          type="text"
          name="slack"
          className="bg-gray-100 mb-2 p-1 w-[17rem]"
        />
        <label htmlFor="progress">Avancement sur 100 % :</label>
        <input
          id="progress"
          type="number"
          name="progress"
          className="bg-gray-100 mb-2 p-1 w-[17rem]"
        />
        <label htmlFor="subsidiary">Tags :</label>
        <Select
          options={tags}
          isMulti
          className="bg-gray-100 mb-2 p-1 w-[17rem]"
        />
        <button
          type="submit"
          className="m-8 p-2 bg-gray-100 border-gray-400 border-2 rounded-lg"
        >
          Ajouter
        </button>
      </form>
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
    </>
  );
}
