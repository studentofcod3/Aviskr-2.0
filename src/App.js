import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/Contact";
import DroneWarsArticle from "./components/pages/drone-wars/DroneWarsArticle";
import DroneWarsData from "./components/pages/drone-wars/DroneWarsData";

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
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/dronewars/article' component={DroneWarsArticle} />
          <Route exact path='/dronewars/data' component={DroneWarsData} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
