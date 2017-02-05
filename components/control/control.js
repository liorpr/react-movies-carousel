
import React from 'react';

import './control.scss';

const Control = ( { title, url } ) => (
  <li className="control">
    <a
      href={ url }
      target="_blank">
      <div>
        <span className="title"> { title } </span>
        <span className="arrow">
          <i className="material-icons md-18">
              keyboard_arrow_right
          </i>
          <i className="material-icons md-18">
              keyboard_arrow_right
          </i>
        </span>
      </div>
    </a>
  </li>
);

export default Control;
