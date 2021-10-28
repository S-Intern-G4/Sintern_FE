import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';
import App from './components/App';

import 'antd/dist/antd.less';
import './locales';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
