import React from 'react';
import ReactDOM from 'react-dom';
// import App from './common/layout';
import 'antd/dist/antd.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
