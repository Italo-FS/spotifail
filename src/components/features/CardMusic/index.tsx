import Mosaic from "@components/shared/Mosaic/index";
import Image from "next/image";
import { Card } from "@components/shared/Card";
import CardMusicTitle from "./components/CardMusicTitle";
import CardMusicPlayer from "./components/CardMusicPlayer";
import Typography from "@components/shared/Typography";

const defaultCover = '/images/covers/000.jpg'

export interface ICardMusic {
    id?: number;
    title: string;
    description: string;
    thumbnail: string;
    src?: string;
    onClick?: Function;
    // searchParams?: ICreatePlaylistByProps;
    variant?: 'vertical' | 'horizontal' | 'bigVertical';
    className?: string;
}

function CardMusic(props: ICardMusic) {
    const variant = props.variant || 'vertical'
    if (variant == 'horizontal') return <CardMusicHorizontal {...props} />
    if (variant == 'vertical') return <CardMusicVertical {...props} />
    if (variant == 'bigVertical') return <CardMusicBigVertical {...props} />
};

export default CardMusic;

const CardMusicHorizontal = ({ title, description, thumbnail, onClick, className }: ICardMusic) => {
    return (
        <Card className={`flex flex-row justify-start border border-black ${className}`}
            onClick={onClick ? () => onClick : () => { }}>
            <div className="m-1 border border-red-700"><Mosaic thumbnail={thumbnail} HW={48} alt={title} /></div>
            <div className="flex-1 flex flex-row justify-between items-center">
                <div className="border border-green-700"><CardMusicTitle title={title} description={description} /></div>
            </div>
        </Card>
    );
};

const CardMusicVertical = ({ title, description, thumbnail, className, onClick }: ICardMusic) => {
    return (
        <Card className={`p-2 flex flex-col justify-center border border-pink-700 w-48 aspect-[3/4] group ${className}`}
            onClick={onClick ? () => onClick : () => { }}>

            <div className="relative flex w-fit justify-center   mx-auto border border-red-700">
                <Mosaic thumbnail={thumbnail} HW={159.6} alt={title} />
                <div className="absolute bottom-2 right-2 border border-blue-700 hidden group-hover:block"><CardMusicPlayer /></div>
            </div>
            <div className="mt-1 mx-auto w-40">
                <div className="border border-green-700"><CardMusicTitle title={title} description={description} /></div>
            </div>

        </Card>
    );
};

const CardMusicBigVertical = ({ title, description, thumbnail, onClick, className }: ICardMusic) => {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <div onClick={handleClick} className={`py-4 w-full ${className}`} title={`${title}\n${description}`}>
            <div className='mt-1 relative aspect-[2/3] transition-transform transform hover:scale-105 active:scale-108'>
                <picture className='overflow-hidden'>
                    <Image src={thumbnail || defaultCover} alt={title} width={150} height={300} className="relative aspect-[4/7] object-cover" />
                </picture>
                <div className='absolute w-full h-full bottom-0 left-0 bg-gradient-to-b from-transparent from-10% to-black pointer-events-none'>
                    <div className='absolute bottom-0 w-full px-1'>
                        <Typography variant="h5" className='text-white dark:text-white line-clamp-2'>{title}</Typography>
                        <Typography className='text-gray-100 dark:text-gray-100 line-clamp-2'>{description}</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};