import StyledSocialMedia from '../styled/SocialMedia/SocialMedia.styled';
import SocialMediaItem from './SocialMediaItem.component';
import { SOCIAL_MEDIA } from '../../helpers/constants';

const SocialMedia = () => {
    const renderedSocialMediaItems = SOCIAL_MEDIA.map(item => {
        const { id } = item;
        return <SocialMediaItem key={id} item={item} />;
    });

    return <StyledSocialMedia>{renderedSocialMediaItems}</StyledSocialMedia>;
};

export default SocialMedia;
