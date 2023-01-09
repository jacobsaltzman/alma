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
import bottles from './images/cider_facebook2.jpg';
import appleBin from './images/apple_bin2.jpg';
import ciderGlass from './images/fb_alma5.jpg';
import bottles2 from './images/cider_facebook.jpg';
import daveAward from './images/dave_award_fb.jpg';
import almaMap from './images/AlmaMapLogo.jpg';
import family from './images/dave3.jpg';
import family2 from './images/daves_kid.jpg';
import family3 from "./images/daves_kid2.jpg";
import family4 from './images/apple_bag.jpg';
import family5 from './images/apple_bag2.jpg';
import family6 from './images/apple.jpg';
import family7 from './images/apple2.jpg';
import family8 from './images/cider_facebook3.jpg';
import family9 from './images/cider4.jpg';
import family10 from './images/cider.jpg';
import family11 from './images/dave2.jpg';
import dave from './images/dave.jpg';





const images = [
  {
     src: family,
     width: 100,
     height: 100,
     caption: "Dave and Heather and their children",
  },
  {
     src: family2,
     width: 320,
     height: 212,
    
  },
  {
     src: family3,
     width: 220,
     height: 300,
  },
  {
    src: family4,
    width: 220,
    height: 212,
 },

{
  src: family6,
  width: 320,
  height: 212,
},
{
  src: family11,
  width: 320,
  height: 212,
},
{
  src: family7,
  width: 320,
  height: 212,
},
{
  src: family9,
  width: 200,
  height: 300,
},
{
  src: family8,
  width: 320,
  height: 200,
},

{
  src: family10,
  width: 200,
  height: 212,
},
{
  src: family5,
  width: 200,
  height: 212,
},

];


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
          <About almaMap={almaMap} images={images} dave={dave}/>
        </Route>
        <Route path="/services">
          <Services bsLogo={bsLogo} />
        </Route>
        <Route path="/ciders">
          <Ciders daveAward={daveAward} bottles2={bottles2} ciderGlass={ciderGlass} appleBin={appleBin} award={award} award2={award2} award3={award3} bottles={bottles}/>
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
