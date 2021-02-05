import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";

function Ball(props) {
  var indx = props.index;
  var hue = indx * 56;
  var speed = props.speed;
  if(speed < 50)
  speed = 10;
  if(speed > 700)
  speed = 700;
  var delay = props.delay;

  const { ref} = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-120px)" },
    ],
    timing: {
      delay: delay*100, 
      duration: speed, 
      iterations: Infinity, 
      direction: "alternate", 
      easing: "cubic-bezier(0,0.5,0.5,1)",
    }
  });

  var ballStyle = {
    filter: "saturate(4) brightness(150%) hue-rotate(" + hue + "deg)"
  };

  return <div className="ball" style={ballStyle} ref={ref}></div>;
}

export default Ball;
