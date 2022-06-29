import logo from "../assets/logo-abside.png";
import chevronDroit from "../assets/chevron-droit.png";
import chevronGauche from "../assets/chevron-gauche.png";

const keywords = [
  {
    id: 1,
    name: "React.js",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "Express.js",
  },
  {
    id: 4,
    name: "MySql",
  },
  {
    id: 5,
    name: "Chatbot",
  },
  {
    id: 6,
    name: "Chatbot",
  },
  {
    id: 7,
    name: "Chatbot",
  },
  {
    id: 8,
    name: "Chatbot",
  },
  {
    id: 9,
    name: "Chatbot",
  },
  {
    id: 10,
    name: "Chatbot",
  },
  {
    id: 11,
    name: "Chatbot",
  },
  {
    id: 12,
    name: "Chatbot",
  },
];

export default function Home() {
  return (
    <div className="h-[92vh]">
      <header className="flex justify-center">
        <img className="max-w-[40%] my-8" src={logo} alt="Logo Abside" />
      </header>
      <main className="flex flex-col justify-center items-center mx-4">
        <div className="flex justify-center items-center ">
          <img src={chevronGauche} alt="Chevron gauche" className="w-4 mr-2" />
          <section className="bg-slate-100 rounded-xl p-8 flex flex-col justify-center items-center h-[26rem]">
            <h1 className="text-2xl mb-4">Projet : Chatbot </h1>
            <h2 className="text-xl mb-4">Client : Crédit Agricole</h2>
            <p className="text-justify text-md">
              Description : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Mollitia ducimus eius cumque earum itaque natus, molestias
              sapiente reprehenderit iusto, delectus aliquam nesciunt aut
              corporis exercita.
            </p>
          </section>
          <img src={chevronDroit} alt="Chevron droit" className="w-4 ml-2" />
        </div>
        <section className="mt-8">
          <ul className="flex justify-center flex-wrap mx-2">
            {keywords.map((keyword) => (
              <li
                className="flex w-fit px-2 justify-center items-center rounded-md bg-orange-300 m-2"
                key={keyword.id}
              >
                {keyword.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
