import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar3 from "./components/Navbar/Navbar3";
import About from "./components/pages/About";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/Contact";
import "./App.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar3 />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/stories' component={Stories} /> */}
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
