import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";

const AppLayout = () => {
    return (
      <div className="app-layout">
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    );
}

const root = ReactDOM.render(document.getElementById("root"));
root.render(<AppLayout/>)