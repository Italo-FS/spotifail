import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { IPlaylistProps, ITrackProps } from "../types";
import { axiosGet, axiosPost } from "@/logic/bridge";
import { useDefaultContext } from "@hooks/DefaultContext";

const AudioContext = createContext<any>(null);
export const useAudioContext = () => {
    return useContext(AudioContext);
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const { showError } = useDefaultContext()

    const mainContentRef = useRef<HTMLElement>(null);

    const [tracks, setTracks] = useState<ITrackProps[]>([]);
    const [musics, setMusics] = useState<ITrackProps[]>([]);
    const [userPlaylists, setUserPlaylists] = useState<IPlaylistProps[]>([]);
    const [allPlaylists, setAllPlaylists] = useState<IPlaylistProps[]>([]);

    const updateTracklist = (newPlaylist: ITrackProps[]) => {
        setTracks(newPlaylist);
    }

    const addTrackToUserPlaylist = (id_playlist: number, id_track: number) => {
        addTrackToPlaylist(id_playlist, id_track)
            .then(response => {
                refreshPlaylists();
            }).catch(error => {
                showError({
                    header: 'Erro',
                    body: error.message,
                });
            });
    }

    useEffect(() => {
        refreshAllData();
    }, []);

    useEffect(() => {
        getPublicOnlyPlaylists().then(response => setAllPlaylists([...userPlaylists, ...response]));
    }, [userPlaylists])

    async function refreshAllData() {
        try {
            getAllMusics().then(response => setMusics(response));
            getUserPlaylists().then(response => setUserPlaylists(response));
            getAllPlaylists().then(response => setAllPlaylists(response));
        } catch (error) {
            console.error('Error fetching user data: ', error);
        }
    };

    async function refreshPlaylists() {
        try {
            getUserPlaylists().then(response => setUserPlaylists(response));
        } catch (error) {
            console.error('Error fetching user playlists: ', error);
        }
    };

    return (
        <AudioContext.Provider
            value={{
                tracks,
                musics, setMusics,
                userPlaylists, setUserPlaylists,
                allPlaylists, setAllPlaylists,
                updateTracklist,
                mainContentRef,
                refreshPlaylists,
                addTrackToUserPlaylist,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

async function getAllPlaylists() {
    try {
        const publicPlaylists = await getPublicOnlyPlaylists();
        const userPlaylists = await getUserPlaylists();
        return [...publicPlaylists, ...userPlaylists];
    } catch (error) {
        console.error("Error fetching playlists: ", error);
        return [];
    }
}

async function getUserPlaylists() {
    try {
        const response = await axiosGet({ route: '/playlist/user' })
        return response;
    } catch (error) {
        console.error("Error fetching user-only playlists: ", error);
        return [];
    }
}

async function getPublicOnlyPlaylists() {
    try {
        const response = await axiosGet({ route: '/playlist/public' });
        return response;
    } catch (error) {
        console.error("Error fetching public playlists: ", error);
        return [];
    }
}

async function getAllMusics() {
    try {
        const response = await axiosGet({ route: '/track' });
        return response;
    } catch (error) {
        console.error("Error fetching public playlists: ", error);
        return [];
    }
}

async function addTrackToPlaylist(id_playlist: number, id_track: number) {
    const response = await axiosPost({
        route: `/playlist-track`,
        data: { id_playlist, id_track },
    });
    return response;
}