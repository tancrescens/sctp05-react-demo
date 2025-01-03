import React from 'react';
import apples from "./assets/apples.jpg";
import "./App.css";

// Create a component that display an image
// and has a border around it
function BorderImageFrame() {
  return (

    /*
      <img src="apple.jpg" style="border:3px solid red;margin:10px;padding:10px"

    */

    // Inline CSS must be provided as an object
    <img src={apples} style={{
      border:"3px solid red",
      margin:"10px",
      padding:"10px"
    }}/>
  )
}


function ImageFrame() {
  return (
    <img src={apples}/>
  )
}

// A component in React
// 1. is a function
// 2. returns JSX
// 3. first alphabet is uppercase
// 4. can recieve parameters in the form of props
// - props are objects and is the first argument/parameter of all component functions
function AlertMessage(props) {


  const message = props.message;
  const color = props.bgColor;
  // 
  // let el = document.querySelector(".alert"); 
  // el.style.backgroudColor = "azure";

  return <div style={{
    padding:"10px",
    margin:"10px",
    backgroundColor: props.bgColor
  }}>{message}</div>
}

function sayGoodbye() {
  return "Bye bye";
}

function sayHappyNewYear() {
  // JSX elements are just JavaScript objects in disguse
  // likewise we can return JSX elements from function
  return <h3>Happy New Year</h3>
}

export default function App() {
  return (
    <>
    <h1>Hello World</h1>
    {sayGoodbye()}
    {sayHappyNewYear()}
    {/* When we want to call a Component function
    we can treat it as if it is a JSX element */}
    <AlertMessage message="Login Failed" bgColor="pink"/>
    <AlertMessage message="Login Successful" bgColor="green"/>
    <ImageFrame/>
    <ImageFrame/>
    <BorderImageFrame/>
    <BorderImageFrame/>
    </>
  )
}