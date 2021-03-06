import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './styles/style.scss';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextComponent = require('./components/App').default; // eslint-disable-line global-require
    render(NextComponent);
  });
}
