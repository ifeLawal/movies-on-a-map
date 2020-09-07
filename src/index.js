import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const MOUNT = document.getElementById('root');

const renderApp = Comp => ReactDOM.render(Comp, MOUNT);

if(module.hot) {
  module.hot.accept('./routes', () => {
    // accept the hot change request
    const NextRoute = require('./components/LocationCardList').default;
    renderApp(<NextRoute />);
  });
}

renderApp(<Routes />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
