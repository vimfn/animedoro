import { FC } from "react";
import Config from "./Config";

interface pomodoroProps {}

const pomodoro: FC<pomodoroProps> = ({}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">animedoro</h1>
      <div className="flex gap-3 p-5 justify-center">
        <button className="btn btn-secondary btn-sm">📚 Work</button>
        <button className="btn btn-ghost btn-sm">📺 Watch</button>
      </div>
      <div className="text-8xl font-bold">50:00</div>
      <div className="flex gap-4 mt-4 justify-center">
        <button className="btn btn-primary btn-sm">Start</button>
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
