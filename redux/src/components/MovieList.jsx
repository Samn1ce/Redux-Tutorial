import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

function MovieList() {
  const movies = useSelector((state) => state.movies.moviesArray);

  const dispatch = useDispatch();
  function handleRemoveMovie(id) {
    dispatch(removeMovie(id));
  }

  return (
    <div>
      <h1>Movie !!! List</h1>
      {movies.map((m) => (
        <div key={m.id} style={{ display: "flex", gap: "14px" }}>
          <p>{m.name}</p>
          <button onClick={() => handleRemoveMovie(m.id)}>Delete Movie</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
