"use client";
import Icon from "@components/shared/Icon";
import { useThemeSwitch } from "@hooks/useThemeSwitch";
import { IconButton } from "@material-tailwind/react";

export default function ThemeSwitch() {
    const themeSwitch = useThemeSwitch();

    return (
        <IconButton variant="text" onClick={() => (
            themeSwitch.theme == "dark"
                ? themeSwitch.setTheme("light")
                : themeSwitch.setTheme("dark")
        )}>

            <Icon icon={themeSwitch.theme == "light" ? "moon" : "sun"} className="text-base dark:text-gray-50" />
        </IconButton>
    );
}
