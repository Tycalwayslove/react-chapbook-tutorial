import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import CommentApp from './components/commentApp/CommentApp';
// import Index from './view/lesson2/style'
import Index from './view/lesson3/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
