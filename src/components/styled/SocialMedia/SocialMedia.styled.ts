import styled from 'styled-components';

const StyledSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--web-margin-l);

    // 768px
    @media only screen and (min-width: 48em) {
        gap: var(--web-margin-xl);
    }
`;

export default StyledSocialMedia;
