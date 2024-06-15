import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

import * as SolidIcons from "@fortawesome/free-solid-svg-icons";

const Icons = {
    forwardStep: SolidIcons.faForwardStep,
    backwardStep: SolidIcons.faBackwardStep,
    backward: SolidIcons.faBackward,
    forward: SolidIcons.faForward,
    play: SolidIcons.faPlay,
    pause: SolidIcons.faPause,
    repeat: SolidIcons.faRepeat,
    music: SolidIcons.faMusic,
    volumeHigh: SolidIcons.faVolumeHigh,
    volumeLow: SolidIcons.faVolumeLow,
    volumeOff: SolidIcons.faVolumeOff,
    volumeMuted: SolidIcons.faVolumeXmark,
    moon: SolidIcons.faMoon,
    sun: SolidIcons.faSun,
    lightBulb: SolidIcons.faLightbulb,
    playlist: SolidIcons.faList,
    chevronDown: SolidIcons.faChevronDown,
    chevronUp: SolidIcons.faChevronUp,
    chevronRight: SolidIcons.faChevronRight,
    chevronLeft: SolidIcons.faChevronLeft,
    user: SolidIcons.faUser,
    config: SolidIcons.faGear,
    signOut: SolidIcons.faPowerOff,
    delete: SolidIcons.faTrashCan,
    add: SolidIcons.faPlus,
};

export type IconsProp = keyof typeof Icons;

interface IIconProps {
    className?: string;
    icon: IconsProp;
    size?: SizeProp;
}

export default function Icon({ icon, ...rest }: Omit<FontAwesomeIconProps, "icon"> & IIconProps) {
    return (
        <FontAwesomeIcon icon={Icons[icon]} {...rest} />
    );
}