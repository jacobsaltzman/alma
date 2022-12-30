import React from 'react';
import { Carousel } from 'react-carousel3';

const style = {
  width: 100,
  height: 100,
  justifyContent: 'center',
  borderRadius: '50%',
};

function AwardSlides () {

  return(
  <div
    id='carousel'
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      borderRadius: '50%',
    }}
  >
    <Carousel height={150} width={350} autoPlay={true}>
      <div id='award1' key={1} style={style}>
        
      </div>
      <div id='award2' key={2} style={style}>
        
      </div>
      <div id='award3' key={3} style={style}>
        
      </div>
      <div id='award4' key={4} style={style}>
        
      </div>
      <div id='award5' key={5} style={style}>
        
      </div>
      <div id='award6' key={6} style={style}>
        
      </div>
    </Carousel>
  </div>
  );
}

export default AwardSlides;