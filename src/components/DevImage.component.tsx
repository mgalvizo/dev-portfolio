import StyledDevImage from './styled/DevImage.styled';
import AdamMobile from '../assets/image-profile-mobile.webp';
import AdamTablet from '../assets/image-profile-tablet.webp';
import AdamDesktop from '../assets/image-profile-desktop.webp';

const DevImage = () => {
    return (
        <StyledDevImage>
            <source
                media="(min-width: 1232px)"
                srcSet={AdamDesktop}
                type="image/webp"
            />
            <source
                media="(min-width: 768px)"
                srcSet={AdamTablet}
                type="image/webp"
            />
            <source
                media="(min-width: 320px)"
                srcSet={AdamMobile}
                type="image/webp"
            />
            <img src={AdamMobile} alt="Adam Keyes" />
        </StyledDevImage>
    );
};

export default DevImage;
