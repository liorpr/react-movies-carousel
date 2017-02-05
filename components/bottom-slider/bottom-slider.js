
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../movie-card/movie-card';

import './bottom-slider.scss';

class BottomSlider extends Component {
  constructor( props ) {
    super( props );

    this.cardImgTotalWidth = 280;
  }

  getFlatMovies( moviesObj ) {
    const moviesIds = Object.keys( moviesObj );

    return moviesIds.map( id => {
      return Object.assign( {}, moviesObj[id], { id } );
    } );
  }

  renderMovieCard( movie ) {
    const { activeMovieId, switchActiveMovie } = this.props;
    const handleClick = id => id !== activeMovieId && switchActiveMovie(id);

    return <MovieCard
      key={ movie.id }
      movie={ movie }
      handleClick={ handleClick }/>
  }

  getSliderOffset() {
    const { movies, activeMovieId } = this.props;
    const activeMovie = movies[ activeMovieId ];

    if( !activeMovie ) {
      return 0;
    }

    return ( this.cardImgTotalWidth * activeMovie.order ) - ( 0.5 * this.cardImgTotalWidth );
  }

  render() {
    const { movies } = this.props;
    const flattenedMovies = this.getFlatMovies( movies );
    const visibleMovies = flattenedMovies.sort( (m1, m2) => m1.order - m2.order );

    return (
      <div className="bottom-slider-container">

        <ul style={ { transform : `translateX(calc(50% - ${ this.getSliderOffset() }px))` } }>
          { visibleMovies.map( this.renderMovieCard.bind( this ) ) }
        </ul>

      </div>
    );
  }
}

BottomSlider.propTypes = {
  movies            : PropTypes.object,
  activeMovieId     : PropTypes.string,
  lastActiveMovieId : PropTypes.string,
  switchActiveMovie : PropTypes.func
}

export default BottomSlider;
