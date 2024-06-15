import { HorizontalLogoWithLabel } from "@components/shared/Logo";
import Link from "next/link";

export default function MainLogo() {
    return (
        <Link href="/">
            <HorizontalLogoWithLabel />
        </Link>
    );
}
