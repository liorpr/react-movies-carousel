
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadData, switchActiveMovie } from '../../actions';

import TopSlider from '../top-slider/top-slider';
import BottomSlider from '../bottom-slider/bottom-slider';

class Carousel extends Component {
  componentDidMount() {
    const dataUrl = '../../data.json';

    this.props.loadData( dataUrl );
  }

  render() {
    const { movies, activeMovieId, lastActiveMovieId, switchActiveMovie } = this.props;
    const carouselProps = {
      movies,
      activeMovieId,
      lastActiveMovieId,
      switchActiveMovie
    };

    return (
      <div>
        <TopSlider {...carouselProps}/>
        <BottomSlider {...carouselProps}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies            : state.carousel.movies,
    activeMovieId     : state.carousel.activeMovieId,
    lastActiveMovieId : state.carousel.lastActiveMovieId
  };
}

export default connect( mapStateToProps, { loadData, switchActiveMovie } )( Carousel );
