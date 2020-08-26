import React from 'react';
import TimerContext from './contexts/TimerContext';
import App from './App';

class AppWithContext extends React.Component {
    constructor() {
        super();

        this.state = {
            started: false,
            timerType: "pomodoro",
            time: 10,
            startTimer: this.startTimer,
            stopTimer: this.stopTimer,
            resetTimer: this.resetTimer,
            decrementTimer: this.decrementTimer,
            switchTimers: this.switchTimers
        }
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer = () => {
        this.setState({ started: true }, () => {
            this.decrementTimer();
        });

    }

    stopTimer = () => {
        this.setState({ started: false }, () => {
        this.clearTimer();
        });
    }

    resetTimer = () => {
        if (this.state.started) {
            return;
        }

        switch (this.state.timerType) {
            case 'pomodoro':
                this.setState({ time: 1500 });
                return;
            case 'short-break':
                this.setState({ time: 300 });
                return;
            case 'long-break':
                this.setState({ time: 600 });
                return;
            default: return;
        }
    }

    decrementTimer = () => {
        if (!this.state.started) {
            return;
        }

        this.interval = setInterval(() => {
            if (this.state.time === 0) {
                this.stopTimer();
                return;
            }

            this.setState({ time: this.state.time - 1 });
        }, 1000);
    }

    clearTimer = () => {
        clearInterval(this.interval);
        this.interval = null;
    }

    switchTimers = (type) => {
        if (this.state.started) {
            return;
        }

        switch (type) {
            case 'pomodoro':
                this.setState({ timerType: type, time: 1500 });
                return;
            case 'short-break':
                this.setState({ timerType: type, time: 300 });
                return;
            case 'long-break':
                this.setState({ timerType: type, time: 600 });
                return;
            default: return;
        }
    }

    render() {
        return (
       <TimerContext.Provider value={this.state}>
           <App />
       </TimerContext.Provider>
        )
    }
}

export default AppWithContext;