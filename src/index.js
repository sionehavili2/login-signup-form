import React from 'react';
import axios from 'axios'; //Add this
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //Add this
import Login from './components/Login';
import NavBar from "./components/navBar";
import Signup from "./components/Signup";

//Create App.js as inner function
function App(){
  axios.defaults.withCredentials = true;

  return (
        <Route path = "/login" element = {<Login/>}/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
       <Route exact path="/" element={<NavBar/>}>
        <Route path="Signup" element={<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
       </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
