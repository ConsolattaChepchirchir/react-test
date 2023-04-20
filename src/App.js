import './App.css';
import React from 'react';
import Article from './Article';
import image from './yir3.jpg'

function App(props) {
  return (
    <div>
      <h1>Hello, welcome to my page!</h1>
      <img src={image} className='image'/>
      <p>In this project we will create a  a project to show our understanding on components,state and props</p>
      <Article component ="Function"/>
    </div>
  );
}

export default App;