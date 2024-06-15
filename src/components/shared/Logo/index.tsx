import { Typography } from "@material-tailwind/react";
import Image from "next/image";

interface logoProps {
    className?: string;
}

export const SimpleLogo = ({ className }: logoProps) => {
    return (
        <Image
            src="/spotifail.svg"
            alt="Spotifail Logo"
            className={className}
            width={32}
            height={32}
            priority
        />
    );
};

export const HorizontalLogoWithLabel = () => {
    return (
        <Typography className="mr-4 cursor-pointer py-1.5 font-medium flex items-center gap-2">
            <SimpleLogo />
            <strong className="text-slate-800 dark:text-slate-50">Spotifail</strong>
        </Typography>
    );
};
