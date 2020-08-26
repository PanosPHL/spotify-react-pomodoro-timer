import React from 'react';
import TimerContext from '../contexts/TimerContext';

const Timer = () => {
    return (
        <TimerContext.Consumer>
            {value => {
                const minutes = Math.floor(value.time / 60);
                const seconds = value.time % 60;
                return (
                <h1 id='timer'>{seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`}</h1>
                )
            }}
        </TimerContext.Consumer>
    )
}

export default Timer;