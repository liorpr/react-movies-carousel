
import { LOAD_DATA_SUCCESS, SWITCH_ACTIVE_MOVIE } from '../constants';

function loadDataSuccess( data ) {
  return {
    type    : LOAD_DATA_SUCCESS,
    movies  : data
  }
}

export function loadData( url, params ) {
  return dispatch => {
    return fetch( url, params )
      .then( res => res.json() )
      .then( data => dispatch( loadDataSuccess(data) ) )
      .catch( err => console.log( `snap! could not fetch. ${ err }` ) )
  };
}

export function switchActiveMovie( movieId ) {
  return {
    type : SWITCH_ACTIVE_MOVIE,
    movieId
  }
}
