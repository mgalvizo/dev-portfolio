import { ReactNode } from 'react';
import StyledLink from '../styled/UI/Link.styled';

interface LinkProps {
    children?: ReactNode;
    href?: string;
}

const Link = ({ children, href }: LinkProps) => {
    return <StyledLink href={href}>{children}</StyledLink>;
};

export default Link;
