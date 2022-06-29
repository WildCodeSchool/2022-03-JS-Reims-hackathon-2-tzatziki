import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MatchCard({ match, id }) {
  return (
    <Link to={`/match/${id}`}>
      <p className="flex flex-col w-[90vw] min-h-[10vh] h-fit border border-black rounded-md justify-center items-center m-4">
        <h3 className="p-2">{match.name}</h3>
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
      </p>
    </Link>
  );
}

MatchCard.propTypes = {
  match: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default MatchCard;
