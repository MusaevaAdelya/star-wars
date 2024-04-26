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
        state.data = action.payload;
      },
      setIsLoading: (state, action) => {
        state.data = action.payload;
      },
    },
  });

export const { setData, setIsError, setIsLoading } = starshipsSlice.actions;

export default starshipsSlice.reducer;
