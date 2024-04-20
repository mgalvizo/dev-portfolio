import styled from 'styled-components';

const StyledSkillItem = styled.li`
    text-align: center;

    h3 {
        font-size: var(--heading-m-fsz);
        line-height: var(--heading-m-lht);
        letter-spacing: -1px;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        h3 {
            font-size: var(--heading-l-fsz);
            line-height: var(--heading-l-lht);
            letter-spacing: -1.5px;
            margin-bottom: calc(var(--web-margin-xs) + var(--web-margin-s));
        }
    }
`;

export default StyledSkillItem;
