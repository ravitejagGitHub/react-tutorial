import React from 'react';
import ReactDOM from 'react-dom'
// import { App } from './App';
import { Clock } from './State/Clock';

import './index.css';
import { Counter } from './State/Counter';



ReactDOM.render(
    <>
        <Clock />
        <Counter />
    </>
    , document.querySelector('#root'))

