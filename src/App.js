import React from 'react';
import Navbar from './MyComponents/Navbar';
import Footer from './MyComponents/Footer';
import TimelineAll from "./MyComponents/images/TimelineAll.png";
import Timeline from "./MyComponents/images/TIMELINE.png";
import Event from "./MyComponents/images/Events.png";
import bg from "./MyComponents/images/Background.png";

const Events = () => {
  let MAIN = {
    backgroundImage: `url(${bg})` ,
    backgroundRepeat: "no-repeat" ,
    backgroundPosition: "center" ,
    backgroundSize: "cover" ,
    width : "100vw" ,
    height : "330vh" ,
  }
  let event = {
    marginTop : "5vh" ,
    width : "80vw" ,
    marginLeft : "10vw"
  }
  let timeImg = {
    marginLeft : "35vw" ,
    marginTop : "5vh" ,
    marginBottom : "10vh" ,
    width : "30vw"
  }
  let timeAllImg = {
    width : "100vw" ,
    zIndex : "-1" ,
    marginBottom : "15vh"
  }
  return (
    <>
    <div style={MAIN}>
      <Navbar/>
      <img src={Event} alt="" style={event}/>
      <img src={Timeline} alt="" style={timeImg}/>
      <img src={TimelineAll} alt="" style={timeAllImg} />
      <Footer/>
    </div>
    </>
  )
}

export default Events;
