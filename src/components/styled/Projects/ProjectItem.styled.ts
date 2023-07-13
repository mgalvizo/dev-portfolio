import styled from 'styled-components';

const StyledProjectItem = styled.li`
    display: flex;
    flex-flow: column wrap;
    gap: var(--web-margin-l);

    h3 {
        font-size: var(--heading-s-fsz);
        line-height: var(--heading-s-lht);
        text-transform: uppercase;
        margin-bottom: var(--web-margin-s);
    }

    .links__container {
        display: flex;
        flex-flow: row wrap;
        justify-content: start;
        align-items: center;
        gap: var(--web-margin-xl);
    }

    // 768px
    @media only screen and (min-width: 48em) {
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        .image__container {
            position: relative;
            cursor: pointer;

            &:hover {
                .overlay__container {
                    opacity: 1;
                }
            }
        }

        .overlay__container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            gap: calc(var(--web-margin-xs) + var(--web-margin-xl2));
            background-color: rgba(0, 0, 0, 0.75);
            opacity: 0;
            transition-property: opacity;
            transition-duration: 0.25s;
            transition-timing-function: ease-in-out;
        }
    }
`;

export default StyledProjectItem;
