import { Card as MaterialCard, CardProps } from "@material-tailwind/react";

export function Card({ color, shadow, className, children, ...rest }: CardProps) {
    return (
        <MaterialCard
            color={color ?? "white"}
            shadow={shadow ?? true}
            className={`p-4 mx-auto my-2 sm:m-4 w-fit backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 dark:bg-opacity-80 bg-gray-100 dark:bg-zinc-800 ${className}`}
            {...rest}
        >
            {children}
        </MaterialCard>
    )
}
