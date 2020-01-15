import React from "react";

function Clock(props) {
  return (
    <div className="clock">
      <p className="minute">{props.time[0]}</p> <Seperator />
      <p className="second">{props.time[1]}</p>
    </div>
  );
}
function Seperator() {
  return <p>:</p>;
}

export { Clock };
