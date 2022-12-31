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
      <h6>Insert tagline, catch-phrase, or moto...</h6>
      </div>
    </div>
  )
}

export default Home;