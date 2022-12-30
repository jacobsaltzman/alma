import React from "react";
import logo from '/home/ickus/Development/code/alma/alma-app/src/images/logo_large.png'


console.log(logo)

function Home(){
  return (
    <div>
      <div id="home-top-div"> 
      <p></p>
      </div>
    <section id="home">
      <div id="main-logo-div">well, hello</div>
      <img id="main-logo-image" alt="Alma Logo" src={logo} />
    </section>
      <div id="home-bottom-div">
      <h6>Insert tagline, catch-phrase, or moto...</h6>
      </div>
    </div>
  )
}

export default Home;