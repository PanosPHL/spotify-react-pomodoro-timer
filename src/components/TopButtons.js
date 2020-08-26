import React from 'react';
import TimerContext from '../contexts/TimerContext';

const TopButtons = () => {
    return (
        <TimerContext.Consumer>
            {({ switchTimers, started }) => {
                function handleClick (event) {
                    if (!/button$/.test(event.target.id) || started) {
                        return;
                    }

                    const buttons = document.getElementsByClassName('button');

                    for (let i = 0; i < buttons.length; i++) {
                        buttons[i].classList.remove('selected-button');
                    }

                    event.target.classList.add('selected-button');

                    const targetArr = event.target.id.split('-');
                    switchTimers(targetArr.filter((el, i) => i !== targetArr.length - 1).join('-'));
                }

                return (
                <section id="top-buttons" onClick={handleClick}>
                <div id="pomodoro-button" className="button selected-button">Pomodoro</div>
                <div id="short-break-button" className="button">Short Break</div>
                <div id="long-break-button" className="button">Long Break</div>
                </section>
                );
            }}
        </TimerContext.Consumer>
    )
}

export default TopButtons;