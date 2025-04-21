import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML-Like or XML-Like syntax
// JSX (Transpiled it before it reaches the JS Engine) => PARCEL (Babel is handling this)
//JSX => React.createElement => ReactElement-JS Object => HTMLElement()
const headingJsx = <h1>Namaste React using JSX 🚀</h1>
const elem = <span>Hello Ankit</span>
// React Element => Is an object
const heading = React.createElement('div',{id:"heading", className:"head"}, "Namaste React 🚀");
const container = React.createElement('div',{id:'conatiner'}, heading, headingJsx);
const parent = ReactDOM.createRoot(document.getElementById('root'));
// when we render this react object to DOM then it will become html
const str = "Welcome Ankit Saini";


// React Components
/**
 * 1. Class Based Components - Old 
 * 2. Functional Based Components - New
 */

// Functional Component
/**
 * A function that returns a JSX Code is known as functional component.
 * A JSX is  FUNCTIONAL Component
 */

// This render is known as Component Composition. Composing two components in one another.
const HeadingJsx = () => {
    return (
        <>
        <h1>Namaste React using JSX 🚀</h1>
        <h1>{heading}</h1>
        <i>{str}</i>
        </>
        
    )
}

const Heading = () =>{
    return(
        <>
        <h1>Namaste Javascript using Functional Component 🚀🚀</h1>
        <p>{elem}</p>
        <HeadingJsx/>
        </>
    )
}

//parent.render(container);
parent.render(<Heading/>)