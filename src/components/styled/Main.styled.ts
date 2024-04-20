import styled from 'styled-components';
import Rings from '../../assets/pattern-rings.svg';
import { StyledComponent, StyledComponentContent } from './UI/Component.styled';

const StyledMain = styled(StyledComponent)`
    padding-right: var(--web-padding-m);
    padding-left: var(--web-padding-m);

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-right: var(--web-padding-l);
        padding-left: var(--web-padding-l);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-right: var(--web-padding-xl);
        padding-left: var(--web-padding-xl);
    }
`;

const StyledMainContent = styled(StyledComponentContent)`
    border-top: 1px solid var(--white);
`;

const StyledSkillsList = styled.section`
    position: relative;
    padding-top: var(--web-padding-xl2);
    padding-bottom: var(--web-padding-xl2);
    border-bottom: 1px solid var(--white);

    &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: url(${Rings});
        background-repeat: no-repeat;
        width: var(--rings-width);
        height: var(--rings-height);
        transform: translateX(
                calc(var(--web-margin-l) + var(--web-padding-xl2) * 8)
            )
            translateY(50%);
        z-index: -1;
        content: '';
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-top: calc(var(--web-padding-l) + var(--web-padding-xl));
        padding-bottom: 0;
        border-bottom: 0;

        &::after {
            transform: translateX(calc(var(--web-margin-xl2) * 10))
                translateY(50%);
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-top: calc(var(--web-padding-xl) + var(--web-padding-xl2));
        &::after {
            transform: translateX(
                    calc(var(--web-margin-s) + var(--web-margin-xl2) * 10)
                )
                translateY(50%);
        }
    }
`;

const StyledProjectsList = styled.section`
    padding-top: calc(var(--web-padding-xl2) * 2);
    padding-bottom: calc(var(--web-padding-xl2) * 2);

    header {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--web-margin-xl2);
    }

    h2 {
        font-size: 4rem;
        line-height: 1;
        letter-spacing: -1px;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-top: calc(var(--web-padding-l) + var(--web-padding-xl2) * 2);
        padding-bottom: calc(var(--web-padding-l) + var(--web-padding-xl2) * 2);

        header {
            margin-bottom: calc(var(--web-margin-xl) * 2);
        }

        h2 {
            font-size: 7.2rem;
            line-height: 1;
            letter-spacing: -2px;
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-top: calc(var(--web-padding-l) + var(--web-padding-xl2) * 3);
        padding-bottom: calc(var(--web-padding-l) + var(--web-padding-xl2) * 3);

        header {
            margin-bottom: calc(var(--web-margin-xl2) * 2);
        }

        h2 {
            font-size: var(--heading-xl-fsz);
            line-height: var(--heading-xl-lht);
            letter-spacing: var(--heading-xl-ls);
        }
    }
`;

export { StyledMain, StyledMainContent, StyledSkillsList, StyledProjectsList };
