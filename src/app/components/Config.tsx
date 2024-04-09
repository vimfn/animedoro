"use client";

import { FC, useState } from "react";

interface ConfigProps {
  onSubmit: (workTime: number, watchTime: number) => void;
}

const Config: FC<ConfigProps> = ({ onSubmit }) => {
  const [workTime, setWorkTime] = useState(50);
  const [watchTime, setWatchTime] = useState(10);
  const [animeURL, setanimeURL] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(workTime * 60, watchTime * 60);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-xl font-medium">
        <div className="flex gap-4">
          <label>
            📚 work for
            <input
              type="number"
              min="1"
              value={workTime}
              onChange={(e) => setWorkTime(parseInt(e.target.value))}
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />mins
          </label>
          <label>
            👀 watch for
            <input
              type="number"
              min="1"
              value={watchTime}
              onChange={(e) => setWatchTime(parseInt(e.target.value))}
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />mins
          </label>
        </div>
        <div className="pt-5">
          <label>
            🔗 anime url
            <br />
            <p className="text-sm mb-2 italic">
              (if provided, you can play right here)
            </p>
            <div className="flex gap-4">
              <input
                type="url"
                placeholder="https://zoro.to"
                value={animeURL}
                onChange={(e) => setanimeURL(e.target.value)}
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </div>
          </label>
        </div>

        <br />
      </div>
      <button className="btn btn-primary btn-sm mt-5" type="submit">
        <label
          htmlFor="my-modal-3"
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
