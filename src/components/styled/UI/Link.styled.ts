import styled from 'styled-components';

const StyledLink = styled.a`
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.25px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--green);
    transition-property: color;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    cursor: pointer;

    &:hover {
        color: var(--green);
    }
`;

export default StyledLink;
