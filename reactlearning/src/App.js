import React from 'react';
import './App.css';
import { Header, Footer } from "./Mycomponent.js";
import MainContent  from './Mycomponent.js';


function App() {
  return (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
  );
}

export default App;


function Greet(props) {
  return <h2> Hi, {props.username}!</h2>;
}

<Greet username="Joly" />