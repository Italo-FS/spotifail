import { useContext } from "react";
import { NavbarContext } from "../useNavbar";
import { navItemProps } from "../types";
import NavbarItem from "./NavbarItem";

export default function NavbarList() {
    const { routes } = useContext(NavbarContext);

    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {routes.map((route: navItemProps, idx: number) => (
                <NavbarItem href={route.href} key={idx}>
                    {route.name}
                </NavbarItem>
            ))}
        </ul>
    );
}
