
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app/app';
import appStore from 'appStore';

ReactDOM.render(
  <App store={ appStore }/>,
  document.getElementById('app')
);
