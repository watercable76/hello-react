// import React, { useEffect, useState } from 'react';
// import reactDom from 'react-dom';
// import ReactDOM from 'react-dom';
// import './index.css';

// function App() {
//   const [year, setYear] = useState(2050);
//   const [manager, setManager] = useState("Alex");
//   const [status, setStatus] = useState("Open");
//   return (
//     <>
//     <div>
//       <h1>{year}</h1>
//       <button onClick={() => setYear(year+1)}>New Year!</button>
//     </div>
//       <div>
//         <h1>Manger on Duty: {manager}</h1>
//         <button onClick={() => setManager("Rachel")}>New Manger</button>
//       </div>

//       <div>
//         <h1>Status: {status}</h1>
//         <button onClick={() => setStatus("Open")}>Open</button>
//         <button onClick={() => setStatus("Back in 5")}>Break</button>
//         <button onClick={() => setStatus("Closed")}>Closed</button>
//       </div>
//     </>
//   );
// }

// function App() {
//   const [val1, setVal1] = useState("");
//   const [val2, setVal2] = useState("");

//   useEffect(() => console.log(`field 1: ${val1}`), [val1]);
//   useEffect(() => console.log(`field 2: ${val2}`), [val2]);
//   return (
//     <>
//       <label>
//         Favorite Phrase:
//       <input
//           value={val1}
//           onChange={e => setVal1(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Second Favorite Phrase:
//         <input
//           value={val2}
//           onChange={e => setVal2(e.target.value)}
//         />
//       </label>
//     </>
//   );
// }


// // can render elements or create elements
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// renders multiple pages at once
// see -https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/- for article
// and -https://github.com/techomoro/ReactMultiPageWebsite- for github repo reference

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();