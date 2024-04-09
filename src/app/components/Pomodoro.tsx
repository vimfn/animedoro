/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FC, useState, useEffect } from "react";
import Config from "./Config";
import SettingsIcon from "./Icons/SettingsIcon";
import ResetIcon from "./Icons/ResetIcon";
import useWindowSize from "../../../lib/useWindowSize";
import Confetti from "react-confetti";

interface pomodoroProps { }

const pomodoro: FC<pomodoroProps> = ({ }) => {
  const [timer, setTimer] = useState(3000);
  const [initialTimer, setInitialTimer] = useState(3000);
  const [isRunning, setIsRunning] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [workTime, setWorkTime] = useState(50 * 60); // default work time is 50 minutes
  const [watchTime, setWatchTime] = useState(10 * 60); // default watch time is 10 minutes
  const [showConfetti, setShowConfetti] = useState(false);

  const { width, height } = useWindowSize();

  useEffect(() => {

    if (isRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      document.title = getTimer(timer);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      playMusic();
      sendNotification();
      setIsRunning(false);
      setShowConfetti(true);
      setTimer(initialTimer);
      setTimeout(() => {
        setShowConfetti(false);
      }, 10000);
    }
  }, [timer, isRunning, initialTimer]);

  const toggleTimer = () => {
    setIsRunning((prevState) => !prevState);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsWatching(false);
    setTimer(initialTimer);
    document.title = "Animedoro";
  };

  const startWatching = () => {
    setIsWatching(true);
    setTimer(watchTime);
    setInitialTimer(watchTime);
  };

  const startWorking = () => {
    setIsWatching(false);
    setTimer(workTime);
    setInitialTimer(workTime);
  };

  const getTimer = (timer: number) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
      }`;
  };

  const handleConfigSubmit = (workTime: number, watchTime: number, animeURL: string) => {
    alert(animeURL)
    setWorkTime(workTime);
    setWatchTime(watchTime);
    if (!isWatching) {
      setTimer(workTime);
      setInitialTimer(workTime);
    } else {
      setTimer(watchTime);
      setInitialTimer(watchTime);
    }
  };

  const playMusic = () => {
    const audio = new Audio(
      "https://dl.dropboxusercontent.com/s/52m5j7wdibcjr6k/music.mp3"
    );
    audio.play();
  };

  const sendNotification = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Timer Ended");
        }
      });
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">animedoro</h1>
      <div className="flex gap-3 p-5 justify-center">
        <div className="btn-group">
          <button
            className={`btn ${!isWatching ? "btn-secondary" : "btn-ghost"
              } btn-sm`}
            onClick={startWorking}
          >
            📚 Work
          </button>
          <button
            className={`btn ${isWatching ? "btn-secondary" : "btn-ghost"
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
          <ResetIcon />
        </button>

        <label htmlFor="my-modal-3" className="btn btn-sm">
          <SettingsIcon />
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <Config onSubmit={handleConfigSubmit} />
          </div>
        </div>
      </div>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

export default pomodoro;
