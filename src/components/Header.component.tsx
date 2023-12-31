import { ReactNode } from 'react';
import { StyledHeader } from './styled/Header.styled';

interface HeaderProps {
    children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return <StyledHeader as="header">{children}</StyledHeader>;
};

export default Header;
