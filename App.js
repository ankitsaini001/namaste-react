import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},
    React.createElement('h1',{id:"heading"},"NamasteReact from React 🚀")
));
const paragraph = React.createElement('p',{id:"para", className:"parg"},"Calling react library using CDN links in which 1st script is used to call react while second script will connect react and browser.");
const callApp = React.createElement('i',{},"Calling this React from App.js file");
const container = React.createElement('div',{},heading,paragraph,callApp);
const root = ReactDOM.createRoot(document.getElementById('root'));
//console.log(heading); // this will return an object 
//console.log(paragraph); // this will return an object
//console.log(callApp); // this will return an object

root.render(container); // this will get an object and then coordinate with browser as per its type and then dump it in the root.
