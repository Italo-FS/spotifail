import { Avatar, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import Icon from "../../../shared/Icon";
import Link from "next/link";
import { useAuthContext } from "@hooks/AuthContext";
import { useRouter } from "next/router";
import Button from "@components/shared/Button";
import { useDefaultContext } from "@hooks/DefaultContext";

export default function ProfileMenu() {
    const { isAuthenticated, setIsAuthenticated, userData } = useAuthContext();

    const { color } = useDefaultContext();

    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const profileMenuItems = [
        {
            label: "Meu perfil",
            icon: <Icon icon="user" />,
            onClick: () => {
                router.push('/profile');
            },
        },
        {
            label: "Playlists",
            icon: <Icon icon="config" />,
            onClick: () => {
                router.push('/playlist');
            },
        },
        {
            label: "Sair",
            icon: <Icon icon="signOut" />,
            onClick: () => {
                setIsAuthenticated(false);
                // setUserData({});
                localStorage.removeItem('token');
                router.push('/sign_in');
            },
        },
    ];

    return (
        <>
            {isAuthenticated ? (
                <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                    <MenuHandler>
                        <Button
                            variant="text"
                            color="blue-gray"
                            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto capitalize"
                        >
                            <Avatar
                                variant="circular"
                                size="sm"
                                alt="tania andrew"
                                className={`border border-${color} p-0.5`}
                                src="user.png"
                            />
                            <Typography color={color}>{userData.name}</Typography>
                            <Icon icon="chevronDown" color={color} />
                        </Button>
                    </MenuHandler>
                    <MenuList className="p-1">
                        {profileMenuItems.map(({ label, icon, onClick }, key) => {
                            const isLastItem = key === profileMenuItems.length - 1;
                            return (
                                <MenuItem
                                    key={label}
                                    onClick={onClick}
                                    className={`flex items-center gap-2 rounded ${isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                                        }`}
                                >
                                    {icon}
                                    <Typography
                                        as="span"
                                        variant="small"
                                        className="font-normal"
                                        color={isLastItem ? "red" : "inherit"}
                                    >
                                        {label}
                                    </Typography>
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </Menu>
            ) : (
                <Link href="/sign_in" key="login"><Button>Entrar</Button></Link>
            )}
        </>
    )
}