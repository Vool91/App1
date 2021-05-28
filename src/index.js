import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


  ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App key={store} dispathc={store.dispatch.bind(store)}  store={store}/>
    </Provider>
  </BrowserRouter>,document.getElementById('root')
);
reportWebVitals();