import { useContext, useEffect, useState } from "react";
import Icon from "@components/shared/Icon";
import { AudioContext } from "../../hooks/useAudioPlayer";
import PlayerIconButton from "../PlayerIconButton";

interface IVolumeControlProps {
    className?: string;
}

export default function VolumeControl({ className }: IVolumeControlProps) {
    const { volume, setVolume, muteVolume, setMuteVolume } =
        useContext(AudioContext);

    return (
        <div className={`flex items-center gap-x-2 ${className}`}>

            <PlayerIconButton onClick={() => setMuteVolume((prev: boolean) => !prev)}
                icon={muteVolume || volume < 5 ? (
                    "volumeMuted"
                ) : volume < 40 ? (
                    "volumeLow"
                ) : (
                    "volumeHigh"
                )}
                toggled={muteVolume}
            />
            <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="dark:bg-gray-400 accent-green-400 bg-gray-600 h-1 rounded-lg cursor-pointer range-sm"
            />
        </div>
    );
}
