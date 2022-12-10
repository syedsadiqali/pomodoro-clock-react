import React from "react";

function Clock(props) {
  let minutes = Math.floor(props.timer / 60);
  let seconds = props.timer - minutes * 60;
  return (
    <div className="h-80">
      <div className="clock w-3/5 h-15 p-2 mx-auto my-8 border-0 rounded-xl">
        <div className="inner-box p-16 m-x-auto flex flex-col justify-center items-center">
          <div className="flex justify-center md:flex-row flex-col">
            <button
              onClick={() => props.updateMinutes(25)}
              className={props.lastClicked === 25 && "clicked"}
              disabled={props.running && props.lastClicked !== 25}
            >
              25m pomodoro
            </button>
            <button
              onClick={() => props.updateMinutes(50)}
              className={props.lastClicked === 50 && "clicked"}
              disabled={props.running && props.lastClicked !== 50}
            >
              50m pomodoro
            </button>
            <button
              onClick={() => props.updateMinutes(5)}
              className={props.lastClicked === 5 && "clicked"}
              disabled={props.running && props.lastClicked !== 5}
            >
              5m break
            </button>
            <button
              onClick={() => props.updateMinutes(10)}
              className={props.lastClicked === 10 && "clicked"}
              disabled={props.running && props.lastClicked !== 10}
            >
              10m break
            </button>
          </div>
          <div className="time flex">
            <p className="minute text-6xl">{convertTime(minutes)}</p>{" "}
            <Seperator />
            <p className="second text-6xl">{convertTime(seconds)}</p>
          </div>
          {props.finished ? <h1 class="expired-label">Timer Expired</h1> : null}
        </div>
      </div>
    </div>
  );
}
function Seperator() {
  return <p className="text-6xl">:</p>;
}
function convertTime(time) {
  let timeString = time.toString();
  return timeString.length < 2 ? "0" + timeString : timeString;
}

export { Clock };
