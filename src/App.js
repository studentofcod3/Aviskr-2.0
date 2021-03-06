import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/home/Home";
import Contact3 from "./components/pages/Contact3";
import DroneWarsArticle from "./components/pages/drone-wars/DroneWarsArticle";
import DroneWarsData from "./components/pages/drone-wars/DroneWarsData";
import ChinaArticle from "./components/pages/china/ChinaArticle";

import "./App.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact3} />
          <Route exact path='/dronewars/article' component={DroneWarsArticle} />
          <Route exact path='/dronewars/data' component={DroneWarsData} />
          <Route exact path='/china/article' component={ChinaArticle} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
