import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isError: false,
  isLoading: false,
};

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsError: (state, action) => {
      state.isError  = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading  = action.payload;
    },
  },
});

export const { setData, setIsError, setIsLoading } = planetsSlice.actions;

export const getPlanets = (state) => state.planets.data;
export const getIsError=(state)=>state.planets.isError;
export const getIsLoading=(state)=>state.planets.isLoading;

export default planetsSlice.reducer;
