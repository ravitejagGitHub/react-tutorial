import React from 'react';
import ReactDOM from 'react-dom'
// import { App } from './App';
import { Clock } from './State/Clock';

import './index.css';
import { Counter } from './State/Counter';

import { Toggle } from './HandlingEvents/Toggle';
import { LoginControl } from './ConditionalRendering/LoginControl';
import { Page } from './ConditionalRendering/PreventingRendering/Page';


ReactDOM.render(
    <>
        <Clock />
        <Counter />
        <Toggle />
        <LoginControl />
        <Page />
    </>
    , document.querySelector('#root'))

