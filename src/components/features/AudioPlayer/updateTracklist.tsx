import { useContext } from "react";
import { AudioContext } from "./hooks/useAudioPlayer";
import { ITrackProps } from "./types";

export function UpdateTracklist({ playlist }: { playlist: ITrackProps[] }) {
    const { setCurrentTrack } = useContext(AudioContext);
    setCurrentTrack(playlist);
}