/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FC, useState, useEffect } from "react";
import Config from "./Config";
import SettingsIcon from "./Icons/SettingsIcon";

interface pomodoroProps {}

const pomodoro: FC<pomodoroProps> = ({}) => {
  const [timer, setTimer] = useState(3000);
  const [isRunning, setIsRunning] = useState(false);
  const [isWatching, setisWatching] = useState(false);
  const [workTime, setWorkTime] = useState(25 * 60); // default work time is 25 minutes
  const [watchTime, setWatchTime] = useState(15 * 60); // default watch time is 15 minutes

  useEffect(() => {
    if (isRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    isWatching ? setTimer(watchTime) : setTimer(workTime);
  };

  const startWatching = () => {
    setisWatching(true);
    setTimer(watchTime);
  };

  const stratWorking = () => {
    setisWatching(false);
    setTimer(workTime);
  };

  const getTimer = (timer: any) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const handleConfigSubmit = (workTime: number, watchTime: number) => {
    setWorkTime(workTime);
    setWatchTime(watchTime);
    if (!isWatching) {
      setTimer(workTime);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">animedoro</h1>
      <div className="flex gap-3 p-5 justify-center">
        <div className="btn-group">
          <button
            className={`btn ${
              !isWatching ? "btn-secondary" : "btn-ghost"
            } btn-sm`}
            onClick={stratWorking}
          >
            📚 Work
          </button>
          <button
            className={`btn ${
              isWatching ? "btn-secondary" : "btn-ghost"
            } btn-sm`}
            onClick={startWatching}
          >
            📺 Watch
          </button>
        </div>
      </div>
      <div className="text-8xl font-bold">
        <div className="flex flex-col gap-3">{getTimer(timer)}</div>
      </div>
      <div className="flex gap-4 mt-4 justify-center">
        <button className="btn btn-primary btn-sm" onClick={toggleTimer}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="btn btn-sm" onClick={resetTimer}>
          Reset
        </button>

        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn btn-sm">
          <SettingsIcon />
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <Config onSubmit={handleConfigSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default pomodoro;
