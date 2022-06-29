import Proptypes from "prop-types";
import likedList from "../dummies/likedList";

const titleClass = "tracking-wide text-2xl m-2";

function MatchCardZoom({ id }) {
  const match = likedList[id - 1];
  console.warn(id);
  return (
    <main className="flex flex-col m-4">
      <h3 className={titleClass}>{match.name}</h3>
      <section>
        <h4 className={titleClass}>Description</h4>
        <p>{match.readme}</p>
      </section>
      <section>
        <h4 className={titleClass}>Filliale</h4>
        <p>{match.branch}</p>
      </section>
      <section>
        <h4 className={titleClass}>Staff</h4>
        <ul className="flex gap-1">
          {match.staff.map((staffMember) => (
            <li key={staffMember}>{staffMember}</li>
          ))}
        </ul>
      </section>
      <section>
        <h4 className={titleClass}>Slack</h4>
        <a href={match.slackURL}>{match.slackURL}</a>
      </section>
      <section>
        <h4 className={titleClass}>Tags</h4>
        <ul className="flex flex-wrap gap-2 p-3">
          {match.tags.map((tag) => (
            <li
              key={tag}
              className="flex w-fit px-2 justify-center items-center rounded-md bg-orange-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

MatchCardZoom.propTypes = {
  id: Proptypes.number.isRequired,
};

export default MatchCardZoom;
