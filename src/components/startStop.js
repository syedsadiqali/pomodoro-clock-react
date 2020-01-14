import React from "react";

function StartStop(props) {
  return (
    <button onClick={() => props.startStop()}>
      {props.running ? "Stop" : "Start"}
    </button>
  );
}

export { StartStop };
