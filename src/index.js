import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import 'moment/locale/en-ca'
import enUS from 'antd/lib/locale-provider/en_US'
import { LocaleProvider } from 'antd'
import * as serviceWorker from './serviceWorker';

import './index.less'
import 'nprogress/nprogress.css'
import 'ant-design-pro/dist/ant-design-pro.css'

import App from './App';

//创建Redux的store对象
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <HashRouter>
        <App/>
      </HashRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
