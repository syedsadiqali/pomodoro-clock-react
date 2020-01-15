import React from "react";
import { Clock } from "./components/clock";
import { TimerField } from "./components/timerField";
import { ButtonGroup } from "./components/buttonGroup";

import "./components/style.css";

// Todo : 1. More Styling
// 3. An Introduction to Pomodoros
// 5. Design (!! Do it First)
// 6. Animations

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: [0, 0],
      running: false,
      minutes: 25,
      finished: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.state.running
          ? this.setState(state => this.getUpdatedState(state))
          : null,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="ClockApp">
        <p>
          Pomodoro Clock : Set the Interval and Click Start, Stop if you want to
          in between (i advice don't)
        </p>
        <Clock time={this.state.time} />

        <TimerField
          updateMinutes={this.updateMinutes}
          minutes={this.state.minutes}
        />

        <ButtonGroup
          startStop={this.startStop}
          clear={this.clear}
          running={this.state.running}
          time={this.state.time}
          minutes={this.state.minutes}
        />

        {this.state.finished ? <h1>Timer Expired</h1> : null}
      </div>
    );
  }

  updateMinutes = (add = true) => {
    this.setState(state => {
      return {
        minutes: add
          ? state.minutes < 60
            ? state.minutes + 1
            : state.minutes
          : state.minutes > 5
          ? state.minutes - 1
          : state.minutes
      };
    });
  };

  startStop = () => {
    this.setState(state => {
      return {
        running: !state.running
      };
    });
  };

  clear = () => {
    this.setState({ time: [0, 0], running: false, finished: false });
  };

  getUpdatedState(state) {
    let timeArr = state.time;
    if (timeArr[1] < 60) {
      timeArr[1] = timeArr[1] + 1;
    } else {
      timeArr[1] = 0;
      if (timeArr[0] < 60 && timeArr[0] < state.minutes) {
        timeArr[0] = timeArr[0] + 1;
      }
    }
    return {
      time: timeArr,
      running: timeArr[0] < state.minutes,
      finished: timeArr[0] >= state.minutes
    };
  }
}

export default App;
