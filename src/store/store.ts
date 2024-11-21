import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemons';
import { useDispatch, useSelector } from 'react-redux';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemons: pokemonsReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()