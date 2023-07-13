import styled from 'styled-components';

const StyledDevImage = styled.picture`
    display: block;
    text-align: center;

    img {
        width: 175px;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        img {
            width: 322px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: -2;
            transform: translateX(var(--web-margin-xl)) translateY(0);
        }
    }

    // 900px
    @media only screen and (min-width: 56.25em) {
        img {
            transform: translate(0);
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        img {
            width: 445px;
        }
    }
`;

export default StyledDevImage;
