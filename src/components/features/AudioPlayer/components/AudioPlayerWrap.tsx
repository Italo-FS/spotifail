import TrackInfo from "./TrackInfo";
import TrackList from "./TrackList";
import Audio from "./Audio";
import TrackControl from "./Controls/TrackControl";
import ProgressBar from "./Controls/ProgressBar";
import RightControl from "./Controls/RightControl";
import { useContext } from "react";
import { AudioContext } from "../hooks/useAudioPlayer";

export default function AudioPlayerWrap() {
    const { audioPlayerWrapRef } = useContext(AudioContext);

    return (
        <>
            <TrackList />
            <div ref={audioPlayerWrapRef} className="border-t border-gray-400 dark:border-gray-700 bg-white bg-opacity-60 dark:bg-zinc-700 dark:bg-opacity-80 backdrop-blur sticky bottom-0 z-40 h-max max-w-full rounded-none py-1 px-4 lg:px-8 lg:py-1 shadow-inner">
                <Audio />
                <div className="flex justify-between align-center">
                    <TrackInfo />
                    <TrackControl />
                    <RightControl />
                </div>
                <ProgressBar />
            </div>
        </>
    )
}