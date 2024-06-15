import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { useAuthContext } from "@hooks/AuthContext";
import { useAudioContext } from "../../hooks/AudioContext";
import { IPlaylistProps } from "../../types";
import Tip from "@components/shared/Tip";
import PlayerIconButton from "../PlayerIconButton";

export default function AddToPlaylist() {
    const { isAuthenticated } = useAuthContext();
    const { userPlaylists, addTrackToUserPlaylist } = useAudioContext();

    const { currentTrack } = useAudioPlayer();

    const handleToAdd = async (playlistId: number) => {
        // try {
        if (!currentTrack) return
        addTrackToUserPlaylist(playlistId, currentTrack.id);
        // } catch (error) {
        //     console.error('Error adding track to playlist: ', error);
        // }
    };

    return (
        <>
            {isAuthenticated ? (
                <Tip text="Adicionar a playlist">
                    <Menu>
                        <MenuHandler>
                            <PlayerIconButton icon="add" />
                        </MenuHandler>
                        <MenuList>
                            {userPlaylists.map((playlist: IPlaylistProps) => (
                                <MenuItem
                                    key={playlist.id}
                                    onClick={() => handleToAdd(playlist.id)}
                                >
                                    {playlist.title}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu >
                </Tip>
            ) : (
                <></>
            )}
        </>
    );
}