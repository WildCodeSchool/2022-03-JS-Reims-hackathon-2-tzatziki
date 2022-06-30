import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MatchCard({ match, id }) {
  return (
    <Link to={`/match/${id}`}>
      <section className="flex flex-col border border-black rounded-md justify-center items-center m-4">
        <h3 className="p-2">{match.title}</h3>
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
    </Link>
  );
}

MatchCard.propTypes = {
  match: PropTypes.shape({
    title: PropTypes.string.isRequired,
    keyword: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default MatchCard;
