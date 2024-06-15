interface ISectionProps {
    children: React.ReactNode;
    className?: string;
}

export const Section = ({ children, className, ...rest }: ISectionProps) => {
    return (
        <section className={`container mt-2 mx-auto ${className}`} {...rest}>
            {children}
        </section>
    );
};

interface sectionHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionHeader = ({ children, className, ...rest }: sectionHeaderProps) => {
    return (
        <section className={`container mt-4 section-header component text-2xl text-center ${className}`}  {...rest}>
            <h2>
                <strong>{children}</strong>
            </h2>
        </section>
    );
};
