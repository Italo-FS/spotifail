import { IPlaylistProps } from "@components/features/AudioPlayer/types";
import { useUserPlaylistContext } from "../hooks/UserPlaylistContext";
import { Avatar, CardBody, IconButton } from "@material-tailwind/react";
import { Card } from "@components/shared/Card";
import Icon from "@components/shared/Icon";
import Typography from "@components/shared/Typography";

interface IUserPlaylistCardProps {
    playlist: IPlaylistProps
}

export default function UserPlaylistCard({ playlist }: IUserPlaylistCardProps) {
    const {
        handleDeletePlaylist,
        handleDeleteTrack,
    } = useUserPlaylistContext();

    return (
        <Card className="w-96 p-2">
            <CardBody>
                <div className="flex justify-between items-center">
                    <Typography variant="h5">{playlist.title}</Typography>
                    <IconButton onClick={() => handleDeletePlaylist(playlist.id)} color='red'><Icon icon="delete" /></IconButton>
                </div>
                <hr className="my-1" />
                <div>
                    {playlist.tracks.map((track) => (
                        <div className="flex justify-between items-center my-1" key={track.id_playlist_track}>
                            <div className="flex items-center gap-1">
                                <Avatar src={track.thumbnail} size="sm" variant="rounded" />
                                <div className="truncate w-60">
                                    <Typography >{track.title}</Typography>
                                    <Typography variant="small">{track.artist}</Typography>
                                </div>
                            </div>
                            <IconButton onClick={() => handleDeleteTrack(track.id_playlist_track)} color='red' size="sm"><Icon icon="delete" /></IconButton>
                        </div>
                    ))}
                </div>
            </CardBody >
        </Card>
    )
}