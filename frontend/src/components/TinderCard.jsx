import TinderCard from "react-tinder-card";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMatchesContext } from "../contexts/MatchesContext";
import projects from "../dummies/projects";

export default function Tindercard() {
  const setLastDirection = useState()[1];
  const { setMatches } = useMatchesContext();

  const swiped = (direction, title, client, description, progress) => {
    setLastDirection(direction);
    if (direction === "right") {
      setMatches((prevState) => [
        ...prevState,
        { title, client, description, progress },
      ]);
      toast.success("Matché ❤️ !");
    }
  };

  return (
    <section className="h-[25rem] mx-8">
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
  );
}
