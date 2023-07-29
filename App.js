import React from "react";
import ReactDOM  from "react-dom/client";

// react element
const heading = React.createElement("h1", {"id": "heading"}, "Namasthe React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// JSX
const jsxHeading = <h1>Namasthe react from JSX</h1>;
root.render(jsxHeading);
// JSX converted to react element using babel

//need to wrap in () if h1 tag is in multiple line
const jsxHeading1 = (<h1 id="head">
    Namasthe react from JSX</h1>);

// functional component
const Title = () => <h1>component composition</h1> //short hand to create functional component

const HeaderComponent = () => {
  return (
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}  
        {/* we can write in 3 ways  */}
      {/* putting one component inside another component is called as component composition */}
      <h1>Functional based component</h1>
    </div>
  );
};
root.render(<HeaderComponent/>)
