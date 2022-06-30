const likedList = [
  {
    id: 1,
    name: "Potential Octo Umbrella",
    readme: `Concept
This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School. It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

Setup & Use
Project Initialization
In VSCode, install plugins Prettier - Code formatter and ESLint and configure them
Clone this repo, enter it
Run command npm run setup
NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in backend/.env.sample
Available Commands
setup : Initialization of frontend and backend, as well as all toolings
dev : Starts both servers (frontend + backend) in one terminal
dev-front : Starts the React frontend server`,
    branch: "Lyon",
    staff: ["John Doe", "Jane Doe", "Jack Doe", "Jill Doe", "Jenny Doe"],
    tags: [
      "react",
      "react-hooks",
      "react-router",
      "styled-components",
      "styled-system",
      "tailwindcss",
      "tailwindcss-react",
      "tailwindcss-styled-components",
    ],
    slackURL: "http://slack.potential-octo.com",
  },
  {
    id: 2,
    name: "Gloubiboulga",
    readme: "https://gloubiboulga.com/",
    branch: "Lille",
    staff: ["John Doe", "Jane Doe", "Jack Doe", "Jill Doe", "Jenny Doe"],
    tags: ["react", "react-hooks", "react-router", "styled-components"],
    slackURL: "https://gloubiboulga.slack.com",
  },
  {
    id: 3,
    name: "Project 42",
    readme: "https://project42.com/",
    branch: "Nantes",
    staff: ["John Doe", "Jane Doe", "Jack Doe", "Jill Doe", "Jenny Doe"],
    tags: [
      "PHP",
      "React",
      "Node",
      "styled-components",
      "tailwindcss",
      "Python",
    ],
    slackURL: "https://project42.slack.com",
  },
];

export default likedList;
