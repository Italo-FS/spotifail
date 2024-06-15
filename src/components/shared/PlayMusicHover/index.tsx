interface IPlayMusicHover {
    children: React.ReactNode;
}
const PlayMusicHover = ({ children }: IPlayMusicHover) => {
    return <div>{children}</div>;
};

export default PlayMusicHover;
