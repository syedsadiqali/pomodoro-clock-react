import React from "react";

function ButtonGroup(props) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => props.startStop()}
      >
        {props.running ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => props.reset()}
        disabled={props.running}
      >
        Reset
      </button>
    </div>
  );
}

export { ButtonGroup };
