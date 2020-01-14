import React from "react";

function TimerField(props) {
  return (
    <div className="timer">
      <button onClick={() => props.updateMinutes(false)}>-</button>
      <p>{props.minutes}</p>
      <button onClick={() => props.updateMinutes()}>+</button>
    </div>
  );
}

export { TimerField };
