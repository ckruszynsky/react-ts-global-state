//https://javascript.plainenglish.io/global-state-using-only-react-hooks-with-the-context-api-typescript-edition-ada822fc282c

import { Dispatch } from 'react';

export interface GlobalStateInterface {
  isUserAuthenticated: boolean;
  loggedUser: string;
  persistenceType: string;
  favoriteMovies: MovieType[];
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};

export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};
