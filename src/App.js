import React from "react";
import { Clock } from "./components/clock";
import { ButtonGroup } from "./components/buttonGroup";

import "./components/style.css";
import { NavBar } from "./components/navBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 1500,
      running: false,
      finished: false,
      lastClicked: 25
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.state.running
          ? this.setState(state => {
              return {
                timer: state.timer > 0 ? state.timer - 1 : state.timer,
                finished: state.timer === 0,
                running: state.timer > 0
              };
            })
          : null,
      1000
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.finished === true) {
      if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Timer Finished!! Yayyy !!");
      }

      return true;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container mx-auto lg:px-2">
        <NavBar />
        <Clock
          timer={this.state.timer}
          updateMinutes={this.updateMinutes}
          lastClicked={this.state.lastClicked}
          running={this.state.running}
          finished={this.state.finished}
        />
        <ButtonGroup
          startStop={this.startStop}
          reset={this.reset}
          running={this.state.running}
          timer={this.state.timer}
        />
        <div className="what-is" id="whatis">
          <h2>What is Pomodoro?</h2>
          <p>
            {" "}
            Pomodoro is a time management technique, developed in 1980s.
            Traditionally, it uses a timer set to 25 minutes, separated by short
            breaks. It helps you work effectively and tirelessly, taking short
            breaks every x minutes (you decide).
          </p>
        </div>
        <div className="how-to" id="howto">
          <h2>How to use Pomodoro ?</h2>
          <p>
            {" "}
            Follow Simple steps as simple as :- 1. Adjust time if you want (add
            or substract minutes of active time). 2. Click Start, and start
            focussing on your task, Rest Options work as name suggest.
          </p>
        </div>
      </div>
    );
  }

  updateMinutes = (duration = 25) =>
    this.setState({
      timer: duration * 60,
      running: false,
      finished: false,
      lastClicked: duration
    });

  startStop = () => {
    this.setState(state => {
      state.running ? null : this.notifyMe();
      return { running: !state.running };
    });
  };

  reset = () => this.setState({ timer: 1500, running: false, finished: false });

  notifyMe = () => {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("You'll be notified when you're timer will end");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(
        "You'll be notified when you're timer will end"
      );
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function(permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(
            "You'll be notified when you're timer will end"
          );
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  };
}

export default App;
