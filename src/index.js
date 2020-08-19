import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FlexExample from './FlexExample';


// ReactDOM.render(
// 
// <React.StrictMode>
{/* <div className="title">Mammalath</div> */ }
{/* <App /> */ }
{/* </React.StrictMode>, */ }
// document.getElementById('contents')
// );

ReactDOM.render(
  <React.StrictMode>
    <div className="title">Mammalath</div>
    {/* <FlexExample /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('contents')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
