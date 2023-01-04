import React from 'react';
import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Ciders from './components/Ciders';
import Retailers from './components/Retailers';
import banner from './images/banner.png';
import award from './images/award.jpg';
import award2 from './images/fb_alma.jpg';
import award3 from './images/award_facebook.jpg';
import logo from './images/logo_large.png'
import bsLogo from './images/BSlogo.png'
import asso from "./images/affiliation.png";
import asso2 from "./images/affiliation2.png";
import asso3 from "./images/affiliation3.png";
import asso4 from "./images/affiliation4.png";

function App() {
  return (
    <div className="App">
      <Header banner={banner}/>
      <Switch>
        <Route exact path='/'>
          <Home logo={logo}/>
        </Route>
        <Route path='/alma'>
          <Home logo={logo}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services bsLogo={bsLogo} />
        </Route>
        <Route path="/ciders">
          <Ciders award={award} award2={award2} award3={award3}/>
        </Route>
        <Route path='/retailers'>
          <Retailers />
        </Route>
      </Switch>
      <Footer asso={asso} asso2={asso2} asso3={asso3} asso4={asso4}/>
    </div>
  );
}

export default App;
