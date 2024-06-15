import { useContext } from "react";
import { AudioContext } from "../../hooks/useAudioPlayer";
import PlayerIconButton from "../PlayerIconButton";

interface ITrackControl {
    className?: string;
}

export default function ITrackControl({ className }: ITrackControl) {
    const {
        skipForward,
        skipBackward,
        handlePrevious,
        handleNext,
        isPlaying,
        togglePlayPause,
    } = useContext(AudioContext);

    return (
        <div className={`audio-nav-buttons flex gap-x-1 items-center flex-0 ${className}`}>
            <PlayerIconButton onClick={handlePrevious} icon="backwardStep" size="sm" />
            <PlayerIconButton onClick={skipBackward} icon="backward" size="sm" />
            <PlayerIconButton
                onClick={togglePlayPause}
                className="rounded-full bg-black text-white dark:bg-white dark:text-black"
                icon={isPlaying ? "pause" : "play"} iconSize="lg"
            />
            <PlayerIconButton onClick={skipForward} icon="forward" size="sm" />
            <PlayerIconButton onClick={handleNext} icon="forwardStep" size="sm" />
        </div>
    );
}
