import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesArray: [
    {
      id: 1,
      name: "Interstellar",
    },
    {
      id: 2,
      name: "Harry Potter",
    },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.moviesArray[state.moviesArray.length - 1] + 1,
        name: action.payload,
      };
      state.moviesArray.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.moviesArray = state.moviesArray.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
