import { createSlice } from "@reduxjs/toolkit";

import {
  getData4Accesories,
  getData4New,
  getData4Preorders,
} from "../../backend";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const vapeSlice = createSlice({
  name: "vape",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = vapeSlice.actions;

export const selectRecommend = () => getData4New();
export const selectNewDisney = () => getData4Accesories();
export const selectOriginal = () => getData4Preorders();

export default vapeSlice.reducer;
