
import { LOAD_DATA_SUCCESS, SWITCH_ACTIVE_MOVIE } from '../constants';

const initialState = {
  movies            : {},
  activeMovieId     : "-1",
  lastActiveMovieId : "-1"
};

export default function( state = initialState, action ) {
  switch( action.type ) {
    case LOAD_DATA_SUCCESS :
      const moviesIds = Object.keys( action.movies );
      const activeMovieId = moviesIds.length > 0 ?
        moviesIds[ Math.floor(moviesIds.length / 2) ] :
        "-1";

      return Object.assign( {},
      state,
      {
        movies : action.movies,
        activeMovieId
      }
    );

   case SWITCH_ACTIVE_MOVIE :
      return Object.assign( {},
      state,
      {
        activeMovieId     : action.movieId,
        lastActiveMovieId : state.activeMovieId
      }
    );

    default :
      return state;
  }
}
