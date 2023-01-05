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
      <h2>Graft&nbsp;To&nbsp;Glass, <br/> We&nbsp;Grow&nbsp;Cider</h2>
      </div>
    </div>
  )
}

export default Home;