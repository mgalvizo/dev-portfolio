import styled from 'styled-components';
import Circle from '../../assets/pattern-circle.svg';
import Rings from '../../assets/pattern-rings.svg';
import { StyledComponent, StyledComponentContent } from './UI/Component.styled';

const StyledHeader = styled(StyledComponent)`
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

const StyledHeaderContent = styled(StyledComponentContent)`
    position: relative;
    padding-bottom: calc(var(--web-padding-xl2) * 2);

    &::before,
    &::after {
        position: absolute;
        top: 0;
        content: '';
    }

    &::before {
        left: 0;
        background-image: url(${Rings});
        background-repeat: no-repeat;
        width: var(--rings-width);
        height: var(--rings-height);
        transform: translateX(calc(var(--web-margin-xl2) * 9 * -1))
            translateY(calc(var(--web-margin-xl2) * 3));
        z-index: -1;
    }

    &::after {
        right: 0;
        background-image: url(${Circle});
        background-repeat: no-repeat;
        width: var(--circle-width);
        height: var(--circle-height);
        transform: translateX(calc(var(--web-margin-xl2) * 2))
            translateY(calc(var(--web-margin-xl) * 8));
        z-index: -1;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-bottom: calc(var(--web-padding-xl) * 2);

        &::before {
            transform: translateX(calc((50% + var(--web-margin-xl)) * -1))
                translateY(
                    calc(var(--web-margin-s) + var(--web-margin-xl2) * 2)
                );
        }

        &::after {
            z-index: 1;
            transform: translateX(calc(50% + var(--web-margin-xl)))
                translateY(
                    calc(var(--web-margin-xl2) * 11 + var(--web-margin-xl))
                );
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-bottom: calc(var(--web-padding-xl) * 5);

        &::before {
            transform: translateX(
                    calc(
                        (var(--web-margin-xl) + var(--web-margin-xl2) * 6) * -1
                    )
                )
                translateY(
                    calc(var(--web-margin-xl2) * 3 + var(--web-margin-m))
                );
        }

        &::after {
            transform: translateX(
                    calc(
                        (
                                var(--web-margin-xs) + var(--web-margin-m) +
                                    var(--web-margin-xl2) * 9
                            ) * -1
                    )
                )
                translateY(calc(var(--web-margin-xl2) * 13));
        }
    }
`;

const StyledHeaderLogoAndSocial = styled.section`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding-top: var(--web-padding-l);
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    gap: var(--web-margin-l);

    // 768px
    @media only screen and (min-width: 48em) {
        position: static;
        flex-direction: row;
        justify-content: space-between;
        padding-top: var(--web-padding-xl);
        padding-bottom: calc(var(--web-padding-xl) * 3);
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-bottom: calc(var(--web-padding-xl2) * 3);
    }
`;

const StyledHeaderLogoContainer = styled.div`
    h1 {
        font-size: var(--heading-s-fsz);
        line-height: var(--heading-s-lht);
        letter-spacing: -0.333px;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        h1 {
            font-size: var(--heading-m-fsz);
            line-height: var(--heading-m-lht);
            letter-spacing: -0.444px;
        }
    }
`;

const StyledHeaderSocialContainer = styled.div``;

const StyledHeaderMainImage = styled.section`
    max-width: 568px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;

    // 768px
    @media only screen and (min-width: 48em) {
        max-width: none;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 220px;
        align-items: end;
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        grid-template-columns: 1fr 320px;
        align-items: center;
    }
`;

const StyledHeaderDevImageContainer = styled.div`
    margin-bottom: var(--web-margin-xl2);
    // 768px
    @media only screen and (min-width: 48em) {
        order: 2;
        margin-bottom: 0;
    }
`;

const StyledHeaderTaglineAndCTA = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: var(--web-margin-l);
    align-items: center;
    text-align: center;

    h2 {
        font-size: 4rem;
        line-height: 1;
        letter-spacing: -1px;

        br {
            display: none;
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        order: 1;
        align-items: start;
        text-align: left;
        gap: var(--web-margin-xl);

        h2 {
            max-width: 500px;
            margin-bottom: var(--web-margin-xl);
            font-size: 7.2rem;
            letter-spacing: -2px;

            br {
                display: block;
            }
        }

        p {
            max-width: 450px;
        }
    }

    // 900px
    @media only screen and (min-width: 56.25em) {
        padding-right: var(--web-padding-xl);

        p {
            max-width: 550px;
            margin-bottom: calc(var(--web-margin-xl) * 2);
        }
    }

    // 900px
    @media only screen and (min-width: 64em) {
        h2 {
            max-width: 550px;
        }

        p {
            max-width: 600px;
            margin-bottom: calc(var(--web-margin-xl) * 2);
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        gap: 0;

        h2 {
            max-width: 710px;
            margin-bottom: var(--web-margin-xl2);
            font-size: var(--heading-xl-fsz);
            letter-spacing: -2.5px;

            br {
                display: none;
            }
        }

        p {
            max-width: 650px;
            margin-bottom: calc(var(--web-margin-xl) * 2);
        }
    }
`;

const StyledHeaderDevName = styled.span`
    display: inline-block;
    position: relative;
    border-bottom: 4px solid var(--green);
`;

export {
    StyledHeader,
    StyledHeaderContent,
    StyledHeaderLogoAndSocial,
    StyledHeaderLogoContainer,
    StyledHeaderSocialContainer,
    StyledHeaderMainImage,
    StyledHeaderDevImageContainer,
    StyledHeaderTaglineAndCTA,
    StyledHeaderDevName,
};
