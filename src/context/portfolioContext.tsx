import { useState, useEffect, createContext, ReactNode } from 'react';

interface InitialValue {
    isSmallScreen: boolean | undefined;
}

const initialValue: InitialValue = {
    isSmallScreen: undefined,
};

const PortfolioContext = createContext(initialValue);

interface PortfolioContextProviderProps {
    children?: ReactNode;
}

const PortfolioContextProvider = ({
    children,
}: PortfolioContextProviderProps) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let isSmallScreen: boolean | undefined;

    if (windowWidth) {
        isSmallScreen = windowWidth < 1232;
    }

    const contextValue = {
        isSmallScreen,
    };

    return (
        <PortfolioContext.Provider value={contextValue}>
            {children}
        </PortfolioContext.Provider>
    );
};

export { PortfolioContext, PortfolioContextProvider };
