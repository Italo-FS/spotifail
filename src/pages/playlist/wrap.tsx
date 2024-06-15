import { IconButton } from '@material-tailwind/react';
import { useAudioContext } from '@components/features/AudioPlayer/hooks/AudioContext';
import { IPlaylistProps, ITrackProps } from '@components/features/AudioPlayer/types';
import { useUserPlaylistContext } from './hooks/UserPlaylistContext';
import UserPlaylistCard from './components/UserPlaylistCard';
import Input from '@components/shared/Input';
import Icon from '@components/shared/Icon';
import { useEffect } from 'react';

export default function UserPlaylistsWrap() {
    const { userPlaylists, refreshPlaylists } = useAudioContext();
    const {
        setNewPlaylistTitle,
        handleAddPlaylist,
        newPlaylistTitleInputRef,
    } = useUserPlaylistContext();

    useEffect(() => {
        refreshPlaylists();
    }, []);

    return (
        <div>
            <div className='flex gap-1 m-auto max-w-screen-md mt-3'>
                <Input
                    type="text"
                    name="newPlaylistTitle"
                    onChange={(e) => setNewPlaylistTitle(e.target.value)}
                    ref={newPlaylistTitleInputRef}
                    label='Playlist'
                />
                <IconButton onClick={handleAddPlaylist} color='green' className='rounded-full'><Icon icon="add" /></IconButton>
            </div>
            <div className='flex flex-wrap flex-row gap-1'>
                {userPlaylists.map((playlist: IPlaylistProps) => (
                    <UserPlaylistCard playlist={playlist} key={playlist.id} />
                ))}
            </div>
        </div>
    );
}
