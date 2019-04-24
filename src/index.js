import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import Add from './Add';
import Multiply from './Multiply';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
<Route exact path ="/"  component= {AuthorQuiz}/>
<Route exact path ="/add"  component= {Add}/>
<Route exact path ="/multiply"  component= {Multiply}/>
</BrowserRouter>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
