import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();

    return {
        systemTheme,
        theme,
        setTheme,
    };
}
