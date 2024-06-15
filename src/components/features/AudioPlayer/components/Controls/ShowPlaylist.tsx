import { useContext } from "react";
import { AudioContext } from "../../hooks/useAudioPlayer";
import Tip from "@components/shared/Tip";
import { Button, Tooltip } from "@material-tailwind/react";
import Icon from "@components/shared/Icon";
import PlayerIconButton from "../PlayerIconButton";

export default function ShowPlaylist() {
    const { togglePlaylist, isTracklistVisible } = useContext(AudioContext);

    return (
        <>
            <Tip text="Faixas">
                <PlayerIconButton onClick={togglePlaylist} icon="playlist" toggled={isTracklistVisible} />
            </Tip>
        </>
    )
}