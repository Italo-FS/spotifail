"use client";

import AudioPlayerWrap from "./components/AudioPlayerWrap";
import { useAudioPlayer, AudioContext } from "./hooks/useAudioPlayer";

export function AudioPlayer() {
    const audioPlayer = useAudioPlayer();

    return (
        <AudioContext.Provider value={audioPlayer}>
            <AudioPlayerWrap />
        </AudioContext.Provider>
    );
}

export default AudioPlayer;
