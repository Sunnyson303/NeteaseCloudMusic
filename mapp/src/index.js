import React from 'react';
import ReactDOM from 'react-dom';
// import App from './common/layout';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
