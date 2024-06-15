import { IPlaylistProps, ITrackProps } from "@components/features/AudioPlayer/types";
import { SearchStringArrayInStringArray, StringComparison, shuffleArray } from "./utils";

export interface ICreatePlaylistByProps {
    album?: string;
    artist?: string;
    genre?: string;
    initialYear?: string;
    endingYear?: string;
}

export function buildPlaylistById(playlist: IPlaylistProps) {
    const shuffledTracks = shuffleArray(playlist.tracks);
    return shuffledTracks;
}

// Função para criar uma playlist de músicas semelhantes
export function buildSimilarPlaylistByMusic(musics: ITrackProps[], track: ITrackProps) {
    const { artist, album, genres } = track;

    // Filtrar faixas semelhantes com base no artista, álbum e gênero
    const similarTracks = musics.filter((t) => {
        const isSameArtist = StringComparison(artist, t.artist);
        const isSameAlbum = StringComparison(album, t.album);
        const hasCommonGenre = SearchStringArrayInStringArray(genres, t.genres)
        return ((isSameArtist || isSameAlbum || hasCommonGenre) && t.id != track.id);
    });

    const shuffledTracks = shuffleArray(similarTracks);

    return [track, ...shuffledTracks];
}

// Função para criar uma playlist a partir de uma busca
export function createPlaylistBy(musics: ITrackProps[], { album, artist, genre: genres, initialYear, endingYear }: ICreatePlaylistByProps) {
    if (!album && !artist && !genres && !initialYear && !endingYear) return musics

    const initialYearInt = initialYear ? parseInt(initialYear) : null;
    const endingYearInt = endingYear ? parseInt(endingYear) : null;

    const filteredTracks = musics.filter((t: ITrackProps) => {
        // const isSameAlbum = album ? t.album === album : true;
        // const isSameArtist = artist ? t.artist === artist : true;
        // const isSameGenre = genre && t.genre ? SearchStringInArray(genre, t.genre) : true;
        // const isAboveInitialYear = initialYearInt && t.year ? t.year >= initialYearInt : true;
        // const isBellowEndingYear = endingYearInt && t.year ? t.year <= endingYearInt : true;

        const isSameAlbum = StringComparison(album, t.album);
        const isSameArtist = StringComparison(artist, t.artist);
        const isSameGenre = SearchStringArrayInStringArray([genres], t.genres);
        const isAboveInitialYear = initialYearInt && t.year ? t.year >= initialYearInt : true;
        const isBellowEndingYear = endingYearInt && t.year ? t.year <= endingYearInt : true;

        return (isSameAlbum && isSameArtist && isSameGenre && isAboveInitialYear && isBellowEndingYear);
    });


    const shuffledTracks = shuffleArray(filteredTracks);
    return shuffledTracks;
}

// export function getMusicById(musics: ITrackProps[], id: string) {
//     const track = musics.find(x => x.id.toString() == id)
//     if (!track) throw new Error("track not found.");
//     return track;
// }

// export async function getPlaylistById(allPlayLists: IPlaylistProps[], id: string) {
//     const playlist = allPlayLists.find(x => x.id.toString() == id)
//     if (!playlist) throw new Error("playlist not found.");
//     return playlist;
// }