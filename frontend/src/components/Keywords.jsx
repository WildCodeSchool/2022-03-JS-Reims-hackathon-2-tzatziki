import PropTypes from "prop-types";

function Keywords({ keywords }) {
  return (
    <ul className="flex flex-wrap p-3 gap-2">
      {keywords.map((tag) => (
        <li
          className="flex w-fit px-2 justify-center items-center rounded-md bg-orange-300"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Keywords;
