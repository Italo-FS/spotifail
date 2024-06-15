import { UserPlaylistProvider } from "./hooks/UserPlaylistContext";
import UserPlaylistsWrap from "./wrap";

export default function UserPlaylists() {
    return (
        <UserPlaylistProvider>
            <UserPlaylistsWrap />
        </UserPlaylistProvider>
    );
}
