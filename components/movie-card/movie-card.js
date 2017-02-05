
import React, { Component, PropTypes } from 'react';

import { getReleaseDateString } from '../../utils';

import './movie-card.scss';

const MovieCard = ( { movie, handleClick } ) => {
  return (
    <li
      className="movie-card"
      onClick={ () => handleClick( movie.id ) }>
      <div>

        <img src={ movie.urls.img }/>

        <div className="details">
          <span> { getReleaseDateString( movie.release_date ) } </span>
          <h4> { movie.full_name } </h4>
        </div>

      </div>
    </li>
  )
}

MovieCard.propTypes = {
  movie         : PropTypes.object,
  handleClick   : PropTypes.func
};

export default MovieCard;
