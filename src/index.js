import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.hydrate(<App />, document.getElementById('root'));
serviceWorker.unregister();
