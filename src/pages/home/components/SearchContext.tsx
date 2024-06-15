import { shuffleArray } from "@/utils/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { cardMusics, cardPlaylist } from "../logic";
import { useAudioContext } from "@components/features/AudioPlayer/hooks/AudioContext";
import { axiosGet } from "@/logic/bridge";

export const SearchContext = createContext<any>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const { allPlaylists, updateTracklist } = useAudioContext();

    const [displayedTracks, setDisplayedTracks] = useState({});
    const [displayedFilters, setDisplayedFilters] = useState({});
    const [displayedPlaylists, setDisplayedPlaylists] = useState({});

    async function searchMusics(searchString: string) {
        const musics = await searchedTracks(searchString);
        const filters = await searchedFilters(searchString);
        const playlists = await searchedPlaylists(searchString);

        setDisplayedTracks(shuffleArray(cardMusics(musics, updateTracklist)));
        setDisplayedFilters(shuffleArray(cardPlaylist(filters, updateTracklist)));
        setDisplayedPlaylists(shuffleArray(cardPlaylist(playlists, updateTracklist)));
    }

    useEffect(() => {
        searchMusics('');
    }, [allPlaylists])

    return (
        <SearchContext.Provider
            value={{
                displayedTracks, setDisplayedTracks,
                displayedFilters, setDisplayedFilters,
                displayedPlaylists, setDisplayedPlaylists,
                searchMusics
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = () => {
    return useContext(SearchContext);
};

async function searchedTracks(searchString: string) {
    const treatedSearchString = searchString.trim().toLowerCase();
    return axiosGet({ route: `/track/search?text=${treatedSearchString}` })
}

async function searchedFilters(searchString: string) {
    const treatedSearchString = searchString.trim().toLowerCase();
    return axiosGet({ route: `/filter/search?text=${treatedSearchString}` })
}

async function searchedPlaylists(searchString: string) {
    const treatedSearchString = searchString.trim().toLowerCase();
    return axiosGet({ route: `/playlist/search?text=${treatedSearchString}` })
}
