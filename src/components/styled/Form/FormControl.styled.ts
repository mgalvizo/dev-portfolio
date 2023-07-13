import styled from 'styled-components';

const StyledFormControl = styled.div`
    position: relative;

    .input__container {
        position: relative;

        &.error {
            input,
            textarea {
                border-color: var(--red);
            }
        }

        .warning {
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translateX(0) translateY(calc(var(--web-margin-m) * -1));

            svg {
                width: 24px;
                height: 24px;
                fill: var(--red);
            }
        }
    }

    .errorMessage {
        display: block;
        position: absolute;
        top: 100%;
        right: 0;
        text-align: right;
        color: var(--red);
        font-size: 1.2rem;
    }

    input,
    textarea {
        position: relative;
        width: 100%;
        display: block;
        padding-right: var(--web-padding-l);
        padding-left: var(--web-padding-l);
        border: 0;
        outline: none;
        background-color: transparent;
        color: inherit;
        font-family: inherit;
        font-size: var(--body-fsz-s);
        border-bottom: 1px solid var(--white);

        &::placeholder {
            color: var(--white);
            opacity: 0.5;
            text-transform: uppercase;
        }

        &:active,
        &:focus {
            border-color: var(--green);
            background-color: transparent;
        }
    }

    input {
        height: var(--input-height);
        line-height: var(--input-height);
    }

    textarea {
        padding-top: var(--web-padding-l);
        padding-bottom: var(--web-padding-l);
        overflow: auto;
        resize: none;
        height: var(--textarea--height);
    }
`;

export default StyledFormControl;
