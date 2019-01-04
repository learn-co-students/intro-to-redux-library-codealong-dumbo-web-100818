// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import {Provider} from 'react-redux'
import App from './App';
import './index.css';

const store=createStore(shoppingListItemReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
