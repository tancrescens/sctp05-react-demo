import React from 'react';
import apples from "./assets/apples.jpg"

function ImageFrame() {
  return (
    <img src={apples}/>
  )
}

// A component in React
// 1. is a function
// 2. returns JSX
// 3. first alphabet is uppercase
function AlertMessage() {
  return <div>Awas! Awas! Danger Ahead</div>
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
    <AlertMessage/>
    <ImageFrame/>
    <ImageFrame/>
    </>
  )
}