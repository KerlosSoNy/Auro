import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser } from "@/app/lip/appwrite";

interface GlobalContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    user: any;
    setUser: (value: any) => void;
    isLoading: boolean;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                if (user) {
                    setUser(user);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            })
            .catch((error) => {
                console.error(error);
                setIsLoggedIn(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
