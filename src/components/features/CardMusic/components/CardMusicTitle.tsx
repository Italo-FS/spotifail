interface iCardMusicTitle {
    title: string
    description: string
}

const CardMusicTitle = ({ title, description }: iCardMusicTitle) => {
    return (
        <div
            className="flex-col content-around">
            <div><h5 className="font-semibold truncate">{title}</h5></div>
            <div><p className="font-light truncate">{description}</p></div>
        </div>

    );
};

export default CardMusicTitle;
