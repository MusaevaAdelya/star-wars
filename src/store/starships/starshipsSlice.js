import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isError: false,
  isLoading: false,
};

const starshipsSlice = createSlice({
    name: "starships",
    initialState,
    reducers: {
      setData: (state, action) => {
        state.data = action.payload;
      },
      setIsError: (state, action) => {
        state.isError = action.payload;
      },
      setIsLoading: (state, action) => {
        state.isLoading = action.payload;
      },
    },
  });

export const { setData, setIsError, setIsLoading } = starshipsSlice.actions;

export const getStarships = (state) => state.starships.data;
export const getIsError=(state)=>state.starships.isError;
export const getIsLoading=(state)=>state.starships.isLoading;

export default starshipsSlice.reducer;
