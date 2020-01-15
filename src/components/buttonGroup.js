import React from "react";

function ButtonGroup(props) {
  return (
    <div>
      <button
        onClick={() => props.startStop()}
        disabled={props.time[0] >= props.minutes}
      >
        {props.running ? "Stop" : "Start"}
      </button>
      <button onClick={() => props.clear()} disabled={props.running}>
        Clear
      </button>
    </div>
  );
}

export { ButtonGroup };
