// import React, { useState, useEffect } from "react";

// const GolfGame = () => {
//   const [ballPosition, setBallPosition] = useState(null);

//   const handleKeyDown = (event) => {
//     if (event.key === "ArrowRight" || event.keyCode === 39) {
//       // Move the ball to the right by 5 pixels

//       setBallPosition((prevPosition) => {
//         if (prevPosition === null) return null; // Ball not rendered yet

//         return { ...prevPosition, left: (prevPosition.left || 0) + 5 };
//       });
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);

//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const handleStartGame = () => {
//     // Start the game by rendering the ball

//     setBallPosition({ top: 0, left: 0 });
//   };

//   return (
//     <div>
//       {ballPosition ? (
//         <div className="ball"></div>
//       ) : (
//         <button className="start" onClick={handleStartGame}>
//           Start
//         </button>
//       )}
//     </div>
//   );
// };

// export default GolfGame;
import React, { useState, useEffect } from "react";

const GolfGame = () => {
  const [ballPosition, setBallPosition] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      setBallPosition((prevPosition) => {
        if (prevPosition === null) return null; // Ball not rendered yet

        return { ...prevPosition, left: (prevPosition.left || 0) + 5 };
      });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleStartGame = () => {
    setBallPosition({ top: 0, left: 0 });
  };

  return (
    <div>
      {ballPosition ? (
        <div
          className="ball"
          style={{
            position: "absolute",
            top: `${ballPosition.top}px`,
            left: `${ballPosition.left}px`,
            width: "20px", // Example width
            height: "20px", // Example height
            backgroundColor: "red", // Example color
          }}
        ></div>
      ) : (
        <button className="start" onClick={handleStartGame}>
          Start
        </button>
      )}
    </div>
  );
};

export default GolfGame;
