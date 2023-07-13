import styled from 'styled-components';
import Rings from '../../assets/pattern-rings.svg';

const StyledFooter = styled.footer`
    padding-top: calc(var(--web-padding-xl) * 2);
    padding-bottom: calc(var(--web-padding-xl) * 2);
    padding-right: var(--web-margin-m);
    padding-left: var(--web-margin-m);
    background-color: var(--dark-gray);

    .contact__form {
        position: relative;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        gap: calc(var(--web-margin-s) + var(--web-margin-xl2));
        max-width: 568px;
        margin-right: auto;
        margin-left: auto;
        padding-bottom: calc(var(--web-padding-s) + var(--web-padding-xl2) * 2);

        &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            background-image: url(${Rings});
            background-repeat: no-repeat;
            width: var(--rings-width);
            height: var(--rings-height);
            transform: translateX(
                    calc((var(--web-margin-l) + var(--web-margin-xl2) * 8) * -1)
                )
                translateY(
                    calc((var(--web-margin-s) + var(--web-margin-xl2) * 2) * -1)
                );
            content: '';
        }
    }

    .form__instructions {
        text-align: center;

        h2 {
            font-size: 4rem;
            line-height: 1;
            letter-spacing: -1px;
            margin-bottom: var(--web-margin-l);
        }
    }

    .footer {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        gap: var(--web-margin-l);
        padding-top: var(--web-padding-xl2);
        border-top: 1px solid var(--white);
    }

    .logo {
        h2 {
            font-size: var(--heading-s-fsz);
            line-height: var(--heading-s-lht);
            letter-spacing: -0.333px;
        }
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-right: var(--web-margin-l);
        padding-left: var(--web-margin-l);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-right: var(--web-margin-xl);
        padding-left: var(--web-margin-xl);
        padding-bottom: var(--web-padding-xl2);

        .contact__form {
            max-width: 445px;

            &::before {
                transform: translateX(-100%)
                    translateY(calc(var(--web-margin-l) * -1));
            }
        }

        .form__instructions {
            h2 {
                font-size: 7.2rem;
                letter-spacing: -2px;
            }
        }

        .footer {
            padding-top: var(--web-padding-xl);
            flex-direction: row;
            justify-content: space-between;
        }

        .logo {
            h2 {
                font-size: var(--heading-m-fsz);
                line-height: var(--heading-m-lht);
                letter-spacing: -0.444px;
            }
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-top: calc(var(--web-padding-s) + var(--web-padding-xl2) * 2);
        padding-bottom: calc(var(--web-padding-s) + var(--web-padding-xl2) * 2);

        .contact__form {
            max-width: none;
            grid-template-columns: repeat(2, 1fr);
            column-gap: calc(var(--web-margin-m) + var(--web-margin-xl2) * 5);

            &::before {
                transform: translateX(
                        calc(
                            (var(--web-margin-s) + var(--web-margin-xl2) * 9) *
                                -1
                        )
                    )
                    translateY(
                        calc(
                            (var(--web-margin-xs) + var(--web-margin-xl2)) * -1
                        )
                    );
            }
        }

        .form__instructions {
            text-align: left;

            h2 {
                font-size: var(--heading-xl-fsz);
                line-height: var(--heading-xl-lht);
                letter-spacing: var(--heading-xl-ls);
                margin-bottom: var(--web-margin-xl);
            }

            p {
                max-width: 445px;
            }
        }

        .footer {
            padding-top: calc(var(--web-padding-s) + var(--web-padding-xl2));
        }
    }
`;

export default StyledFooter;
