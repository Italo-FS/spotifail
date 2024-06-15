import filters from "@mock/data/filters.json";
import { IPlaylistProps, ITrackProps } from "@components/features/AudioPlayer/types";
import { buildPlaylistById, buildSimilarPlaylistByMusic, createPlaylistBy } from "@/utils/player_logic";

export function cardMusics(musics: ITrackProps[], updateTracklist: Function) {
    return musics.map((track: ITrackProps) => {
        const loadTracks = () => {
            const tracks = buildSimilarPlaylistByMusic(musics, track);
            updateTracklist(tracks)
        }

        return {
            title: track.title,
            description: track.album,
            thumbnail: track.thumbnail,
            variant: 'bigVertical',
            onClick: loadTracks,
        }
    });
}

// export function cardFilters(filters: IPlaylistProps[], updateTracklist: Function) {
//     return filters.map(filter => {
//         const loadTracks = async () => {
//             const tracks = filter.
//             updateTracklist(tracks)
//         }

//         return {
//             title: filter.title,
//             description: filter.description,
//             thumbnail: filter.thumbnail,
//             variant: 'bigVertical',
//             onClick: loadTracks,
//         }
//     });
// }

export function cardPlaylist(playlists: IPlaylistProps[], updateTracklist: Function) {
    return playlists.map((playlist: IPlaylistProps) => {
        const loadTracks = () => {
            const tracks = buildPlaylistById(playlist);
            updateTracklist(tracks)
        }

        return {
            title: playlist.title,
            description: playlist.description,
            thumbnail: playlist.thumbnail,
            variant: 'bigVertical',
            onClick: loadTracks,
        }
    });
}