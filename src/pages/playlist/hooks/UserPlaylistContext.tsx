import { useAudioContext } from "@components/features/AudioPlayer/hooks/AudioContext";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { axiosDelete, axiosPost } from "@/logic/bridge";

interface ICreatePlaylist {
    title: string;
    description: string;
    thumbnail: string
}

export const UserPlaylistContext = createContext<any>(null);

export const UserPlaylistProvider = ({ children }: { children: React.ReactNode }) => {
    const { userPlaylists, refreshPlaylists } = useAudioContext();

    const [newPlaylistTitle, setNewPlaylistTitle] = useState('');

    const newPlaylistTitleInputRef = useRef(null);

    const handleAddPlaylist = async () => {
        await addPlaylist({
            title: newPlaylistTitle,
            description: newPlaylistTitle,
            thumbnail: ''
        }).then(response => {
            // console.log(newPlaylistTitleInputRef)
            refreshPlaylists();
            // setNewPlaylistTitle('');
            // if (newPlaylistTitleInputRef.current) {
            // }
        }).catch(response => {

        });
        console.log(newPlaylistTitleInputRef)

    };

    const handleDeletePlaylist = async (playlistId: number) => {
        try {
            await deletePlaylist(playlistId);
            refreshPlaylists();
        } catch (error) {
            console.error('Error deleting playlist: ', error);
        }
    };

    const handleDeleteTrack = async (id_playlist_track: number) => {
        try {
            await removeTrackFromPlaylist(id_playlist_track);
            refreshPlaylists();
        } catch (error) {
            console.error('Error deleting playlist: ', error);
        }
    };

    return (
        <UserPlaylistContext.Provider
            value={{
                newPlaylistTitle, setNewPlaylistTitle,
                handleAddPlaylist,
                handleDeletePlaylist,
                handleDeleteTrack,
                newPlaylistTitleInputRef,
            }}
        >
            {children}
        </UserPlaylistContext.Provider>
    );
};

export const useUserPlaylistContext = () => {
    return useContext(UserPlaylistContext);
};

async function removeTrackFromPlaylist(id_playlist_track: number) {
    return axiosDelete({
        route: `/playlist-track/${id_playlist_track}`,
    });
}

async function addPlaylist({ title, description, thumbnail }: ICreatePlaylist) {
    return axiosPost({
        route: `/playlist`,
        data: { title, description, thumbnail },
    });
}

async function deletePlaylist(playlist_id: number) {
    return axiosDelete({
        route: `/playlist/${playlist_id}`,
    });
}