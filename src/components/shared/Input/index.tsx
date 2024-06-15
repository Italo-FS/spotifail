import { useDefaultContext } from "@hooks/DefaultContext";
import { InputProps, Input as MaterialInput } from "@material-tailwind/react";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ children, register, color, ...rest }: InputProps & { register?: () => any }, ref) {
    const { color: themeColor } = useDefaultContext();
    return (
        <>
            <MaterialInput
                ref={ref}
                color={color ?? themeColor}
                {...(register && register())}
                {...rest}
            >
                {children}
            </MaterialInput>
        </>
    )
});

export default Input;