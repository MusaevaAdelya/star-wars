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
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData, setIsError, setIsLoading } = planetsSlice.actions;

export default planetsSlice.reducer;
