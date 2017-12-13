import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './index.js';
import { createStore } from 'redux';

ReactDom.render(<TodoApp {...store.getState()}/>, document.getElementById('root'));