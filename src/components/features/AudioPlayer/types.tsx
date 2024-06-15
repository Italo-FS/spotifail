export interface ITrackProps {
    id: number;
    title: string;
    artist: string;
    album?: string;
    year?: number;
    genres?: string[];
    thumbnail?: string;
    src: string;
}

export interface IPlaylistTrack extends ITrackProps {
    id_playlist_track: number;
}

export interface IPlaylistProps {
    id: number;
    user_id?: number;
    title?: string;
    description?: string;
    thumbnail?: string;
    tracks: IPlaylistTrack[];
}
