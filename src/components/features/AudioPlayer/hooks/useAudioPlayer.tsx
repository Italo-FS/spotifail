import { useState, useRef, useCallback, useEffect, createContext } from "react";
import { useAudioContext } from "./AudioContext";
import { ITrackProps } from "../types";

export const AudioContext = createContext<any>(null);

export function useAudioPlayer() {
    const { tracks, mainContentRef } = useAudioContext();

    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLInputElement>(null);
    const playAnimationRef = useRef<number>();
    const trackListRef = useRef<HTMLTableElement>(null);
    const audioPlayerWrapRef = useRef<HTMLElement>();

    const [trackIndex, setTrackIndex] = useState<number>(0);
    const [currentTrack, setCurrentTrack] = useState<ITrackProps>();
    const [timeProgress, setTimeProgress] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(100);
    const [muteVolume, setMuteVolume] = useState(false);

    const [isTracklistVisible, setIsTracklistVisible] = useState<boolean>(false);
    const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const togglePlaylist = () => {
        setIsTracklistVisible((prev) => !prev);
    };

    const play = () => {
        if (!audioRef.current) return;
        setIsPlaying(true);
        updateProgressBar();
        audioRef.current.play();
    }

    const continuePlaying = () => {
        if (!audioRef.current) return;
        if (isPlaying) play();
    }

    const skipForward = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime += 15;
    };

    const skipBackward = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime -= 15;
    };

    const handlePrevious = () => {
        if (!audioRef.current) return;
        //Retorna ao início da música caso esteja com mais de 3 segundos de progresso.
        if (audioRef.current.currentTime > 3) {
            audioRef.current.currentTime = 0;
        } else {
            if (trackIndex === 0) {
                let lastTrackIndex = tracks.length - 1;
                setTrackIndex(lastTrackIndex);
                setCurrentTrack(tracks[lastTrackIndex]);
            } else {
                setTrackIndex((prev: number) => prev - 1);
                setCurrentTrack(tracks[trackIndex - 1]);
            }
        }
    };

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev: number) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    const onLoadedMetadata = () => {
        if (!audioRef.current) return;
        if (!progressBarRef || !progressBarRef.current) return;
        const seconds: number = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds.toString();
    };

    const handleProgressChange = () => {
        if (!progressBarRef.current) return;
        if (!audioRef.current) return;
        audioRef.current.currentTime = parseInt(progressBarRef.current.value);
    };

    const updateProgressBar = useCallback(() => {
        if (!audioRef.current) return;
        if (!progressBarRef.current) return;
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime.toString();
        playAnimationRef.current = requestAnimationFrame(updateProgressBar);
    }, [audioRef, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(updateProgressBar);
    }, [isPlaying, audioRef, updateProgressBar]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = muteVolume;
        }
    }, [volume, audioRef, muteVolume]);

    useEffect(() => {
        if (!currentTrack) return;
        setTrackIndex(tracks.indexOf(currentTrack));
        continuePlaying();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTrack])

    useEffect(() => {
        if (!tracks.length) return;
        setCurrentTrack(tracks[0]);
        setIsPlayerVisible(true);
        setIsPlaying(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tracks])

    useEffect(() => {
        if (!audioPlayerWrapRef.current) return;
        if (isPlayerVisible) {
            audioPlayerWrapRef.current.classList.remove('hidden');
        } else {
            audioPlayerWrapRef.current.classList.add('hidden');
        }
    }, [isPlayerVisible])

    useEffect(() => {
        if (!trackListRef.current) return
        if (!mainContentRef.current) return

        if (isTracklistVisible) {
            mainContentRef.current.classList.add('hidden');
            trackListRef.current.classList.remove('hidden');
        } else {
            mainContentRef.current.classList.remove('hidden');
            trackListRef.current.classList.add('hidden');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTracklistVisible])

    useEffect(() => {
        if (!audioRef.current) return
        if (isPlaying && audioRef.current.paused) {
            play();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTrack, isPlaying])

    return {
        tracks,
        audioRef,
        progressBarRef,
        playAnimationRef,
        trackListRef,
        trackIndex, setTrackIndex,
        currentTrack, setCurrentTrack,
        timeProgress, setTimeProgress,
        duration, setDuration,
        isPlaying, setIsPlaying,
        volume, setVolume,
        muteVolume, setMuteVolume,
        togglePlayPause,
        skipForward,
        skipBackward,
        handlePrevious,
        handleNext,
        onLoadedMetadata,
        handleProgressChange,
        repeat: updateProgressBar,
        isTracklistVisible,
        togglePlaylist,
        audioPlayerWrapRef,
    };
}
