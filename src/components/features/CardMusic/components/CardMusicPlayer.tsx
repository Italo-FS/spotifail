import Icon from "@components/shared/Icon";
import { IconButton } from "@material-tailwind/react";

const CardMusicPlayer = () => {
    return (
        <IconButton
            className="rounded-full bg-green-500 lg"


        >
            <Icon icon="play" size="lg" className="text-black" />
        </IconButton>
    );
};

export default CardMusicPlayer;
