import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { movieID } = useParams();
  const { director } = useOutletContext();

  if (!director) {
    return <h2>Director not found.</h2>;
  }

  const movie = director.movies.find(
    (movie) => String(movie.id) === movieID
  );

  if (!movie) {
    return <h2>Movie not found.</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}

export default MovieCard;