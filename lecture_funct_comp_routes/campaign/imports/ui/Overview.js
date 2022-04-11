import React from 'react';
import { useState } from "react";

export default class Overview extends React.Component{ 
  render(){
    return (
    <>
        <h1>Overview (from W3C)</h1>
        <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
        <p>Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
        <h2>Class Component</h2>
        <p>A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
        <p>The component also requires a render() method, this method returns HTML.</p>
        <code>
            class Car extends React.Component &#123;<br />
                &nbsp;&nbsp;render() &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h2&#62;Hi, I am a Car!&#60;/h2&#62;;<br />
                &nbsp;&nbsp;&#125;<br />
            &#125;
        </code>
        <h2>Function Component</h2>
        <p>A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.</p>
        <code>
            function Car()  &#123;<br />
                &nbsp;&nbsp;return &#60;h2&#62;Hi, I am a Car!&#60;/h2&#62;<br />
            &#125;
        </code>
        
        <h2>React Hooks</h2>
        <p>Hooks allow function components to have access to state and other React features. </p>
        <h3>React useState Hook</h3>
        <p>The React useState Hook allows us to track state in a function component.</p>
        <p>State generally refers to data or properties that need to be tracking in an application.</p>
        <h3>Initialize useState</h3>
        <p>We initialize our state by calling useState in our function component.</p>
        <p>useState accepts an initial state and returns two values:</p>
        <ul>
            <li>The current state.</li>
            <li>A function that updates the state which can be included anywhere in the component.</li>
        </ul>
        <code>
            function FavoriteCar()  &#123;<br />
                &nbsp;&nbsp;const [color, setColor] = useState("Nova");<br />
            &#125;
        </code>
    </>
    );
  }
};