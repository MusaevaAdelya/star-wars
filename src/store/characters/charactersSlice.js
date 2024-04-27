import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isError: false,
  isLoading: false,
};

const charactersSlice = createSlice({
  name: "characters",
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

export const { setData, setIsError, setIsLoading } = charactersSlice.actions;

export const getCharacters = (state) => state.characters.data;
export const getIsError=(state)=>state.characters.isError;
export const getIsLoading=(state)=>state.characters.isLoading;

export default charactersSlice.reducer;