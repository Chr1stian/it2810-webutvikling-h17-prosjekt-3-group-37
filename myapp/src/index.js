import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './containers/Router'

const App = () => (
  <Router />
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
