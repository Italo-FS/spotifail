import HamburguerMenu from "./HamburguerMenu";
import ThemeSwitch from "@components/features/ThemeSwitch";
import NavButton from "./NavbarButton";
import NavbarList from "./NavbarList";
import Link from "next/link";
import ProfileMenu from "@components/features/Navbar/components/ProfileMenu";

export default function NavbarShowedItems() {
    return (
        <>
            <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">
                    <NavbarList />
                </div>
                <ThemeSwitch />
                {/* <Link href="/sign_in" ><NavButton>Entrar</NavButton></Link> */}
                <ProfileMenu />
                <HamburguerMenu />
            </div>
        </>
    );
}
