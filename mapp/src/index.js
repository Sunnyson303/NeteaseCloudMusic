import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App'
import Store from './models/app'
import registerServiceWorker from './registerServiceWorker';

const store = new Store()
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
