import React from "react";

function Clock(props) {
  let timeObj = getTimeObj(props.time, props.startTime);

  return (
    <div className="clock">
        <p className="hour">{timeObj.hour}</p> <Seperator />
        <p className="minute">{timeObj.minute}</p> <Seperator />
        <p className="second">{timeObj.seconds}</p>
    </div>
  );
}

function getTimeObj(time, startTime) {
  let timeObj = {};
  timeObj.hour = time.getHours() - startTime.getHours();
  timeObj.minute = time.getMinutes() - startTime.getMinutes();
  timeObj.seconds = time.getSeconds() - startTime.getSeconds();
  return timeObj;
}
function Seperator() {
  return <p>:</p>;
}

export { Clock };
