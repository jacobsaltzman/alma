import React from "react";





function Home({logo}){
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
      <h2>GRAFT&nbsp;TO&nbsp;GLASS, <br/> WE&nbsp;GROW&nbsp;CIDER</h2>
      </div>
    </div>
  )
}

export default Home;