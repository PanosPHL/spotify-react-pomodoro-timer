import React from 'react';
import TimerContext from '../contexts/TimerContext';

const TimerAndButtons = () => {
    return (
        <TimerContext.Consumer>
            {({ time, timerMethods: { addMinute, subtractMinute } }) => {
                const minutes = Math.floor(time / 60);
                const seconds = time % 60;
                return (
                    <section id='timer-container'>
                        <div className="button minute-button" onClick={subtractMinute}><span id="subtract-minute">-</span></div>
                        <h1 id='timer'>{seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`}</h1>
                        <div className="button minute-button" onClick={addMinute}><span id="add-minute">+</span></div>
                    </section>
                )
            }}
        </TimerContext.Consumer>
    )
}

export default TimerAndButtons;