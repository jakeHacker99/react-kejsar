import { createSlice } from "@reduxjs/toolkit";

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

export const selectRecommend = (state) => state.vape.recommend;
export const selectNewDisney = (state) => state.vape.newDisney;
export const selectOriginal = (state) => state.vape.original;
export const selectTrending = (state) => state.vape.trending;

export default vapeSlice.reducer;
