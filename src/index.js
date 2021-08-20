import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Redux/createStore/MovieStore'
import {Provider} from 'react-redux'
const store=Store()
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
    
,
  document.getElementById('root')
);