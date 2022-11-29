import { configureStore } from '@reduxjs/toolkit';
import { todos } from './apis/todosApi';
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";
export const store = configureStore({
     reducer: {
          pokemons: pokemonSlice.reducer,
          [todos.reducerPath]: todos.reducer,

     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todos.middleware)

})