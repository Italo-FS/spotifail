import { useContext } from "react";
import { AudioContext } from "../hooks/useAudioPlayer";

export default function Audio() {
    const { currentTrack, audioRef, onLoadedMetadata, handleNext } =
        useContext(AudioContext);

    // if (!currentTrack) throw new Error('track undefined');
    if (!currentTrack) return;

    return (
        <audio
            src={currentTrack.src}
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={handleNext}
        >
            Your browser does not support the audio element.
        </audio>
    );
}
