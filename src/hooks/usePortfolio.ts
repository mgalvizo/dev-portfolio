import { useContext } from 'react';
import { PortfolioContext } from '../context/portfolioContext';

const usePortfolio = () => {
    const portfolioContext = useContext(PortfolioContext);

    if (portfolioContext === undefined) {
        throw new Error(
            'Attempt to access PortfolioContext outside of PortfolioContextProvider'
        );
    }

    return portfolioContext;
};

export { usePortfolio };
