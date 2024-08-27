// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gameStarted: false,
//       ballPosition: 0,
//     };
//   }

//   componentDidMount() {
//     document.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleKeyDown);
//   }

//   buttonClickHandler = () => {
//     this.setState({ gameStarted: true });
//   };

//   handleKeyDown = (event) => {
//     if (event.key === "ArrowRight" || event.keyCode === 39) {
//       this.setState((prevState) => ({
//         ballPosition: prevState.ballPosition + 5,
//       }));
//     }
//   };

//   renderChoice = () => {
//     if (this.state.gameStarted) {
//       return (
//         <div
//           className="ball"
//           style={{ left: `${this.state.ballPosition}px` }}
//         />
//       );
//     } else {
//       return (
//         <button className="start" onClick={this.buttonClickHandler}>
//           Start
//         </button>
//       );
//     }
//   };

//   render() {
//     return <div className="app">{this.renderChoice()}</div>;
//   }
// }

// export default App;
import React from "react";

import GolfGame from "./GolfGame";

const App = () => {
  return (
    <div>
      <GolfGame />
    </div>
  );
};

export default App;
