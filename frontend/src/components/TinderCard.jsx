import TinderCard from "react-tinder-card";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMatchesContext } from "../contexts/MatchesContext";
import projects from "../dummies/projects";
import Keywords from "./Keywords";

export default function Tindercard() {
  const setLastDirection = useState()[1];
  const { setMatches } = useMatchesContext();

  const swiped = (direction, project) => {
    setLastDirection(direction);
    if (direction === "right") {
      setMatches((prevState) => [...prevState, project]);
      toast.success("Matché ❤️ !");
    }
  };

  return (
    <section className="h-[32rem] mx-8">
      {projects.map((project) => (
        <TinderCard
          className="relative"
          key={project.title}
          onSwipe={(direction) => swiped(direction, project)}
        >
          <div className="bg-slate-100 rounded-xl p-8 flex flex-col justify-center items-center absolute TinderCardAnimation">
            <h1 className="text-2xl mb-4">Projet : {project.title} </h1>
            <h2 className="text-xl mb-4">Client : {project.client}</h2>
            <p className="text-justify text-md mb-4">
              Description : {project.description}
            </p>
            <div className="flex flex-col justify-center items-center mb-4">
              Avancement :{" "}
              <progress id="file" max="100" value={project.progress}>
                {project.progress}
              </progress>
            </div>
            <Keywords keywords={project.keyword} />
          </div>
        </TinderCard>
      ))}
    </section>
  );
}
