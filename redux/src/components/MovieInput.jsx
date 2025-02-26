import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

function MovieInput() {
  const [inputted, setInputted] = useState("");

  const dispatch = useDispatch();
  function handleAddMovie() {
    if (inputted) {
      dispatch(addMovie(inputted));
      setInputted("");
    }
  }
  return (
    <div>
      <input
        type="text"
        value={inputted}
        onChange={(e) => setInputted(e.target.value)}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}

export default MovieInput;
