import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
  const { directors } = useOutletContext();

  const displayDirectors = directors.map((director) => (
    <li key={director.id}>
      <Link to={`/directors/${director.id}`}>
        {director.name}
      </Link>
    </li>
  ));

  return <ul>{displayDirectors}</ul>;
};

export default DirectorList;