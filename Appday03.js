import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement("h1",{id:"heading"},"PS React-101");

// console.log(heading);

//JSX : It is not html in javascript rather it is html or xml like syntax
// JSX (transpiled before it reaches the JS) - Parcel - Babel
// jsxHeading, heading are react element
//JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMlElement(render)
// React Element
const elem = <span>React Element </span>;

// Title Component
const Title1 = () => (
  <h1 className="head" tabIndex="8">
    PS React-101 using JSX with arrow function
  </h1>
);

// OR

const Title2 = function () {
    return <h1 className="heading">React functional component with normal function </h1>;
  };

// React Component
// Class Based Component - Old way of writing code
// Functional Component - New way of writing code

// What is react functional component : It is a normal javascript funtion which returns some piece of JSX.
// Also we can say that it is a javascript function which returns a react element or jsx code
const HeadingComponent1 = () => {
  return <h1 className="heading">React functional component</h1>;
};

// OR
const number = 1000;
const HeadingComponent2 = () => (
  <div id="container">
    {/* component composition */}
    <Title2/>
    <Title1 /> 
    <Title1></Title1>
    {Title1()}
     {number}
     {/* {jsxHeading} */}
     {/* writing javascript inside of jsx */}
     <h2>{number}</h2>
     <h2>{100+300}</h2>
     {console.log("will this also works!")}
    <h1 className="heading">React functional component</h1>
  </div>
);

const jsxHeading = (
    <h1 className="head" tabIndex="8">
      {elem}
      PS React-101 using JSX
      <HeadingComponent2/>
    </h1>
  );
  
  console.log(jsxHeading);

const fn1 = () => true;

const fn2 = () => {
  true;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent2 />);
