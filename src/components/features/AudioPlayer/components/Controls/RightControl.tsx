import AddToPlaylist from "./AddToPlaylist";
import ShowPlaylist from "./ShowPlaylist";
import VolumeControl from "./VolumeControl";

interface IRightControlProps {
    className?: string;
}

export default function RightControl({ className }: IRightControlProps) {
    return (
        <div className={`flex items-center flex-1 justify-end gap-x-4 ${className}`}>
            <AddToPlaylist />
            <ShowPlaylist />
            <VolumeControl />
        </div>
    );
}
