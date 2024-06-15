import { useContext } from "react";
import { AudioContext } from "../../hooks/useAudioPlayer";
import { formatTime } from "../../utils";
import { Typography } from "@material-tailwind/react";

export default function ProgressBar() {
    const { progressBarRef, timeProgress, duration, handleProgressChange } =
        useContext(AudioContext);

    return (
        <div className="flex items-center gap-x-2">
            <Typography className="text-gray-900 dark:text-slate-100 text-sm">{formatTime(timeProgress)}</Typography>
            <input
                type="range"
                defaultValue="0"
                min="0"
                max={duration.toString()}
                ref={progressBarRef}
                onChange={handleProgressChange}
                className="dark:bg-gray-400 accent-green-400 bg-gray-600 w-full h-1 rounded-lg cursor-pointer range-sm"
            />
            <Typography className="text-gray-900 dark:text-slate-100 text-sm">{formatTime(duration)}</Typography>
        </div>
    );
}
