import React from 'react';
import TimerContext from '../contexts/TimerContext';

const BottomButtons = () => {
    return (
        <TimerContext.Consumer>
            {({ timerMethods: {startTimer, stopTimer, resetTimer} }) => {
                const handleClick = (event) => {
                    switch(event.target.id) {
                        case 'start-button':
                            startTimer();
                            return;
                        case 'stop-button':
                            stopTimer();
                            return;
                        case 'reset-button':
                            resetTimer();
                            return;
                        default: return;
                    }
                }

                return (
                    <section id="buttons" onClick={handleClick}>
                        <div id="start-button" className="button">Start</div>
                        <div id="stop-button" className="button">Stop</div>
                        <div id="reset-button" className="button">Reset</div>
                    </section>
                );
            }}
        </TimerContext.Consumer>
    )
}

export default BottomButtons;