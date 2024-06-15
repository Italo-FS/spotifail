import { useDefaultContext } from "@hooks/DefaultContext";
import { ButtonProps, Button as MaterialButton } from "@material-tailwind/react";
import { forwardRef } from "react";

const Button = forwardRef(function Button({ children, color, ...rest }: ButtonProps, ref) {
    const { color: themeColor } = useDefaultContext()
    return (
        <MaterialButton
            ref={ref}
            color={color ?? themeColor}
            {...rest}
        >
            {children}
        </MaterialButton>
    )
});

export default Button;