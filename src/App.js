// import React from "react";
// import ReactDOM  from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/body";

// const AppLayout = () => {
//     return (
//       <div className="app-layout">
//         <Header />
//         <Body />
//       </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";

const App = () => {
	return (
		<>
			<Header />
			<Body />
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);