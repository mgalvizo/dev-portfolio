import Carousel from 'react-multi-carousel';
import { isMobile } from 'react-device-detect';
import {
    StyledSkillsCarousel,
    StyledSkillsCarouselContainer,
} from '../styled/Skills/SkillsCarousel.styled';
import SkillItem from './SkillItem.component';
import { SKILLS } from '../../helpers/constants';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    largeDesktop: {
        breakpoint: { max: 5000, min: 1232 },
        items: 3,
        slidesToSlide: 1,
    },
    smallDesktop: {
        breakpoint: { max: 1231, min: 768 },
        items: 2,
        slidesToSlide: 1,
    },
    min: {
        breakpoint: { max: 767, min: 320 },
        items: 1,
        slidesToSlide: 1,
    },
};

const SkillsCarousel = () => {
    const renderedSkills = SKILLS.map(skill => {
        const { id } = skill;
        return <SkillItem as="div" key={id} skill={skill} />;
    });

    return (
        <StyledSkillsCarousel>
            <StyledSkillsCarouselContainer>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={true}
                    showDots={isMobile ? false : true}
                    infinite={true}
                    autoPlay={isMobile ? false : true}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                    // customTransition="all 0.25"
                    transitionDuration={250}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={['min']}
                    dotListClass="custom-dot-list-style"
                    itemClass="custom-item-class"
                >
                    {renderedSkills}
                </Carousel>
            </StyledSkillsCarouselContainer>
        </StyledSkillsCarousel>
    );
};

export default SkillsCarousel;
