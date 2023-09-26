import React from "react"
import './scss/app.scss'
import Header from './components/Header/Header'
import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom';


function App() {

  return (
    <div class="wrapper">
 <Header/>
    <div class="content">
      <div class="container">
     <Routes>
      <Route path="/" element ={<Home/>} /> 
      </Routes>  
      </div>
    </div>
  </div>
  );
}
export default App;
