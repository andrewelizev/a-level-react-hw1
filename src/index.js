import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Button(name) {
  return <button>{name}</button>
}

function Header() {
  return (
    <div className="header">
      <ul className="header_menu">
        <li><a href="#" className="link">Mail</a></li>
        <li><a href="#" className="link">Images</a></li>
        <li><a href="#"><img src="menu-dots.png" className="link_img" /></a></li>
        <li><a href="#"><img src="user.png" className="link_img" /></a></li>
      </ul>
    </div>
  )
}

function Main() {
  return (
    <div className="main">
      <img src="google.png" />
      <input type="text" />
      <div class="wrapper_buttons">
        {Button('Search')}
        {Button('I am lucky!')}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <ul className="footer_menu">
        <li><a href="#" className="link">About</a></li>
        <li><a href="#" className="link">Advertisement</a></li>
        <li><a href="#" className="link">For businness</a></li>
        <li><a href="#" className="link">How work</a></li>
      </ul>
      <ul className="footer_menu">
        <li><a href="#" className="link">Mail</a></li>
        <li><a href="#" className="link">Images</a></li>
        <li><a href="#" className="link">Settings</a></li>
      </ul>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <div class="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
