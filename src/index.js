import { arrowFunc } from './js/es6.js';
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './js/HelloReact';

ReactDom.render(
  <Hello es={arrowFunc()} />, document.getElementById('app')
)