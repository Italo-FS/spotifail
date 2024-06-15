import { Tooltip, Typography } from "@material-tailwind/react";

interface ITipProps {
    children: React.ReactNode;
    title?: string;
    text: string;
}

export default function Tip({ children, title, text }: ITipProps) {
    return (
        <Tooltip
            placement="bottom"
            className="border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 px-2 py-1 shadow-xl shadow-black/10"
            content={
                <div>
                    {title &&
                        <Typography className="font-medium">
                            {title}
                        </Typography>
                    }
                    <Typography
                        variant="small"
                        className="font-normal opacity-80"
                    >
                        {text}
                    </Typography>
                </div>
            }
        >
            <div>
                {children}
            </div>
        </Tooltip>
    );
}