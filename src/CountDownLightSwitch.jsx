import React, { useEffect, useState } from 'react'
import './App.css'
const CountDownLightSwitch = () => {
    let firstrun = false;

    const [timer, setTimer] = useState(30);
    const [toggleTheme, setToggleTheme] = useState(true);
    const [timerMessage, setTimerMessage] = useState('');
    const [startTime, setStartTime] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let setTimeoutId;
    
        if (firstrun) {
            const intervalID = setInterval(() => {
                setTimer(timer - 1)
                setProgress(pgbar)
            }, 1000)
        }
        firstrun = true;

        return () => clearTimeout(setTimeoutId)

    }, [startTime])

    return (
        <div className={`container ${toggleTheme ? 'dark' : 'light'}`}>
            <div className="header">
                <h1>Countdown & Light Switch</h1>
                <div className="toggle-container">
                    <label className="toggle-switch">
                        <input type="checkbox" id="themeToggle"
                            onChange={() => setToggleTheme(!toggleTheme)} />
                        <span className="slider"></span>
                    </label>
                    <span>Light Mode</span>
                </div>
            </div>
            <div className="timer-section">
                <div className="progress-bar">
                    <div className="progress" id="progress" style={{ width: { progress } }}></div>
                </div>
                <div className="timer" id="timerDisplay">{timer}</div>
                <div className="btn-group">
                    <button id="startButton" value={startTime} onClick={() => setStartTime(true)}>Start Timer</button>
                    <button id="resetButton" onClick={() => setTimer(0)} >Reset Timer</button>
                </div>
                <div className="message" id="messageArea"></div>
            </div>
        </div>
    )
}

export default CountDownLightSwitch