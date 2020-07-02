// eslint-disable-next-line
import React from 'react';
import logo from './logo.svg'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import PrivacyPoliys from "./componets/PrivacyPoliys";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/about" exact  component={About}/>
        <Route path="/privacypolicy" exact  component={PrivacyPoliys}/>
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
