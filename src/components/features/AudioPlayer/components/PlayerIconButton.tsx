import { IconButton, IconButtonProps } from "@material-tailwind/react";
import Icon, { IconsProp } from "@components/shared/Icon";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { Ref, forwardRef } from "react";

interface IPlayerButtonProps extends Omit<IconButtonProps, 'children'> {
    icon: IconsProp;
    iconSize?: SizeProp;
    toggled?: boolean;
    children?: React.ReactNode;
}

const PlayerIconButton = forwardRef(function PlayerIconButton({ className, icon, iconSize, toggled, variant, children, ...rest }: IPlayerButtonProps, ref: Ref<HTMLButtonElement>) {
    return (
        <IconButton
            ref={ref}
            variant={variant ?? "text"}
            className="dark:text-slate-100 ${toggled && `bg-zinc-800 hover:bg-zinc-800`} ${className}"
            {...rest}
        >
            {children ?? <Icon icon={icon} size={iconSize ?? "lg"} />}
        </IconButton>
    )
});

export default PlayerIconButton;