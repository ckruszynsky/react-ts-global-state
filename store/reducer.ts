import { ActionType, GlobalStateInterface, MovieType } from './types';
import { initialState } from './store';

/*
  the reducer function takes the state and an action argument
  designed for accessing and managing the gloabl state of the application
*/
const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        loggedUser: action.payload
      };
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        isUserAuthenticated: action.payload
      };
    case 'SET_PERSISTENCE':
      return {
        ...state,
        persistenceType: action.payload
      };
    case 'LIKE_MOVIE':
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.concat(action.payload)
      };
    case 'UNLIKE_MOVIE':
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter((movie: MovieType) => {
          return movie.imdbID != action.payload;
        })
      };
    case 'PURGE_STATE':
      return initialState;

    default:
      return state;
  }
};

export default Reducer;
