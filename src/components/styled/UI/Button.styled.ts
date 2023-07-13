import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: transparent;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.25px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--green);
    cursor: pointer;
    transition-property: color;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &:hover {
        color: var(--green);
    }
`;

export default StyledButton;
