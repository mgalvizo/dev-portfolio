import styled from 'styled-components';
import Rings from '../../../assets/pattern-rings.svg';

const StyledSkillsCarousel = styled.section`
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

const StyledSkillsCarouselContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
`;

export { StyledSkillsCarousel, StyledSkillsCarouselContainer };
