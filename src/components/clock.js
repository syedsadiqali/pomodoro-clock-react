import React from "react";

function Clock(props) {
  let minutes = Math.floor(props.timer / 60);
  let seconds = props.timer - (minutes * 60);
  return (
    <div className="clock w-3/5 h-15 p-2 m-auto border-0 rounded-lg">
      
      <div className="inner-box p-2 m-x-auto flex flex-col justify-center items-center">
      <div className="flex justify-center">
      <button onClick={() => props.updateMinutes(25)}>25m pomodoro</button>
      <button onClick={() => props.updateMinutes(50)}>50m pomodoro</button>
      <button onClick={() => props.updateMinutes(5)}>5m break</button>
      <button onClick={() => props.updateMinutes(10)}>10m break</button>
      </div>
      <div className="time flex">
        <p className="minute">{minutes}</p> <Seperator />
        <p className="second">{seconds}</p>
      </div>
      </div>
    </div>
  );
}
function Seperator() {
  return <p>:</p>;
}

export { Clock };
