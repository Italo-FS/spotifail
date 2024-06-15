import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../hooks/useAudioPlayer";
import { ITrackProps } from "../types";
import { Typography } from "@material-tailwind/react";
import Thumbnail from "./Thumbnail";

export default function TrackList() {
    const { tracks, setCurrentTrack, trackListRef } = useContext(AudioContext);

    return (
        <div ref={trackListRef} className="flex-grow bg-white bg-opacity-60 dark:bg-zinc-700 dark:bg-opacity-80 backdrop-blur sticky z-10">
            <table className="table-auto text-left w-full">
                <tbody>
                    {tracks.map((track: ITrackProps, index: number) => (
                        <tr
                            key={track.id}
                            className="cursor-pointer dark:hover:bg-gray-900 hover:bg-gray-200"
                            onClick={() => setCurrentTrack(tracks[index])}
                        >
                            <td className="px-6">
                                <div className="flex items-center gap-3">
                                    <Thumbnail
                                        src={track.thumbnail}
                                        alt="audio-cover"
                                        size="sm"
                                        variant="square"
                                    />
                                    <div className="flex flex-col">
                                        <Typography variant="small" className="font-normal text-gray-900 dark:text-slate-100">
                                            {track.title}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="font-normal opacity-70 text-gray-900 dark:text-slate-100"
                                        >
                                            {track.artist} {track.album && ` - ${track.album}`} {track.year && ` - ${track.year}`}
                                        </Typography>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
