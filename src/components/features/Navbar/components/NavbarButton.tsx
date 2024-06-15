import Button from "@components/shared/Button";

interface buttonProps {
    children: React.ReactNode;
    onClick?: Function;
}

export default function NavButton({ children, onClick }: buttonProps) {
    return (
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
            <span>{children}</span>
        </Button>
    );
}
