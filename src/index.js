import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Youtube from './Youtube'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            {/* <div>
                <Link to="/yt">YT</Link>
            </div> */}
            <Route path="/" exact component={App}></Route>
            <Route path="/yt" component={Youtube}></Route>
        </div>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
