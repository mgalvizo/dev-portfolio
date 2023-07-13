import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { PortfolioContextProvider } from './context/portfolioContext.tsx';

const element = document.getElementById('root') as HTMLElement;
const root = createRoot(element);

root.render(
    <StrictMode>
        <PortfolioContextProvider>
            <App />
        </PortfolioContextProvider>
    </StrictMode>
);
