import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import mainReducer from './reducers/mainReducer';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(mainReducer)

root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>
);
