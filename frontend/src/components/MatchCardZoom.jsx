import Proptypes from "prop-types";
import { useMatchesContext } from "../contexts/MatchesContext";
import logo from "@assets/logo-slack.png";

const titleClass = "tracking-wide text-2xl m-2";

function MatchCardZoom({ id }) {
  const { matches } = useMatchesContext();
  const match = matches[id];
  return match ? (
    <main className="flex flex-col m-4">
      <h3 className={titleClass}>{match.title}</h3>
      <section>
        <h4 className={titleClass}>Description 🔎</h4>
        <p>{match.description}</p>
      </section>
      <section>
        <h4 className={titleClass}>Filliale 🏢</h4>
        <p>{match.subsidiary}</p>
      </section>
      <section>
        <h4 className={titleClass}>Staff 👨‍💼</h4>
        <ul className="flex gap-1">
          {match.staff.map((staffMember) => (
            <li key={staffMember}>{staffMember}</li>
          ))}
        </ul>
      </section>
      <section>
        <div className="flex justify-start items-center">
          <h4 className={titleClass}>Slack</h4>
          <img className="w-7 mr-1" src={logo} alt="logo-slack" />
        </div>
        <a href={match.slackURL}>{match.slackURL}</a>
      </section>
      <section>
        <h4 className={titleClass}>Tags 🏷️</h4>
        <ul className="flex flex-wrap gap-2 p-3">
          {match.keyword.map((tag) => (
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
  ) : null;
}

MatchCardZoom.propTypes = {
  id: Proptypes.number,
};

MatchCardZoom.defaultProps = {
  id: null,
};

export default MatchCardZoom;
