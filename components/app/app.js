
import React from 'react';
import { Provider } from 'react-redux';

import Carousel from '../carousel/carousel';

import './app.scss';

export default class App extends React.Component {
    render() {
        let { store } = this.props;

        return (
          <div className="app">
            <Provider store={ store }>

              <div className="app-container">
                <Carousel/>
              </div>

            </Provider>
          </div>

        );
    }
}
