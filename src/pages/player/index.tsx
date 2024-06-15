import { Section } from "@components/shared/Section";
import AudioPlayer from "@components/features/AudioPlayer";
import { useSearchParams } from 'next/navigation'

import { createPlaylist } from "../../utils/player_logic";
import { useEffect, useState } from "react";

const Player = () => {
    const searchParams = useSearchParams()

    if (!searchParams) return
    const musicInfo = {
        musicId: (searchParams.get('id') || undefined),
        playlistId: (searchParams.get('pplaylist') || undefined),
        album: (searchParams.get('album') || undefined),
        artist: (searchParams.get('artist') || undefined),
        genre: (searchParams.get('genre') || undefined),
        initialYear: (searchParams.get('initial_year') || undefined),
        endingYear: (searchParams.get('ending_year') || undefined),
    };
    const selectedTracks = createPlaylist({ ...musicInfo });


    // const [playingTracks, setPlayingTracks] = useState([]);

    // useEffect(() => {
    //     setPlayingTracks(createPlaylist({ ...musicInfo }));
    // }, [musicInfo])

    return (
        <>
            {/* <Section>
                <AudioPlayer tracks={selectedTracks} />
            </Section> */}
        </>
    );
};

export default Player;
