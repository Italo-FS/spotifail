import { Navbar as MaterialNavbar } from "@material-tailwind/react";
import { NavbarContext, useStickyNavbar } from "./useNavbar";
import MainLogo from "./components/Logo";
import NavbarHiddenItems from "./components/NavbarIHiddentems";
import NavbarShowedItems from "./components/NavbarShowedItems";

export function Navbar() {
    const stickyNavbar = useStickyNavbar();

    return (
        <NavbarContext.Provider value={stickyNavbar}>
            <MaterialNavbar className="sticky w-full top-0 z-50 border-b border-x-0 border-t-0 border-gray-400 dark:border-gray-700 bg-white bg-opacity-60 dark:bg-zinc-700 dark:bg-opacity-80 backdrop-blur py-1 px-4 lg:px-8" fullWidth={true}>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <MainLogo />
                    <NavbarShowedItems />
                </div>
                <NavbarHiddenItems />
            </MaterialNavbar>
        </NavbarContext.Provider>
    );
}
