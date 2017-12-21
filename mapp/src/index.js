import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App'
import { Provider } from 'mobx-react'
import * as stores from './stores'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}