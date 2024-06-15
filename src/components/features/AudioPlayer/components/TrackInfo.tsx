import { useContext } from "react";
import Thumbnail from "./Thumbnail";
import { AudioContext } from "../hooks/useAudioPlayer";
import Typography from "@components/shared/Typography";

interface ITrackInfoProps {
    className?: string;
}

const TrackInfo = ({ className }: ITrackInfoProps) => {
    const { currentTrack } = useContext(AudioContext);

    return (
        <div className={`flex items-center gap-x-3 flex-1 ${className}`}>
            {currentTrack ?
                <>
                    <Thumbnail src={currentTrack.thumbnail} size="md" variant="square" />
                    <div className="text-start">
                        <Typography className="text-sm text-gray-900 dark:text-slate-100 text-clip overflow-hidden">{currentTrack.title}</Typography>
                        <Typography className="text-sm opacity-50 text-gray-900 dark:text-slate-100 text-clip overflow-hidden">{[currentTrack.artist, currentTrack.album, currentTrack.year].join(' - ')}</Typography>
                    </div>
                </>
                : <></>
            }
        </div>
    );
};
export default TrackInfo;
