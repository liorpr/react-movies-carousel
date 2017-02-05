
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Control from '../control/control';

import { getReleaseDateString } from '../../utils';

import './movie-img-container.scss';

class MovieImgContainer extends Component {
  constructor( props ) {
    super( props );

    this.controlsConfig = [
      { name : 'tickets', displayStr : 'Get tickets now',     urlProp : 'tickets' },
      { name : 'trailer', displayStr : 'Watch the trailer',   urlProp : 'trailer' },
      { name : 'site',    displayStr : 'Visit official site', urlProp : 'site' }
    ];
  }

  render() {
    const {
      isActive,
      isLastActive,
      slideClass,
      fullName,
      releaseDate,
      urls
    } = this.props;

    return (
      <li className={ classNames(
            `movie-img-container ${ slideClass }`,
            { 'active' : isActive, 'last-active' : isLastActive }
          ) }>
        <div>
          <img
            src={ urls.img }/>
        </div>

        <div className="details">
          <h1> { fullName } </h1>
          <div className="seperator"></div>
          <h2> { getReleaseDateString( releaseDate, true ) } </h2>
        </div>


        <div className="controls-container">
          <ul className="controls">
            {
              this.controlsConfig.map( config => {
              return urls[config.name] ?
              <Control
                key={ config.name }
                title={ config.displayStr }
                url={ urls[config.name] }/> :
                null
              } )
            }
          </ul>
        </div>

      </li>
    )
  }
}


MovieImgContainer.propTypes = {
  isActive              : PropTypes.bool,
  isLastActive          : PropTypes.bool,
  slideClass            : PropTypes.string,
  fullName              : PropTypes.string,
  releaseDate           : PropTypes.string,
  urls                  : PropTypes.object
};

export default MovieImgContainer;
