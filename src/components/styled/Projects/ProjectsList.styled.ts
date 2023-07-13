import styled from 'styled-components';

const StyledProjectsList = styled.ul`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: var(--web-margin-xl2);
    list-style-type: none;

    // 768px
    @media only screen and (min-width: 48em) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: calc(var(--web-margin-xl) * 2);
        column-gap: var(--web-margin-l);
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        column-gap: var(--web-margin-xl);
        row-gap: calc(var(--web-margin-s) + var(--web-margin-xl) * 2);
    }
`;

export default StyledProjectsList;
