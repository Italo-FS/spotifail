import { Avatar, AvatarProps } from "@material-tailwind/react";

interface IThumbnailCoverProps extends AvatarProps { }

const DEFAULT_COVER = "/images/covers/default.jpg";

export default function Thumbnail({
    src,
    variant,
    size,
}: IThumbnailCoverProps) {
    src = src ? src : DEFAULT_COVER;
    return <Avatar src={src} alt="audio-cover" size={size} variant={variant} />;
}
