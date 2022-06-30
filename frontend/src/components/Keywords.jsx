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

export default function Keywords() {
  return (
    <section className="mx-8">
      <ul className="flex justify-center flex-wrap px-2 gap-2">
        {keywords.map((keyword) => (
          <li
            className="flex w-fit px-2 justify-center items-center rounded-md bg-orange-300"
            key={keyword.id}
          >
            {keyword.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
