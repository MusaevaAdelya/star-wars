import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters/charactersSlice";
import planetsSlice from "./planets/planetsSlice";
import starshipsSlice from "./starships/starshipsSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        planets: planetsSlice,
        starships: starshipsSlice
    }
})