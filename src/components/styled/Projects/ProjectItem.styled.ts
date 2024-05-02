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
`;

const StyledProjectItemOverlayContainer = styled.div`
    // 1232px
    @media only screen and (min-width: 77em) {
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
`;

const StyledProjectItemImageContainer = styled.div`
    img {
        height: auto;
    }
    // 1232px
    @media only screen and (min-width: 77em) {
        position: relative;
        cursor: pointer;

        &:hover {
            ${StyledProjectItemOverlayContainer} {
                opacity: 1;
            }
        }
    }
`;

const StyledProjectItemInfo = styled.div``;

const StyledProjectItemSkills = styled.div``;

const StyledProjectItemLinksContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    align-items: center;
    gap: var(--web-margin-xl);
`;

export {
    StyledProjectItem,
    StyledProjectItemOverlayContainer,
    StyledProjectItemImageContainer,
    StyledProjectItemInfo,
    StyledProjectItemSkills,
    StyledProjectItemLinksContainer,
};
