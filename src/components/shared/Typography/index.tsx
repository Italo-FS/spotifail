import { Typography as MaterialTypography, TypographyProps } from "@material-tailwind/react";
import { RefObject, forwardRef } from "react";

const Typography = forwardRef(function Typography({ children, className, variant, ...rest }: TypographyProps, ref) {
    return (
        <MaterialTypography
            ref={ref as RefObject<HTMLElement>}
            variant={variant}
            className={`
                ${(variant && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) && 'text-slate-800 dark:text-gray-100'}
                ${(variant && ['small'].includes(variant)) && 'text-gray-700 dark:text-gray-400'}
                ${!variant && 'font-normal text-gray-600 dark:text-gray-400'}
                ${className}
            `}
            {...rest}
        >
            {children}
        </MaterialTypography>
    )
});

export default Typography;