import { Typography } from "@material-tailwind/react";
import Link from "next/link";

interface navbarItemProps {
    children: React.ReactNode;
    href: string;
}

export default function NavbarItem({ children, href }: navbarItemProps) {
    return (
        <Typography
            as="li"
            variant="small"
            //   color="blue-gray"
            className="p-1 font-normal text-slate-800 dark:text-slate-100"
        >
            <Link href={href} className="flex items-center">
                {children}
            </Link>
        </Typography>
    );
}
