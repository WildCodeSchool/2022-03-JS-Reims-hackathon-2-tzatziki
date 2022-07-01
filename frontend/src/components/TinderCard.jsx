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
    <section className="h-[33rem] mx-8 md: h-[43rem] translate-x-[36%]">
      {projects.map((project) => (
        <TinderCard
          className="relative"
          key={project.title}
          onSwipe={(direction) => swiped(direction, project)}
        >
          <div className="bg-slate-100 rounded-xl p-8 flex flex-col absolute TinderCardAnimation md: h-[60vh] w-[50vh]">
            <h1 className="font-bold mb-2">Projet : {project.title} </h1>
            <h2 className="text-sm mb-2 text-[#787878]">
              Client : {project.client}
            </h2>
            <p className="text-justify text-md mb-4">
              Description : {project.description}
            </p>
            <div className="flex flex-col justify-center items-center mb-4 font-bold">
              Avancement :{" "}
              <progress
                id="file"
                className="mt-2"
                max="100"
                value={project.progress}
              >
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
