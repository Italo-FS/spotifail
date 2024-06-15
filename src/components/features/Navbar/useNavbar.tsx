import React, { useState, createContext } from "react";
import { routes } from "./routes";

export const NavbarContext = createContext<any>(null);

export function useStickyNavbar() {
    const [openNav, setOpenNav] = useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return {
        openNav,
        setOpenNav,
        routes,
    };
}
