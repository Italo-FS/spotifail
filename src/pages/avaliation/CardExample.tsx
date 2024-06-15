import Link from "next/link";
import Image from "next/image";
import { IconButton, Typography } from "@material-tailwind/react";
import Icon from "@components/shared/Icon";
import { getPlaylistById } from "@/utils/player_logic";
import { ICreatePlaylistByProps, createPlaylist } from "../../utils/player_logic";
import { useAudioContext } from "@components/features/AudioPlayer/hooks/AudioContext";
import { MouseEventHandler } from "react";

interface ICardProps {
    title: string;
    description: string;
    thumbnail: string;
    onClick: MouseEventHandler;
}

export function VerticalMusicCard({ onClick, thumbnail, title, description }: ICardProps) {
    return (
        <div onClick={onClick} className="cursor-pointer">
            <div className="border border-red-400 p-2 aspect-2/3 group max-h-[300px] max-w-[200px]">
                <div className="border border-orange-400 relative aspect-square">
                    <Image src={thumbnail} alt="Imagem" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false} />
                    <div className="absolute bottom-2 right-2 group-hover:block hidden">
                        <IconButton className="bg-green-400"><Icon icon="play" /></IconButton>
                    </div>
                </div>
                <Typography variant="h6" className="line-clamp-2">{title}</Typography>
                <Typography variant="small" className="truncate">{description}</Typography>
            </div>
        </div>
    )
}

export function VerticalPlaylistCard({ playlistId }: { playlistId: string }) {
    const { updateTracklist } = useAudioContext();
    const playlist = getPlaylistById(playlistId);

    return (
        <div onClick={() => updateTracklist(createPlaylist({ playlistId: playlistId }))} className="cursor-pointer">
            <div className="border border-red-400 p-2 aspect-2/3 group max-h-[300px] max-w-[200px]">
                <div className="border border-orange-400 relative aspect-square">
                    <Image src={playlist.thumbnail} alt="Imagem" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false} />
                    <div className="absolute bottom-2 right-2 group-hover:block hidden">
                        <IconButton className="bg-green-400"><Icon icon="play" /></IconButton>
                    </div>
                </div>
                <Typography variant="h6" className="line-clamp-2">{playlist.title}</Typography>
            </div>
        </div>
    )
}

interface IVerticalGenreCardProps {
    title: string;
    thumbnail: string;
    searchParameters: ICreatePlaylistByProps;
}

export function VerticalGenreCard({ title, thumbnail, searchParameters }: IVerticalGenreCardProps) {
    const { updateTracklist } = useAudioContext();
    return (
        <div onClick={() => updateTracklist(createPlaylist(searchParameters))} className="cursor-pointer">
            <div className="border border-red-400 p-2 aspect-2/3 group max-h-[300px] max-w-[200px]">
                <div className="border border-orange-400 relative aspect-square">
                    <Image src={thumbnail} alt="Imagem" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false} />
                    <div className="absolute bottom-2 right-2 group-hover:block hidden">
                        <IconButton className="bg-green-400"><Icon icon="play" /></IconButton>
                    </div>
                </div>
                <Typography variant="h6" className="line-clamp-2">{title}</Typography>
            </div>
        </div>
    )
}

export function HorizontalCard() {
    <Link href="/player?id=16">
        <div className="border border-red-400 p-2 fluid group flex items-center">
            <div className="border border-orange-400 p-1">
                <Image src="/images/covers/R-541261-1487429918-9887.jpg" alt="Imagem" width={100} height={100} priority={false} />
            </div>
            <div className="border border-red-400 p-1 mt-1">
                <div className="border border-blue-400 p-1">Track Title</div>
                <div className="border border-green-400 p-1">Track info</div>
            </div>
            <div className="absolute right-2 group-hover:block hidden">
                <IconButton className="bg-green-400"><Icon icon="play" /></IconButton>
            </div>
        </div>
    </Link>
}