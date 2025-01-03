import React from 'react';  // const React = require('react')

// import the image from the file
import japaneseFood from './assets/japanese-food.jpg';

import "./App.css";

// When using Vite, the starting point of all React application
// is App.jsx
export default function App() {
  // The App function must return JSX
  // JSX looks like HTML
  return (
    // A react fragment only exists inside React
    // and it serves to group JSX elements under the same parent
    // It will be not there in the DOM of the final webpage
    <>
      <h1 className="title">Sakaura Japanese Resturant</h1>
      <h2>Food so authentic you don't have to fly to Japan</h2>
      <h3>Our specialities</h3>

      <h1>Your lucky number of the day {Math.floor(Math.random() * 10 + 1)}</h1>

      {/* Create an image element and set its src */}
      <img src={japaneseFood}/>
      <ul>
        <li>Ramen</li>
        <li>Sushi</li>
        <li>Desserts
          <img src="waffles.jpg"/>
        </li>
      </ul>
    </>
  )
}

// If using syntax like in Express: module.exports = App
