import React from 'react';
import TimerContext from './contexts/TimerContext';
import AudioContext from './contexts/AudioContext';
import SpotifyContext from './contexts/SpotifyContext';
import App from './App';

class AppWithContext extends React.Component {
    constructor() {
        super();

        this.state = {
            started: false,
            timerType: "pomodoro",
            time: 1500,
            timerMethods: {
                startTimer: this.startTimer,
                stopTimer: this.stopTimer,
                resetTimer: this.resetTimer,
                decrementTimer: this.decrementTimer,
                switchTimers: this.switchTimers,
                addMinute: this.addMinute,
                subtractMinute: this.subtractMinute
            },
            audio: {
                file: null,
                updateAudio: this.updateAudio
            },
            token: null
        }
    }

    async componentDidMount() {
        if (this.state.token) {
            return;
        }

        let urlStr = window.location.toString()

        if (urlStr.includes('?code=')) {
            const params = {
                grant_type: 'authorization_code',
                code: urlStr.split('?code=')[1],
                redirect_uri: 'http://localhost:3000',
                client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
                client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
            }

            let str = [];

            for (let key in params) {
                str.push(`${key}=${encodeURIComponent(params[key])}`);
            }

            const res = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: str.join('&')
            });

            const data = await res.json();

            if (res.ok) {
                this.setState({ token: data.access_token });
            }

        }
    }

    startTimer = async () => {
        if (this.state.token) {
            await fetch('https://api.spotify.com/v1/me/player/play', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                }
            });
        }

        this.setState({ started: true }, () => {
            this.decrementTimer();
        });

    }

    stopTimer = async () => {
        if (this.state.token) {
            await fetch('https://api.spotify.com/v1/me/player/pause', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                }
            });
        }

        this.setState({ started: false }, () => {
            this.clearTimer();
        });
    }

    addMinute = () => {
        this.setState({ time: this.state.time + 60 });
    }

    subtractMinute = () => {
        if (this.state.time < 60) {
            this.setState({ time: 0 });
            return;
        }
        this.setState({ time: this.state.time - 60 });
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
                try {
                    this.state.audio.file.play();
                    this.stopTimer();
                    return;
                } catch (e) {
                    alert('There was an issue playing your audio file! Please provide one.')
                }
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

    updateAudio = (file) => {
        let url = URL.createObjectURL(file);
        let audio = new Audio(url);
        this.setState({ audio: { file: audio, updateAudio: this.updateAudio }});
    }

    render() {
        const timeState = Object.assign({}, this.state);
        delete timeState.audio;

        return (
            <TimerContext.Provider value={timeState}>
                <AudioContext.Provider value={this.state.audio}>
                    <SpotifyContext.Provider value={this.state.token}>
                    <App />
                    </SpotifyContext.Provider>
                </AudioContext.Provider>
            </TimerContext.Provider>
        )
    }
}

export default AppWithContext;