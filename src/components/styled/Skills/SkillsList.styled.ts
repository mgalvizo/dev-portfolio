import styled from 'styled-components';

const StyledSkillsList = styled.ul`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: var(--web-margin-l);
    text-align: center;
    list-style-type: none;

    // 768px
    @media only screen and (min-width: 48em) {
        grid-template-columns: repeat(2, 1fr);
        gap: calc(var(--web-margin-l) + var(--web-margin-xl));
        text-align: left;
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default StyledSkillsList;
