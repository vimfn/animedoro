/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FC, useState, useEffect } from "react";
import Config from "./Config";

interface pomodoroProps {}

const pomodoro: FC<pomodoroProps> = ({}) => {
  const [timer, setTimer] = useState(360);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(isRunning && timer>0){
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
   
  }, [timer, isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const getTimer = (timer: any) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? "0" + minutes: minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">animedoro</h1>
      <div className="flex gap-3 p-5 justify-center">
        {/* <button className="btn btn-secondary btn-sm ">📚 Work</button>
        <button className="btn btn-ghost btn-sm">📺 Watch</button> */}
        <div className="btn-group">
          <button className="btn btn-secondary btn-sm">📚 Work</button>
          <button className="btn btn-ghost btn-sm">📺 Watch</button>
        </div>
      </div>
      <div className="text-8xl font-bold">
        <div className="flex flex-col gap-3">
          {/* 50:00 */}
          {getTimer(timer)}
          {/* <progress className="progress progress-secondary w-128" value="40" max="100"></progress> */}
        </div>
      </div>
      <div className="flex gap-4 mt-4 justify-center">
        <button className="btn btn-primary btn-sm" onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
        <button className="btn btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        <Config />
      </div>
    </div>
  );
};

export default pomodoro;
