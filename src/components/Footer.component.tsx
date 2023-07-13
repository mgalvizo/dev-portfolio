import { ReactNode } from 'react';
import StyledFooter from './styled/Footer.styled';

interface FooterProps {
    children?: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
    return <StyledFooter className="component">{children}</StyledFooter>;
};

export default Footer;
