import styled from 'styled-components';

const StyledSocialMediaItem = styled.span`
    a:link,
    a:visited {
        &:hover {
            svg {
                fill: var(--green);
            }
        }
    }

    span {
        cursor: pointer;

        &:hover {
            svg {
                fill: var(--green);
            }
        }
    }

    svg {
        fill: var(--white);
        transition-property: fill;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }
`;

export default StyledSocialMediaItem;
