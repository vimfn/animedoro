"use client";
import { FC, useState } from "react";

interface ConfigProps {
  onSubmit: (workTime: number, watchTime: number) => void;
}

const Config: FC<ConfigProps> = ({ onSubmit }) => {
  const [workTime, setWorkTime] = useState(25);
  const [watchTime, setWatchTime] = useState(15);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(workTime * 60, watchTime * 60);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4 text-xl font-bold">
        <label>
          Work Time (min):
          <input
            type="number"
            min="1"
            value={workTime}
            onChange={(e) => setWorkTime(parseInt(e.target.value))}
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
        <label>
          Watch Time (min):
          <input
            type="number"
            min="1"
            value={watchTime}
            onChange={(e) => setWatchTime(parseInt(e.target.value))}
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-sm mt-5" type="submit">
        <label
          htmlFor="my-modal-3"
          // className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          Save
        </label>
      </button>
      <label
        htmlFor="my-modal-3"
        className="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </label>
    </form>
  );
};

export default Config;
