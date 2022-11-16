import React from "react";
import logo from '/home/ickus/Development/code/alma/alma-app/src/images/logo_large.png'


console.log(logo)

function Home(){
  return (
    <section id="home">
      <div id="main-logo-div">well, hello</div>
      <img id="main-logo-image" alt="Alma Logo" src={logo} />
    </section>
  )
}

export default Home;