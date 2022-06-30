import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import { ToastContainer, toast } from "react-toastify";
import logo from "../assets/logo-matchstack-full.png";
import "react-toastify/dist/ReactToastify.css";

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

const projects = [
  {
    title: "Chatbot",
    client: "Crédit Agricole",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
    progress: 70,
  },
  {
    title: "Tinderlike",
    client: "Tinder",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ea maxime quia! Eligendi at temporibus ex, magni nihil doloremque, fugit magnam odit, voluptatibus ipsa cum",
    progress: 50,
  },
  {
    title: "Surprise",
    client: "Tinder",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ea maxime quia! Eligendi at temporibus ex, magni nihil doloremque, fugit magnam odit, voluptatibus ipsa cum",
    progress: 50,
  },
];

const matches = [];

export default function Home() {
  const setLastDirection = useState()[1];

  const swiped = (direction, title, client, description, progress) => {
    setLastDirection(direction);
    if (direction === "right") {
      matches.push({ title, client, description, progress });
      toast.success("Matché ❤️ !");
    }
    console.warn(matches);
  };

  return (
    <main className="h-[92vh] flex flex-col mx-8 place-content-around">
      <picture className="flex justify-center">
        <img src={logo} alt="logo-matchstack" className="h-20" />
      </picture>
      <section className="h-[25rem]">
        {projects.map((project) => (
          <TinderCard
            className="relative"
            key={project.title}
            onSwipe={(direction) =>
              swiped(
                direction,
                project.title,
                project.client,
                project.description,
                project.progress
              )
            }
          >
            <div className="bg-slate-100 rounded-xl p-8 flex flex-col justify-center items-center absolute">
              <h1 className="text-2xl mb-4">Projet : {project.title} </h1>
              <h2 className="text-xl mb-4">Client : {project.client}</h2>
              <p className="text-justify text-md mb-4">
                Description : {project.description}
              </p>
              <div className="flex flex-col justify-center items-center">
                Avancement :{" "}
                <progress id="file" max="100" value={project.progress}>
                  {project.progress}
                </progress>
              </div>
            </div>
          </TinderCard>
        ))}
      </section>

      <section>
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
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}
