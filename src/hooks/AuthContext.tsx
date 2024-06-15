import { getUser } from "@/logic/auth";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState({ name: '' });

    useEffect(() => {
        if (isAuthenticated) {
            getUser().then((userData) => {
                setUserData(userData.user);
            })
        } else {
            setUserData({ name: 'Visitante' });
        }
    }, [isAuthenticated])

    useEffect(() => {
        getUser().then((response) => {
            if (response && response.user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        }).catch(error => {
            throw error
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                userData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
