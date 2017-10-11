import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/app.less'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

if(module.hot) {
  module.hot.accept('./App', ()=> {
    ReactDOM.render(<App />, document.getElementById('root'));
  })
}