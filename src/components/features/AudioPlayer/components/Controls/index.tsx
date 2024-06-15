import TrackControl from "./TrackControl";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

const Controls = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-x-10">
                <TrackControl />
                <VolumeControl />
            </div>
            <ProgressBar />
        </>
    );
};

export default Controls;
