import StyledDevImage from './styled/DevImage.styled';
import MiguelMobile from '../assets/image-profile-mobile.webp';
import MiguelTablet from '../assets/image-profile-tablet.webp';
import MiguelDesktop from '../assets/image-profile-desktop.webp';

interface DevImageProps {
    devName: string;
}

const DevImage = ({ devName }: DevImageProps) => {
    return (
        <StyledDevImage>
            <source
                media="(min-width: 1232px)"
                srcSet={MiguelDesktop}
                type="image/webp"
            />
            <source
                media="(min-width: 768px)"
                srcSet={MiguelTablet}
                type="image/webp"
            />
            <source
                media="(min-width: 320px)"
                srcSet={MiguelMobile}
                type="image/webp"
            />
            <img src={MiguelMobile} alt={devName} width="348" height="766" />
        </StyledDevImage>
    );
};

export default DevImage;
