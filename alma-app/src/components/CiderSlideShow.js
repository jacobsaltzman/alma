import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CiderSlideShow({daveAward, ciderGlass, appleBin, award, award2, award3, bottles, bottles2}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
  <div id="slider-component">
    <Slider {...settings}>
        <div className="cider-slide">
          <img alt="cider bottles" src={bottles}></img>
        </div>
        <div className="cider-slide">
          <img alt="more cider bottles" src={bottles2}></img>
        </div>
        <div className="cider-slide">
          <img alt="rose cider award" src={award}></img>
        </div>
        <div className="cider-slide">
        <img alt="dave award" src={daveAward}></img>
        </div>
        <div className="cider-slide">
        <img alt="wood aged award" src={award2}></img>
        </div>

        <div className="cider-slide">
        <img alt="cider glass" src={ciderGlass}></img>
        </div>

        <div className="cider-slide">
        <img alt="hopped award" src={award3}></img>
        </div>
        
        <div className="cider-slide">
          <img alt="apple bin" src={appleBin}></img>
        </div>
    </Slider>
    </div>
  );
}