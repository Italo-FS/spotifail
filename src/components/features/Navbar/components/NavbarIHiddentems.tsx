import { Collapse } from "@material-tailwind/react";
import { NavbarContext } from "../useNavbar";
import { useContext } from "react";
import NavbarList from "./NavbarList";
import Button from "@components/shared/Button";

export default function NavbarHiddenItems() {
    const { openNav } = useContext(NavbarContext);

    return (
        <Collapse open={openNav}>
            <NavbarList />
            <Button size="sm" fullWidth className="mb-2">
                <span>Tema</span>
            </Button>
            <Button size="sm" fullWidth className="mb-2">
                <span>Entrar</span>
            </Button>
        </Collapse>
    );
}
