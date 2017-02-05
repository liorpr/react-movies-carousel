
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MovieImgContainer from '../movie-img-container/movie-img-container';

import './top-slider.scss';

const ArrowToggleContainer = ( { onArrowClick, direction, materialIcon } ) => {
  return <div className={ `arrow-toggle-container ${ direction }` }>
    <i
      onClick={ onArrowClick }
      className="material-icons">
        { materialIcon }
    </i>
  </div>
};

const TriangleFooter = () => {
  return <div className="triangle-footer">
    <div className="block left-block"></div>
    <div className="triangle triangle-bottom-left"></div>
    <div className="triangle triangle-bottom-right"></div>
    <div className="block right-block"></div>
  </div>
};

class TopSlider extends Component {
  findMovieIdByOrder( order ) {
    const { movies } = this.props;
    const moviesIds = Object.keys( movies );

    return moviesIds.filter( id => movies[id].order === order )[0];
  }

  handleArrowClick( movieId ) {
    this.props.switchActiveMovie( movieId );
  }

  getSlideClassObj( movies, activeMovieId, lastActiveMovieId ) {
    const activeMovie = movies[ activeMovieId ];
    const lastActiveMovie = movies[ lastActiveMovieId ];
    if( !activeMovie || !lastActiveMovie ) {
      return {};
    }

    const offset = lastActiveMovie.order - activeMovie.order;
    if( offset > 0 ) {
      return {
        [activeMovieId]       : "slide slide-in-left",
        [lastActiveMovieId]   : "slide slide-out-right"
      };
    }

    return {
      [activeMovieId]     : "slide slide-in-right",
      [lastActiveMovieId] : "slide slide-out-left"
    };
  }

  getNextPrevMoviesIds( movies, activeMovieId ) {
    const activeMovie = movies[ activeMovieId ];
    if( !activeMovie ) {
      return {};
    }

    return {
      nextId  : this.findMovieIdByOrder( activeMovie.order + 1 ),
      prevId  : this.findMovieIdByOrder( activeMovie.order - 1 )
    };
  }

  render() {
    const { movies, activeMovieId, lastActiveMovieId } = this.props;
    const slideClassObj = this.getSlideClassObj( movies, activeMovieId, lastActiveMovieId );
    const nextPrevIds = this.getNextPrevMoviesIds( movies, activeMovieId );

    return (
      <div className="top-slider-container">

        {
          nextPrevIds.nextId &&
          <ArrowToggleContainer
            onArrowClick={ () => this.handleArrowClick( nextPrevIds.nextId ) }
            direction={ 'next' }
            materialIcon={ 'keyboard_arrow_right' }/>
         }

         {
           nextPrevIds.prevId &&
           <ArrowToggleContainer
             onArrowClick={ () => this.handleArrowClick( nextPrevIds.prevId ) }
             direction={ 'previous' }
             materialIcon={ 'keyboard_arrow_left' }/>
          }

        <ul className="movies">
          { Object.keys( movies ).map( movieId => {
            const movie = movies[movieId];

            return <MovieImgContainer
              key={ movieId }
              isActive={ movieId === activeMovieId }
              isLastActive={ movieId === lastActiveMovieId }
              slideClass={ slideClassObj[movieId] || '' }
              fullName={ movie.full_name }
              releaseDate={ movie.release_date }
              urls={ movie.urls }/>
          } ) }
        </ul>

        <TriangleFooter/>

      </div>
    );
  }
}


TopSlider.propTypes = {
  movies            : PropTypes.object,
  activeMovieId     : PropTypes.string,
  lastActiveMovieId : PropTypes.string,
  switchActiveMovie : PropTypes.func
}

export default TopSlider;
