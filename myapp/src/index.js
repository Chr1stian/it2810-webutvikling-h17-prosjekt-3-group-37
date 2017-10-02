import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import DesignContainer from './containers/design'

const App = () => (
  <DesignContainer />
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
