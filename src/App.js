import React from "react";
import { Clock } from "./components/clock";
import { TimerField } from "./components/timerField";
import { StartStop } from "./components/startStop";

import "./components/style.css";

// Todo : 1. More Styling
// 2. Finish Timer Logic
// 3. An Introduction to Pomodoros
// 4. Webpack Prod Config
// 5. Design (!! Do it First)
// 6. Animations


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startTime: new Date(),
      time: new Date(),
      running: false,
      minutes: 5
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(state => this.getUpdatedState(state)),
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
        <Clock time={this.state.time} startTime={this.state.startTime} />

        <TimerField
          updateMinutes={this.updateMinutes}
          minutes={this.state.minutes}
        />

        <StartStop startStop={this.startStop} running={this.state.running} />
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
        startTime: new Date(),
        time: new Date(),
        running: !state.running
      };
    });
  };

  getUpdatedState(state) {
    return (
      state.running && {
        time: new Date(),
        running:
          state.time.getMinutes() - state.startTime.getMinutes() < state.minutes
      }
    );
  }
}

export default App;
