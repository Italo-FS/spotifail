import { createContext, useContext, useEffect, useState } from "react";
import { useThemeSwitch } from "./useThemeSwitch";

export const DefaultContext = createContext<any>(null);

interface IErrorMessageProps {
    header: string;
    body: string;
}

export const DefaultProvider = ({ children }: { children: React.ReactNode }) => {
    const [openModal, setOpenModal] = useState(false);
    const [headerText, setHeaderText] = useState('');
    const [bodyText, setBodyText] = useState('');

    const [color, setColor] = useState('white');
    const themeSwitch = useThemeSwitch();

    const handleOpenModal = () => setOpenModal(!openModal);

    const showModal = (show: boolean) => {
        setOpenModal(show)
    };

    const showError = ({ header, body }: IErrorMessageProps) => {
        setHeaderText(header);
        setBodyText(body);
        setOpenModal(true);
    }

    useEffect(() => {
        setColor(themeSwitch.theme == 'dark' ? 'white' : 'gray');
    }, [themeSwitch.theme]);

    return (
        <DefaultContext.Provider
            value={{
                openModal,
                headerText, setHeaderText,
                bodyText, setBodyText,
                color, setColor,
                handleOpenModal,
                showModal,
                showError,
            }}
        >
            {children}
        </DefaultContext.Provider>
    );
};

export const useDefaultContext = () => {
    return useContext(DefaultContext);
};
