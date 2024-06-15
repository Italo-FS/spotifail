import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import CardMusic, { ICardMusic } from "../CardMusic/Index";
import Icon from "@components/shared/Icon";

interface ICardMusicDeckProps {
    cardMusics?: ICardMusic[];
    notFoundMessage?: string;
}

export default function CardMusicDeck({ cardMusics, notFoundMessage }: ICardMusicDeckProps) {
    if (!cardMusics || cardMusics.length < 1)
        return <Typography className="text-center">{notFoundMessage}</Typography>;

    const pages = divideArray(cardMusics, 8)

    return (
        <Carousel
            className=""
            navigation={() => (<></>)}
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                    <Icon icon="chevronLeft" size="2xl" className="dark:text-white" />
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                    <Icon icon="chevronRight" size="2xl" className="dark:text-white" />
                </IconButton>
            )}
        >
            {
                pages.map((page, index) => <DeckPage cardMusics={page} key={index} />)
            }
        </Carousel >
    )
}

function DeckPage({ cardMusics }: ICardMusicDeckProps) {
    if (!cardMusics) return

    return (
        <div className="flex gap-x-2 -z-10 px-20">
            {cardMusics.map((card, index) => (
                (card.title != undefined) ? <CardMusic variant='bigVertical' {...card} key={index} /> : <div key={index} className="w-full"></div>
            ))}
        </div>
    )
}

function divideArray(array: ICardMusic[], maxSize: number) {
    const lesserArrays = [];

    for (let i = 0; i < array.length; i += maxSize) {
        const minorArray = array.slice(i, i + maxSize);
        while (minorArray.length < maxSize) {
            minorArray.push({});
        }
        lesserArrays.push(minorArray);
    }

    console.log(lesserArrays)

    return lesserArrays;
}